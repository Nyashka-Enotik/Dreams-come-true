/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {
	
		const headerNav = document.getElementById("header").getElementsByClassName("nav")[0];
	window.addEventListener("scroll", () => {
		headerNav.classList[window.scrollY >= 150 ? "add" : "remove"]("fixed");
	}, { passive: true });


		// Mobile menu open/close
	const menuBtn = document.getElementById("header").getElementsByClassName("menu_btn")[0];
	const menuMob = document.getElementsByClassName("menu_mob")[0];
	const header = document.getElementById("header");
	menuBtn.addEventListener("click", () => {
		menuBtn.classList.toggle("active");
		menuMob.classList.toggle("open");
		header.classList.toggle("fixed");
		document.body.style.overflow = menuMob.classList.contains("open") ? "hidden" : "";
	}, { passive: true });

		// FAQ open/close
	//const faqBtn = document.getElementsByClassName("faq-row")[0];
	//const faqstealBtn = document.getElementsByClassName("steal-text")[0];
	//faqBtn.addEventListener("click", () => {
		//faqBtn.classList.toggle("active");
		//faqstealBtn.classList.toggle("open");
	//}, { passive: true });


var accordionItemTitles = document.querySelectorAll(".faq-title");

for (var i = 0; i < accordionItemTitles.length; i++) {
  accordionItemTitles[i].addEventListener("click", 
  function (event) {
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


}() );
