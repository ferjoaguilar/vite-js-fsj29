import './style.css'

// Initial state
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const savedTheme = localStorage.getItem('theme')
const initialTheme = savedTheme || (userPrefersDark ? 'dark' : 'light');

// Apply initial theme
document.documentElement.setAttribute('data-theme', initialTheme)

// App content
document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Theme Toggle Example</h1>

    <div class="theme-switch-wrapper">
      <span class="theme-icon">☀️</span>
      <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox">
        <div class="slider round"></div>
      </label>
      <span class="theme-icon">🌑</span>
    </div>

    <div class="content dark">
      <h2>Example dark and light themes</h2>
      <p>This is a simple example of how to toggle between light and dark themes using JavaScript.</p>

      <div class="card">
        <h3>Caracteristics</h3>
        <ul>
          <li>Light theme is the default.</li>
          <li>Dark theme is applied based on user preference or saved setting.</li>
          <li>Theme can be toggled using the switch above.</li>
          <li>Theme preference is saved in localStorage.</li>
        </ul>
      </div>
    </div>
  </div>

`