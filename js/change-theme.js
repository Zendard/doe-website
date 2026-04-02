function change_theme() {
  if (localStorage.getItem('theme') == "light") {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}
change_theme()
