import React, { useState, useEffect } from 'react';

function Timer() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (running) {
            timer = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [running]);

    const handleStart = () => {
        setRunning(true);
    };

    const handleStop = () => {
        setRunning(false);
    };

    const handleReset = () => {
        setTime(0);
        setRunning(false);
    };

    return (
        <div className="container mt-5">
            <h2>Timer</h2>
            <div className="display-4">{time} seconds</div>
            <button className="btn btn-success" onClick={handleStart}>Start</button>
            <button className="btn btn-warning" onClick={handleStop}>Stop</button>
            <button className="btn btn-danger" onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Timer;