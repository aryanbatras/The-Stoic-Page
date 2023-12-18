// Touch Effect
const body = document.querySelector('body');
const touch = document.querySelector('.touch');

body.addEventListener('touchmove', (details) => {
const x = details.touches[0].pageX;
const y = details.touches[0].pageY;
	
	touch.style.opacity = 1;
	touch.style.top = y + "px";
	touch.style.left = x + "px";
	touch.style.transform = "translate(-50%, -50%)"
	touch.style.transition = 'top 0.3s, left 0.3s ease-in-out';
})

body.addEventListener('touchend', () => {
	touch.style.top = null;
	touch.style.left = null;
	touch.style.opacity = 0;
});

// Textillate
$('.text h1').textillate({
	in: {
		effect: 'fadeInUp'
	},
	loop:true,
	out: {
		effect: 'fadeOutUp'
	}
});


// Gsap
gsap.to('.bottom, .text',{
	scrollTrigger: {
		scroller: 'body',
		trigger: '.visitus',
		scrub: 4,
		toggleActions: 'play pause resume reverse'
	},
	opacity: 0,
	y: -100,
	duration: 2
})

gsap.from('.page-two h2', {
	scrollTrigger: {
		scroller: 'body',
		trigger: '.page-two h3',
		scrub: 1,
		toggleActions: 'play pause resume reverse',
		onEnter: () => $('.page-two h2').textillate({ in: { effect: 'fadeInDown' }, loop:true, out: { effect: 'fadeOutRight' } })
	},
	opacity: 0,
	y: -100,
	duration: 2
})

gsap.from('.page-two h3', {
	scrollTrigger: {
		scroller: 'body',
		trigger: '.page-two h4',
		toggleActions: 'play pause resume reverse',
		onEnter: () => $('.page-two h3').textillate({ in: { effect: 'fadeInRight' } })
	},
	opacity: 0,
	y: 100,
	duration: 2
})