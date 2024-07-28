const themeToggle = document.getElementById('themeToggle');
const darkThemeLink = document.createElement('link');
darkThemeLink.rel = 'stylesheet';
darkThemeLink.href = 'path/to/dark.css';

let isDarkTheme = localStorage.getItem('darkTheme') === 'true';

function setTheme(dark) {
    if (dark) {
        document.head.appendChild(darkThemeLink);
        themeToggle.textContent = 'Switch to Light Theme';
    } else {
        if (document.head.contains(darkThemeLink)) {
            document.head.removeChild(darkThemeLink);
        }
        themeToggle.textContent = 'Switch to Dark Theme';
    }
    localStorage.setItem('darkTheme', dark);
    isDarkTheme = dark;
}

// Set initial theme
setTheme(isDarkTheme);

themeToggle.addEventListener('click', () => {
    setTheme(!isDarkTheme);
});