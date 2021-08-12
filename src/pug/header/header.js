const page_url = window.location.pathname

console.log(page_url);

if (page_url === '/' | page_url === '/index.html') {
  const welcome_block = document.getElementById('welcome_block')
  welcome_block.innerHTML = '<h2 class="k-font welcome-block__title-m">Creative Template</h2><h1 class="welcome-block__title-l m-font">Welcome<br>to mogo</h1>'
}