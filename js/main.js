/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {


const iconMenu = document.querySelector('.menu_btn');
if(iconMenu){
	const menu_mob = document.querySelector('.menu');
	const reg = document.querySelector('.registr');
	const lang = document.querySelector('.lang');
	const social = document.querySelector('.social-widget');
	let parent = document.querySelector('.top_header');
	let mob_lang = document.createElement("div")
	mob_lang.className = "mob_lang";
	iconMenu.addEventListener("click",function(e){
		let contains = parent.contains(reg);
		if(contains){	
		menu_mob.prepend(mob_lang);
		mob_lang.append(reg);
		mob_lang.append	(lang);
		menu_mob.append(social);
		}
		else
		{
		parent.append(social);
		parent.append(reg);
		parent.append(lang);
		}
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menu_mob.classList.toggle('active');
	});
}

new Swiper('.slider', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1.2,
  spaceBetween: 20,
  autoHeight: true,
  whachOverflow:true,
  loop: true,

	
    breakpoints:{
		1024:{
			slidesPerView:3,
			  spaceBetween: 20,
		},
			480:{
			slidesPerView:2,
			spaceBetween: 20,
		},
	},
	watchSlidesProgress:true,
	watchSlideVisibility: true,
  mousewheel: {
    sensitivy: 1,
  },
pagination:{
	el:'.swiper-pagination',
	clickable:true,
},
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	
	
});












		const headerNav = document.getElementById("header").getElementsByClassName("nav")[0];
	window.addEventListener("scroll", () => {
		headerNav.classList[window.scrollY >= 150 ? "add" : "remove"]("fixed");
	}, { passive: true });


		// Mobile menu open/close
	//const menuBtn = document.getElementById("header").getElementsByClassName("menu_btn")[0];
	//const menuMob = document.getElementsByClassName("menu_mob")[0];
	//const header = document.getElementById("header");
	//menuBtn.addEventListener("click", () => {
	//	menuBtn.classList.toggle("active");
	//	menuMob.classList.toggle("open");
	//	header.classList.toggle("fixed");
	//	document.body.style.overflow = menuMob.classList.contains("open") ? "hidden" : "";
	//}, { passive: true });

		// FAQ open/close
	//const faqBtn = document.getElementsByClassName("faq-row")[0];
	//const faqstealBtn = document.getElementsByClassName("steal-text")[0];
	//faqBtn.addEventListener("click", () => {
		//faqBtn.classList.toggle("active");
		//faqstealBtn.classList.toggle("open");
	//}, { passive: true });

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


var acc = document.getElementsByClassName("faq-title");
let page = document.querySelector('.steal-text');
var i;
console.log(page);
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
	 page.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
/*
const accordionItemTitles = document.querySelectorAll(".faq-title");
if(accordionItemTitles.length > 0){

for (var i = 0; i < accordionItemTitles.length; i++) {
	accordionItemTitles[i].addEventListener("click",function (event) {
		event.preventDefault();
		event.target.classList.toggle("active");
		var accordionItemContent = event.target.nextElementSibling;

    if (!accordionItemContent.classList.contains('active')) {
      accordionItemContent.classList.add('active');
      accordionItemContent.style.height = 'auto';

      var height = accordionItemContent.clientHeight + 'px';

      accordionItemContent.style.height = '0px';

      setTimeout(function () {
        accordionItemContent.style.height = height;
      }, 0);
    } else {
      accordionItemContent.style.height = '0px';

      accordionItemContent.addEventListener('transitionend', 
        function () {
          accordionItemContent.classList.remove('active');
        }, {
          once: true
        });
      }
    });
}
}
*/

}() );
