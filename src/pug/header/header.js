const page_url = window.location.pathname

if (page_url === '/') {
  const welcome_block = document.getElementById('welcome_block')
  welcome_block.innerHTML = '<h2 class="k-font welcome-block__title-m">Creative Template</h2><h1 class="welcome-block__title-l">Welcome<br>to mogo</h1>'
}