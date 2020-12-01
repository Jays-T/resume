/*	NAVIGATION AND NAVIGATION VISIBLE ON SCROLL */

$(window).on("load", function () 
{
  mainNav(); 
});      

$(window).scroll(function () 
{
    mainNav();
  });
  function mainNav() 
  {
    var top =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (top > 40)
      $(".side-navbar").stop().animate({
        opacity: "0.6",
        top: "25%",
      });
    else
      $(".side-navbar").stop().animate({
        opacity: "0",
        top: "45%",
      });
  }
  
window.onscroll = function () 
{
  progressBar();
  highlight();
};

/* Fill progress bar */

function progressBar() 
{
  let winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 52;
  let catScroll = (winScroll / height) * 53765.1015625;

  let theCat = document.getElementById("cat_path");
  let catLength = theCat.getTotalLength();

  document.getElementById("myBar").style.height = scrolled + "%";

  theCat.style.strokeDashoffset = catScroll;
}

/* Fade in Highlight on scroll */

function highlight() 
{
  let scroll = $(window).scrollTop();
  let height = $(window).height();

  $(".highlight").each(function () 
  {
    var pos = $(this).offset().top;
    if (scroll + height >= pos) 
    {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
    // console.log(pos);
    // console.log(scroll);
  });
}
