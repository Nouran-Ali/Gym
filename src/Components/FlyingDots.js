import React, { useState, useEffect } from 'react';
import '../styles/FlyingDots.css';

const FlyingDots = () => {
    const [dots, setDots] = useState([]);

    useEffect(() => {
        const createDot = () => {
            const dot = {
                id: Date.now(),
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                speed: Math.random() * 1 + 2,
            };

            setDots((prevDots) => [...prevDots, dot]);

            setTimeout(() => {
                setDots((prevDots) => prevDots.filter((d) => d.id !== dot.id));
            }, 5000);
        };

        const interval = setInterval(createDot, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="dot-container">
            {dots.map((dot) => (
                <div
                    key={dot.id}
                    className="dot"
                    style={{ left: dot.x, top: dot.y, animationDuration: `${dot.speed}s` }}
                />
            ))}
        </div>
    );
};

export default FlyingDots;