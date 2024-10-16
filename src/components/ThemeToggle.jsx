import React, { useEffect } from 'react';

import darkLight from '../assets/images/night-mode.svg'

const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
    useEffect(() => {
        // Set the theme based on the saved preference in localStorage
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.body.classList.toggle('dark-mode', currentTheme === 'dark');
        }
    }, []);

    const handleToggle = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        document.body.classList.toggle('dark-mode', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
        toggleTheme(newTheme);
    };

    return (
        <button onClick={handleToggle} className="theme-toggle">
            <img src={darkLight} className='theme-icon' alt='dark mode mohd javed' />
        </button>
    );
};

export default ThemeToggle;
