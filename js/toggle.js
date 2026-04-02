const button = document.getElementById("toggle")

button.addEventListener("click", change_theme)

function change_theme() {
  if (localStorage.getItem('theme') == "light") {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    button.classList.add("toggled");
  } else {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
    button.classList.remove("toggled");
  }
}

function detectColorScheme() {
  var theme = "light";    //default to light

  //local storage is used to override OS theme settings
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") == "dark") {
      var theme = "dark";
    }
  } else if (!window.matchMedia) {
    //matchMedia method not supported
    return false;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //OS theme setting detected as dark
    var theme = "dark";
  }

  //dark theme preferred, set document with a `data-theme` attribute
  if (theme == "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    button.classList.add("toggled")
  }
}
detectColorScheme();
change_theme()
