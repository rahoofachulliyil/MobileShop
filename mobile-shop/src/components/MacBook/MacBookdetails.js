import React, { useEffect } from 'react'
// import $ from 'jquery';
import './mac.scss'
const MacBookdetails = () => {
	useEffect(() => {
		var
		carousel = document.querySelector('.carousel'),
		figure = carousel.querySelector('figure'),
		nav = carousel.querySelector('nav'),
		numImages = figure.childElementCount,
		theta =  2 * Math.PI / numImages,
		currImage = 0
	;
		
	nav.addEventListener('click', onClick, true);
	
	function onClick(e) {
		e.stopPropagation();
		
		var t = e.target;
		if (t.tagName.toUpperCase() != 'BUTTON')
			return;
		
		if (t.classList.contains('next')) {
			currImage++;
		}
		else {
			currImage--;
		}
		
		figure.style.transform = `rotateY(${currImage * -theta}rad)`;
	}
	  }, [])
	
  return (
    <div className="carousel">
	<figure>
    <img  className='rotate' src="https://tse3.mm.bing.net/th?id=OIP.jkbKctkbPKsIl2STo3wPEQHaEK&pid=Api&P=0" alt=""/>
    <img className='rotate'  src="https://source.unsplash.com/bjhrzvzZeq4/800x533" alt=""/>
		<img className='rotate' src="https://source.unsplash.com/EbuaKnSm8Zw/800x533" alt=""/>
		<img className='rotate' src="https://source.unsplash.com/kG38b7CFzTY/800x533" alt=""/>
		<img className='rotate' src="https://source.unsplash.com/nvzvOPQW0gc/800x533" alt=""/>
		<img className='rotate' src="https://source.unsplash.com/mCg0ZgD7BgU/800x533" alt=""/>
    <img className='rotate' src="https://source.unsplash.com/1FWICvPQdkY/800x533" alt=""/>
		<img className='rotate'src="https://source.unsplash.com/VkwRmha1_tI/800x533" alt=""/>
	</figure>
	<nav>
		<button className="nav prev">Prev</button>
		<button className="nav next">Next</button>
	</nav>
</div>
  )
}

export default MacBookdetails