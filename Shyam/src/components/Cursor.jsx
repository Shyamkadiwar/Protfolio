import React, { useEffect } from 'react';

const CustomCursor = () => {
    useEffect(() => {
        const customCursor = document.createElement('div');
        const cursorStyles = {
            width: '35px', // Increase size for better visibility with the blur effect
            height: '35px',
            borderRadius: '50%',
            position: 'fixed',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
            backdropFilter: 'blur(3px)', // Apply blur effect
            border: '2px solid skyblue', // Sky blue border
            backgroundColor: 'rgba(255, 255, 255,)', // Transparent background with slight opacity
        };
        Object.assign(customCursor.style, cursorStyles);
        document.body.appendChild(customCursor);

        const moveCursor = (e) => {
            customCursor.style.left = `${e.clientX - customCursor.offsetWidth / 2}px`;
            customCursor.style.top = `${e.clientY - customCursor.offsetHeight / 2}px`;
        };

        const hideCursor = () => {
            customCursor.style.display = 'none';
        };

        const showCursor = () => {
            customCursor.style.display = 'block';
        };

        document.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseout', hideCursor);
        document.addEventListener('mouseover', showCursor);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseout', hideCursor);
            document.removeEventListener('mouseover', showCursor);
            document.body.removeChild(customCursor);
        };
    }, []);

    return null;
};

export default CustomCursor;
