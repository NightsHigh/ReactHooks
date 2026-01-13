import { useState, useEffect } from "react";

export function StopWatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: number | undefined;

        if (isRunning) {
            interval = window.setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => window.clearInterval(interval);
    }, [isRunning]);

    const handleStart = () => setIsRunning(true);
    const handleStop = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = (seconds: number) => {
        const min = Math.floor(seconds / 60)
            .toString()
            .padStart(2, "0");
        const sec = (seconds % 60).toString().padStart(2, "0");
        return `${min}:${sec}`;
    };

    return (
        <div className="flex flex-col items-center bg-[#1a1a1a] p-8 my-8 mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Stopur</h2>
            <div className="text-4xl my-4 font-mono text-[#646cff] tracking-wider">
                {formatTime(time)}
            </div>
            <div className="flex gap-4">
                <button 
                    onClick={handleStart} 
                    disabled={isRunning}
                    className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    Start
                </button>
                <button 
                    onClick={handleStop} 
                    disabled={!isRunning}
                    className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    Stop
                </button>
                <button 
                    onClick={handleReset}
                    className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                    Nulstil
                </button>
            </div>
        </div>
    );
}
