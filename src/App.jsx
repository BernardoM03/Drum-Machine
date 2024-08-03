import React from "react";

export default function App() {
    const [display, setDisplay] = React.useState("");

    function playSound(event) {
        const { textContent, id } = event.target
        document.getElementById(textContent).play();
        setDisplay(id);
    }
    
    React.useEffect(() => {
        function playSoundKey(event) {
            const { key } = event;
            document.getElementById(key.toUpperCase()).play();
        }
        window.addEventListener("keypress", playSoundKey);

        return () => {
            window.removeEventListener("keypress", playSoundKey);
        }
    }, [])

    return (
        <main className="drum-machine" id="drum-machine">
            <div className="drum-pads">
                <button className="drum-pad" id="Heater 1" onClick={playSound}>
                    Q
                    <audio className="clip" id="Q" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio>    
                </button>
                <button className="drum-pad" id="Heater 2" onClick={playSound}>
                    W
                    <audio className="clip" id="W" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></audio>
                </button>
                <button className="drum-pad" id="Heater 3" onClick={playSound}>
                    E
                    <audio className="clip" id="E" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio>
                </button>
                <button className="drum-pad" id="Heater 4" onClick={playSound}>
                    A
                    <audio className="clip" id="A" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></audio>
                </button>
                <button className="drum-pad" id="Clap" onClick={playSound}>
                    S
                    <audio className="clip" id="S" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"></audio>
                </button>
                <button className="drum-pad" id="High Hat 1" onClick={playSound}>
                    D
                    <audio className="clip" id="D" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></audio>
                </button>
                <button className="drum-pad" id="Kick & Hat" onClick={playSound}>
                    Z
                    <audio className="clip" id="Z" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"></audio>
                </button>
                <button className="drum-pad" id="Kick" onClick={playSound}>
                    X
                    <audio className="clip" id="X" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"></audio>
                </button>
                <button className="drum-pad" id="High Hat 2" onClick={playSound}>
                    C
                    <audio className="clip" id="C" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></audio>
                </button>
            </div>
            <div className="interface">
                <div className="display" id="display">{display}</div>
            </div>
        </main>
    )
}