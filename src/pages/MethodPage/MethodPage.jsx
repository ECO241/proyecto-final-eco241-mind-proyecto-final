/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
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
{error === null && (
        <>
          <div>
            <div className="top-div">
            <Link to="/Home">
          <img className="back-method" src='/src/assets/Back-small2.png' alt='Back' />
        </Link>
          <img className="logo-calm" src='/src/assets/Logo2.png' alt='Logo' />
        <h1 className='calm-title'>MIND</h1>
        <img className="yourbck-img" src='/src/assets/Custommeditate.png' alt='Calm' />
        </div>
        <h1 className="foryou">
        Crafted for Your Well-being
        </h1>
        <h4 className="foryou-p">
        A Personalized Audio Selection from Our Database Based on Your Favorite Sounds
      </h4>
      <div className="mood-container">
            <p className="why">Emotion:    {why}</p>
            <p className="method">Genre:    {method}</p>
            </div>
          </div>
          <h5 className="recomendation">Our recomendation</h5>
          <p>
            {method.category} {method.subcategory}
          </p>
          {music !== null && (
            <div className="audio-container">
            <audio controls>
                <source src={music} type="audio/mp3" />
                Tu navegador no soporta el elemento de audio.
            </audio>
        </div>
          )}
        </>
      )}
    </>
  );
}
