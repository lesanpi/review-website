$header = document.getElementById('header');
$tw = document.getElementById('twitter');
$ig = document.getElementById('ig');
$fb = document.getElementById('facebook');
$left = document.getElementById('left');
$logo = document.getElementById('logo');
const $shares = document.getElementsByClassName('share');
const $sharesList = document.getElementsByClassName('share-list');

console.log($shares)
console.log(window.innerWidth)


$shares[0].addEventListener('click', (event) => {
    $sharesList[0].classList.toggle('visible')
});
$shares[1].addEventListener('click', (event) => {
    $sharesList[1].classList.toggle('visible')
});
$shares[2].addEventListener('click', (event) => {
    $sharesList[2].classList.toggle('visible')
});
/*$shares[3].addEventListener('click', (event) => {
    $sharesList[3].classList.toggle('visible')
});
$shares[4].addEventListener('click', (event) => {
    $sharesList[4].classList.toggle('visible')
});
$shares[5].addEventListener('click', (event) => {
    $sharesList[5].classList.toggle('visible')
});*/

window.onscroll = function() {
	if(window.scrollY > 350){
				
		$header.style.background = 'white'
		$header.style.boxShadow = '1px 1px 1px 1px rgba(150, 150, 150, .4)'
		$tw.style.fill = '#3eb6d1'
		$ig.style.fill = '#3eb6d1'
		$fb.style.fill = '#3eb6d1'
		$logo.style.background = '#3eb6d1'
		
	}
	if(window.scrollY <= 350){
		
		$header.style.background = 'transparent'
		$header.style.boxShadow = 'none'
		$tw.style.fill = 'white'
		$ig.style.fill = 'white'
		$fb.style.fill = 'white'
	}

	if (window.scrollY >= 450 && window.innerWidth > 770) {
		
		$left.style.position = 'fixed'
		$left.style.top = '100px'
		
	}
	if(window.scrollY < 450 && window.innerWidth > 770 ){
		
		$left.style.position = 'initial'
	}
	
}