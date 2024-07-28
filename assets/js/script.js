document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const themeLink = document.createElement("link");
  themeLink.rel = "stylesheet";
  themeLink.href = "./assets/css/light.css"; // Start with light theme (same as styles.css)

  let isDarkTheme = localStorage.getItem("darkTheme") === "true";

  function setTheme(dark) {
    if (dark) {
      themeLink.href = "./assets/css/dark.css";
      themeToggle.textContent = "brightness_7"; // Sun icon
    } else {
      themeLink.href = "./assets/css/light.css";
      themeToggle.textContent = "brightness_6"; // Moon icon
    }
    localStorage.setItem("darkTheme", dark);
    isDarkTheme = dark;
  }

  // Add the theme link to the head
  document.head.appendChild(themeLink);

  // Set initial theme
  setTheme(isDarkTheme);

  themeToggle.addEventListener("click", () => {
    setTheme(!isDarkTheme);
  });
});
