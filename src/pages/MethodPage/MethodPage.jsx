/* eslint-disable react-hooks/exhaustive-deps */
import Button from "../../components/Button/Button";
import "./MethodPage.css";
import { useState, useEffect } from "react";

export function MethodPage() {
  const [matchingMethods, setMatchingMethods] = useState([]);
  const [why, setWhy] = useState("");
  const [method, setMethod] = useState("");
  const [music, setMusic] = useState(null);
  const [error, setError] = useState(null);

  const MethodDataMusic = async () => {
    try {
      // Llamada al endpoint para obtener el usuario
      const response = await fetch("http://localhost:5500/auth/music", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      // Obtener datos de la respuesta
      const data = await response.json();
      console.log(data);

      setWhy(data.data.why);
      setMethod(data.data.method);
      setMusic(data.data.music[0].audio);

      setMatchingMethods(matchingMethods);

      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error("Please put your email and password", error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    MethodDataMusic();
  }, []);

  return (
    <>
      <h4>
        Basándonos en tu selección de sonidos preferidos, hemos extraído este
        audio de nuestra base de datos que contribuirá a tu bienestar
      </h4>
      <Button />

      {error === null && (
        <>
          <div>
            <h5>Tus preferencias:</h5>
            <p>Why: {why}</p>
            <p>Method: {method}</p>
          </div>
          <h5>Audios recomendados:</h5>
          <p>
            {method.category} - {method.subcategory}
          </p>
          {music !== null && (
            <audio controls>
              <source src={music} type="audio/mp3" />
              Tu navegador no soporta el elemento de audio.
            </audio>
          )}
        </>
      )}
    </>
  );
}
