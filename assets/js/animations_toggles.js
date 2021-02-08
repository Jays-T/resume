// /*	NAVIGATION AND NAVIGATION VISIBLE ON SCROLL */

// $(window).on("load", function () 
// {
//   mainNav(); 
// });      

// $(window).scroll(function () 
// {
//     mainNav();
//   });
//   function mainNav() 
//   {
//     let top =
//       (document.documentElement && document.documentElement.scrollTop) ||
//       document.body.scrollTop;
//     if (top > 40)
//       $(".side-navbar").stop().animate({
//         opacity: "0.6",
//         top: "0",
//       });
//     else
//       $(".side-navbar").stop().animate({
//         opacity: "0",
//         top: "5%",
//       });
//   }
  
window.onscroll = function () 
{
  progressBar();
  // highlight();
};

/* Fill progress bar and draw cat according to amount scrolled */

// function progressBar() 
// {
//   // get scroll + height
//   let winScroll =
//     document.body.scrollTop || document.documentElement.scrollTop;
//   let height =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;

//   // Calculate scroll for progress bar
//   let scrolled = (winScroll / height) * 72;

//   // // Declare cat stroke offset
//   // const totalCat = 53765.1015625;

//   // // Calculate scroll for cat drawing
//   // let catScroll = (winScroll / height) * 53765.1015625;

//   // // Store cat length
//   // let theCat = document.getElementById("cat_path");

//   // Below commented out code allows to get total cat draw length if needed
//   // let catLength = theCat.getTotalLength();
//   // console.log(catLength);

//   // Draw progress bar in equal relation to percent scrolled
//   document.getElementById("myBar").style.height = scrolled + "%";

//   // // Draw cat in equal relation to percent scrolled
//   // theCat.style.strokeDashoffset = totalCat - catScroll;
// }

// /* Fade in Highlight on scroll */

// function highlight() 
// {
//   let scroll = $(window).scrollTop();
//   let height = $(window).height();

//   $(".highlight").each(function () 
//   {
//     var pos = $(this).offset().top;
//     if (scroll + height >= pos) 
//     {
//       $(this).addClass("active");
//     } else {
//       $(this).removeClass("active");
//     }
//     // console.log(pos);
//     // console.log(scroll);
//   });
// }

// Handle animation timings

window.addEventListener('load', () => {
    
  document.getElementById('loader').classList.add('fade-out-loader');
  setTimeout(startCat, 2940);
  setTimeout(revealCat, 1800);
  setTimeout(startText, 5450);
  // setTimeout(greyCat, 10200);
  setTimeout(revealContent, 8200);
});

function startText() {
  const mainTextAnim = document.getElementById('main-text-animation');

  mainTextAnim.classList.remove('hidden');
  mainTextAnim.classList.add('overlay');
}

function startCat() {
  const mainCatAnim = document.getElementById('cat_path');

mainCatAnim.classList.add('draw');
}

// function greyCat() {
//   const greyCatAnim = document.getElementById('cat_path');

//   greyCatAnim.classList.remove('draw');
//   greyCatAnim.classList.add('draw-two');
// }

function revealContent() {
  const content = document.getElementById('slides');
  const headlineSocial = document.getElementById('headline-and-social');
  const scrollableHide = document.getElementById('is-scrollable');

  content.classList.remove('hide-slides');
  headlineSocial.classList.remove('hide-slides');
  scrollableHide.classList.remove('hide-slides');

  content.classList.add('show-slides');
  headlineSocial.classList.add('show-slides');
  scrollableHide.classList.add('show-slides');
}

function revealCat() {
  const cat = document.getElementById('draw-content');

  cat.classList.remove('hidden');
  cat.classList.add('content-reveal');
}

// Toggle slides active state

const slideToggle = document.querySelectorAll('.slide');
  const headerAndSocialSwitch = document.getElementById('headline-and-social');
  const toggleWrap = document.querySelector('.hide-on-slide')
  const closeSlide = document.querySelectorAll('.close-slide')

  slideToggle.forEach(popup => popup.addEventListener('click', (e) =>{
    let activeSlide = document.querySelectorAll(".active");

    let i;
    for (i = 0; i < activeSlide.length; i++) {
      activeSlide[i].classList.toggle('active');
    }

    popup.classList.toggle('active');
    headerAndSocialSwitch.classList.add('hidden');
    toggleWrap.classList.add('inactive');
    closeSlide[i].classList.add('show-close');
  }));

  closeSlide.forEach(popup => popup.addEventListener('click', () =>{
    let removeActive = document.querySelectorAll(".active");

    let i;
    for (i = 0; i < removeActive.length; i++) {
      removeActive[i].classList.remove('active');
    }
    popup.classList.remove('show-close');
    headerAndSocialSwitch.classList.remove('hidden');
    toggleWrap.classList.remove('inactive');
  }));
