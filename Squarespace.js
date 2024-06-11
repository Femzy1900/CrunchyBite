// header

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js">

</script>


<!-- Loading Screen -->
<div id="loadingscreen">
  <div id="loading" class="logo-container">
    <img src="https://images.squarespace-cdn.com/content/v1/64ffb6834739b90a16dcb997/b45783b3-c95e-4c22-9951-2c39f92ab89e/sunstar-led_%E7%94%BB%E6%9D%BF-1-%E5%89%AF%E6%9C%AC-3.png?format=1500w" alt="Your Logo">
  </div>
</div>
<!-- End of Loading Screen -->


{/* Footer */}

<script>
  window.addEventListener("load", function(){ 
    var loadingscreen = document.getElementById("loadingscreen");
    document.body.removeChild(loadingscreen); 
  });
  
  // hovering

document.addEventListener('DOMContentLoaded', function () {
  const mango = document.getElementById('block-9ecd968c963b3b41daff');
  const orange = document.getElementById('block-8d450912a644cb2bd055');

  [mango, orange].forEach(element => {
    element.addEventListener('mouseover', () => {
      [mango, orange].forEach(e => e.classList.add('hovered'));
    });

    element.addEventListener('mouseout', () => {
      [mango, orange].forEach(e => e.classList.remove('hovered'));
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {

  const element1 = document.getElementById('block-820799b0eb39297fd933');
  const element2 = document.getElementById('block-8882bbabc48fcf8f1227');
  const element3 = document.getElementById('block-8733f0008c0eea2270ca');
  const element4 = document.getElementById('block-31846409d862911437cf');
  const element5 = document.getElementById('block-b98a91c02ca24605d59a');
  const element6 = document.getElementById('block-93046dd330653bf71a60');

  [element1, element2].forEach(element => {
    element.addEventListener('mouseover', () => {
      [ element1, element2].forEach(e => e.classList.add('hovered1'));
    });

    element.addEventListener('mouseout', () => {
      [element1, element2].forEach(e => e.classList.remove('hovered1'));
    });
  });
});
  
document.addEventListener('DOMContentLoaded', function () {

  const element3 = document.getElementById('block-8733f0008c0eea2270ca');
  const element4 = document.getElementById('block-31846409d862911437cf');
  const element5 = document.getElementById('block-b98a91c02ca24605d59a');
  const element6 = document.getElementById('block-93046dd330653bf71a60');

  [element3, element4].forEach(element => {
    element.addEventListener('mouseover', () => {
      [ element3, element4].forEach(e => e.classList.add('hovered2'));
    });

    element.addEventListener('mouseout', () => {
      [element3, element4].forEach(e => e.classList.remove('hovered2'));
    });
  });
});
  
document.addEventListener('DOMContentLoaded', function () {

  const element5 = document.getElementById('block-b98a91c02ca24605d59a');
  const element6 = document.getElementById('block-93046dd330653bf71a60');

  [element5, element6].forEach(element => {
    element.addEventListener('mouseover', () => {
      [ element5, element6].forEach(e => e.classList.add('hovered3'));
    });

    element.addEventListener('mouseout', () => {
      [element5, element6].forEach(e => e.classList.remove('hovered3'));
    });
  });
});
  
// for additional info
  jQuery(document).ready(function($){
  	$('section.ProductItem-additional').insertAfter('.ProductItem-details .sqs-add-to-cart-button-wrapper');
  })

// for hovering method  
(function() {
    window.addEventListener('DOMContentLoaded', pcLinkItems);

    function pcLinkItems() {

      let pcLink = document.querySelectorAll('.list-item-content__button'); 
      let pcAddLinkItem = document.querySelectorAll('.list-item'); 
      let i;

      for (i=0; i<pcLink.length; i++) {
          let pcLinkAttr = pcLink[i].getAttribute("href");
          if (pcLink[i].textContent !== "") {
             pcAddLinkItem[i].innerHTML = "<a href=" + pcLinkAttr + ">" + pcAddLinkItem[i].innerHTML + "</a>"; 
          }
      }
    }
  }());

// drop down list in the technical resources
  $(".dropdown h3").click(function () {
    $(this).nextUntil("h3").slideToggle("slow");
  });

</script>



{/* css */}

//dynamic logo color
.dark, .dark-bold, .black, .black-bold {
  &.header .header-title-logo a {
   filter: invert(1);
    -webkit-filter: invert(1);
}}
#block-yui_3_17_2_1_1708982344821_5527 {
	pointer-events: none;
}
// for the dynamic mobile logo
  .dark,
  .dark-bold,
  .black,
  .black-bold {
    &.header .header-title--use-mobile-logo .header-mobile-logo picture img {
      filter: invert(1); /* Invert the color for smaller screens */
      -webkit-filter: invert(1);
    }
  }




//add arrow to the nav item
a.header-nav-folder-title:after{
 display: none;
}



// drop down
.header-nav-folder-content {
	display: none;
}

.chevron--right {
	display: none
}

// category group 
#block-8d450912a644cb2bd055 {
  margin-top:5px
}
#block-8d450912a644cb2bd055 a {
  text-decoration: none;
  color: black;
  font-size:16px;
}
#block-8882bbabc48fcf8f1227 {
  margin-top:5px
}
#block-8882bbabc48fcf8f1227 a {
  text-decoration: none;
  color: black;
  font-size:16px;
}
#block-31846409d862911437cf {
  margin-top:5px
}
#block-31846409d862911437cf a {
  text-decoration: none;
  color: black;
  font-size:16px;
}
#block-93046dd330653bf71a60 {
  margin-top:5px
}
#block-93046dd330653bf71a60 a {
  text-decoration: none;
  color: black;
  font-size:16px;
}

#block-9ecd968c963b3b41daff.hovered,#block-8d450912a644cb2bd055.hovered {
	transform: scale(1.04)
}
#block-820799b0eb39297fd933.hovered1,#block-8882bbabc48fcf8f1227.hovered1 {
	transform: scale(1.04)
}
#block-8733f0008c0eea2270ca.hovered2,#block-31846409d862911437cf.hovered2 {
	transform: scale(1.04)
}
.page-section a{
	text-decoration: none;
  	font-size:16px;
}
#block-23c1e666dd86c490adc5 a, #block-2e20236367a856d02ae6 a, #block-7a29cd2fa5fd8c18e79c a, #block-3e9ca183e9a057d7bb82 a {
	color: black;
}



#block-yui_3_17_2_1_1697538182954_4294 {
  text-align: left;
}


.sqsrte-text-color--accent {
  padding: 12px;
  background-color:#1470af;
  color: white;
  border-radius: 12px;
  text-decoration: none;
 
}
// section header for product
section[data-section-id="65d92ba5575b934bfa9af292"],section[data-section-id="65d92da1e6a3cf78687281ba"],section[data-section-id="65d9ba68b43efa7f734a3717"], section[data-section-id="65d9bab7a8e8634b66385007"] {
	width: fit-content
}

//@media (max-width: 2300px) and (min-width: 2000px) {
 // .sqs-block-content hr {
//	width: 2400px
//}
//}


// alignment of the additional info

.ProductItem .sqs-add-to-cart-button-wrapper {
  margin-bottom: 20px;
}

.ProductItem .ProductItem-additional {
  margin-top: 0px;
  display: flex;
  align-items: start;
  margin-left: 25px
}
.ProductItem .ProductItem-additional .sqs-layout  {
	display: flex;
  	justify-content: end
} 

.ProductItem .ProductItem-additional .sqs-block-image-figure {
  margin: 0px
} 

.ProductItem .ProductItem-additional .row .image-caption {
	position: relative;
  	bottom: 50px;
  	left: 48px
}
.ProductItem .ProductItem-additional .sqs-block {
  padding: 0px;
  padding-bottom: 15px;
}

.ProductItem .ProductItem-additional .image-block-wrapper  {
	width: 50px;
}
.ProductItem-additional .sqs-block-content h4 {
  font-weight: 800
}
@media (max-width: 768px) {
  .ProductItem {
	position: relative;
    margin-bottom: 100px
  }
  .ProductItem .ProductItem-additional {
	position: absolute;
    top: 96%;
    left: -10px
  }
}

// list items 
.list-item-content__button {
  opacity: 0;
  width: 100%;
  transform:translate(-95%);
  border-radius: 0 !important;
  margin-bottom: -28rem!important;

}

.list-item-content__buttom:hover {
	opacity:0!important;
 
}
.list-item-media-inner {
	border-top-left-radius: 10px;
  	border-top-right-radius: 10px
}
.list-item {
	background: #8eb6dc;
  	border-radius: 10px;
  	padding-bottom: 10px;
    transition: transform 0.4s ease;
    
}
@media (min-width: 2200px) {
  .list-item-content {
    padding-bottom: 10px;
    font-size: 1.5rem
  }
}

.list-item-content__button-wrapper {
  display:none
  
}
.list-item-content__title {
  font-size: 16px !important
}
.user-items-list {
  padding-top: 20px !important;
  padding-bottom: 50px !important
}

.list-item {
    transition: transform 0.4s ease;
}
	.list-item:hover {
	transform: scale(1.04)
  }
  .list-item {
	border-radius: 10px
  }
  .user-items-list-carousel__media-inner {
	border-top-left-radius: 10px;
  	border-top-right-radius: 10px
  }
 .user-items-list-carousel {
	display: block !important;
  	width: 100% !important;
  	overflow: hidden !important
}
 .desktop-arrows {
	 display: none
}
.user-items-list-carousel__slides  {
	transform: unset !important;
  	opacity: 1 !important;
  	transition-delay: unset !important;
  	transition: unset !important
  
}

.header-menu-nav-wrapper a{
  font-size: 30px
}
.user-items-list-item-container {
  .user-items-list-carousel__slide {
	pointer-events: initial !important;
  }
  li img {
    transition: 0.4s
  }
  li img:hover {
	transform: scale(1.08)
  }
}





// techniacal
#block-yui_3_17_2_1_1708721895705_4326,#block-c017a12b5aa1b81baf4f,#block-69983c345efec837fe8a, #block-12ecc7c2cc2bffa5b85d {
  border-bottom: 3px solid black;
  margin: 0px
}
.sqs-block-horizontalrule hr {
  background-color: #dfdfdf;
  
}
section[data-section-id="65d8723831476d6491eaf96f"] .fe-block {
	border-bottom: 2px solid lightgrey;
	transition: transform 0.2s ease;
  	margin-bottom:5px
}
section[data-section-id="65d8723831476d6491eaf96f"] .fe-block:hover {
	transform: scale(1.04);

}
section[data-section-id="65d8723831476d6491eaf96f"] .fe-block strong {
	font-weight: 500;
}
section[data-section-id="65d8723831476d6491eaf96f"] a {
	font-size: 15px;
}
section[data-section-id="65d8723831476d6491eaf96f"] h4 {
	font-size: 18px

}
@media screen and (max-width:767px) {
  .mobile-arrows {
    display: none !important
  }

.desktop-arrows.user-items-list-carousel__arrow-wrapper {
    display: flex !important;

.mobile-arrows {
    display: none !important;
}
button.user-items-list-carousel__arrow-button.user-items-list-carousel__arrow-button--left {
    position: relative;
    left: 0px;
}
button.user-items-list-carousel__arrow-button.user-items-list-carousel__arrow-button--right {
    position: relative;
    right: 0px;
}
}}

// Loading

#loadingscreen {
  background:#000;
  opacity: 1;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-container {
  width: 200px; /* Adjust the width and height according to your logo size */
  height: 200px;
  margin:550px auto;
  overflow: hidden;
  animation: zoomInOut 2s ease-in-out infinite; /* Adjust the animation duration as needed */
}

.logo-container img {
  width: 100%;
  height: 100%;
}

@keyframes zoomInOut {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .logo-container {
    max-width: 60%; 
  }
}