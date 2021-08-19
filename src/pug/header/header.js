const page_url = window.location.pathname
const homePageLink = document.getElementById('home_page')
const teamPageLink = document.getElementById('team_page')
const gridPageLink = document.getElementById('grid_page')
const flexboxPageLink = document.getElementById('flexbox_page')

if (page_url === '/' | page_url === '/index.html') {
  const welcomeBlock = document.getElementById('welcome_block')  
  welcomeBlock.innerHTML = '<h2 class="k-font welcome-block__title-m">Creative Template</h2><h1 class="welcome-block__title-l m-font">Welcome<br>to mogo</h1>'
  homePageLink.className += ' active'
} 

if (page_url === '/team.html') {
  teamPageLink.className += ' active'
} 

if (page_url === '/grid.html') {
  gridPageLink.className += ' active'
} 

if (page_url === '/flexbox.html') {
  flexboxPageLink.className += ' active'
} 