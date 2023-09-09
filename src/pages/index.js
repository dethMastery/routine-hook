const IndexPage = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nothing</title>

  <link rel="stylesheet" href="/css">
</head>
<body>
  <div class="main-container">
    <h1>
      There's nothing spawned here :(
    </h1>
  </div>

  <div class="nav">
    <button class="theme outline contrast" onclick="SwitchTheme()" id="theme"></button>
  </div>

  <div class="footer">
    made w/ 🤍, <a href="https://suphakit.net">Suphakit P.</a>
  </div>

  <script>
    const storageTheme = localStorage.getItem('theme')

    console.log();

    if (storageTheme != undefined) {
      document.querySelector('html').setAttribute('data-theme', storageTheme)
      if (storageTheme == 'light') {
        document.querySelector('#theme').innerHTML = "☀️"
      } else {
        document.querySelector('#theme').innerHTML = "🌙"
      }
    } else {
      localStorage.setItem('theme', theme)
      if (storageTheme == 'light') {
        document.querySelector('#theme').innerHTML = "☀️"
      } else {
        document.querySelector('#theme').innerHTML = "🌙"
      }
    }

    function SwitchTheme() {
      let themeFetch = document.querySelector('html').getAttribute('data-theme')

      if (themeFetch == 'light') {
        document.querySelector('html').setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        document.querySelector('#theme').innerHTML = "🌙"
      } else {
        document.querySelector('html').setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
        document.querySelector('#theme').innerHTML = "☀️"
      }
    }
  </script>
</body>
</html>`

module.exports = IndexPage
