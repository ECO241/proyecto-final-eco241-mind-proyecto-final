import './Audio.css';
import { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5500'); // Asegúrate de que la URL sea la correcta para tu servidor

export function Audio(props) {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('pruebaConnection', (data) => {
      console.log('Received from server:', data);
    });

    socket.on('arduinoMessage', (message) => {
      console.log('Message from Arduino:', message);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    return () => {
      socket.off('connect');
      socket.off('pruebaConnection');
      socket.off('arduinoMessage');
      socket.off('disconnect');
    };
  }, []);

  const handlePlay = (command) => {
    socket.emit('orderForArduino', command);
    console.log(command); // Enviar comando al Arduino
  };

  const { audio, title, time, variant } = props;
  return (
    <div className={`audio-card ${variant}`}>
      <h2 className="audio-title">{title}</h2>
      <p className="audio-time">{time}</p>
      <audio controls className="audio-player">
        <source src={audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className='button-lights'>
        <button onClick={() => handlePlay('L')}>Enciende las luces</button> {/* Botón para encender */}
        <button  onClick={() => handlePlay('O')}>Apaga las luces</button> {/* Botón para apagar */}
      </div>
    </div>
  );
}
