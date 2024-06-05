import './Audio.css';

export function Audio(props) {
    const { audio, title, time, variant } = props;

    return (
        <div className={`audio-card ${variant}`}>
            <h2 className="audio-title">{title}</h2>
            <p className="audio-time">{time}</p>
            <audio controls className="audio-player">
                <source src={audio} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}
