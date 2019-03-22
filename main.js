$header = document.getElementById('header');
$tw = document.getElementById('twitter');
$ig = document.getElementById('ig');
$fb = document.getElementById('facebook');
$left = document.getElementById('left');

console.log(window.innerWidth)

window.onscroll = function() {
	if(window.scrollY > 350){
				
		$header.style.background = '#3eb6d1'
		$header.style.boxShadow = '1px 1px 1px 1px rgba(70, 70, 70, .4)'
		/*$tw.style.fill = '#3eb6d1'
		$ig.style.fill = '#3eb6d1'
		$fb.style.fill = '#3eb6d1'*/
		
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
		console.log('left')
	}
	if(window.scrollY < 450 && window.innerWidth > 770 ){
		$left.style.position = 'initial'
	}
	
}