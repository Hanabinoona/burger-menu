var burger = document.querySelector('#button');
var nav =  document.querySelector('nav');
burger.addEventListener('click', function(){
	nav.classList.toggle('visible');
  burger.classList.toggle('visible');
});
