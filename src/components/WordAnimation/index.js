import React, { useState, useEffect } from 'react';
import './index.css';

const WordAnimation = ({ content = '你好' }) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const chars = content.split('').map(char => ({
            char,
            strokes: getStrokesForChar(char)
        }));
        setCharacters(chars);
    }, [content]);

    useEffect(() => {
        let charIndex = 0;
        let strokeIndex = 0;

        const intervalId = setInterval(() => {
            if (charIndex < characters.length) {
                const char = characters[charIndex];
                if (strokeIndex < char.strokes.length) {
                    setCharacters(prev => {
                        const newChars = [...prev];
                        newChars[charIndex].strokes[strokeIndex].visible = true;
                        return newChars;
                    });
                    strokeIndex++;
                } else {
                    charIndex++;
                    strokeIndex = 0;
                }
            } else {
                clearInterval(intervalId);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, [characters]);

    return (
        <div className="word-animation">
            {characters.map((char, index) => (
                <div key={index} className="character">
                    {char.strokes.map((stroke, sIndex) => (
                        <span
                            key={sIndex}
                            className={`stroke ${stroke.visible ? 'visible' : ''}`}
                        >
                            {char.char}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
};

// 这个函数需要根据实际情况来实现，这里只是一个示例
function getStrokesForChar(char) {
    // 简单起见，我们假设每个字符有5个笔画
    return Array(5).fill().map(() => ({ visible: false }));
}

export default WordAnimation;