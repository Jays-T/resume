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
    let top =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (top > 40)
      $(".side-navbar").stop().animate({
        opacity: "0.6",
        top: "0",
      });
    else
      $(".side-navbar").stop().animate({
        opacity: "0",
        top: "5%",
      });
  }
  
window.onscroll = function () 
{
  progressBar();
  highlight();
};

/* Fill progress bar and draw cat according to amount scrolled */

function progressBar() 
{
  // get scroll + height
  let winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  // Calculate scroll for progress bar
  let scrolled = (winScroll / height) * 52;

  // Declare cat stroke offset
  const totalCat = 53765.1015625;

  // Calculate scroll for cat drawing
  let catScroll = (winScroll / height) * 53765.1015625;

  // Store cat length
  let theCat = document.getElementById("cat_path");

  // Below commented out code allows to get total cat draw length if needed
  // let catLength = theCat.getTotalLength();
  // console.log(catLength);

  // Draw progress bar in equal relation to percent scrolled
  document.getElementById("myBar").style.height = scrolled + "%";

  // Draw cat in equal relation to percent scrolled
  theCat.style.strokeDashoffset = totalCat - catScroll;
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
