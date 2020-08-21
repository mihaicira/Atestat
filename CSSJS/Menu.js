console.log("finally!")
var $slider = document.getElementById('slider');
var $toggle = document.getElementById('toggle');

$slider.setAttribute('class' , 'slide-out');/*seteaza animatia ca fiind "out" cand pagina este incarcata*/

$toggle.addEventListener('click', function() {
	$slider.style.display="block"; /*pentru a evita animatia de la resetarea paginii, meniul are display="none", deci cand se apasa prima oara, displayul devine activ*/
    var isOpen = $slider.classList.contains('slide-in');
    $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
});