function collapseNavbar(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")}$(window).scroll(collapseNavbar),$(document).ready(collapseNavbar),$(function(){document.documentElement.lang;$("#language_select select").on("change",function(){var a=$(this).val();window.location.href="/"+("en"===a?"":a)}),$(".nav-button").click(function(){$(".nav-button,.primary-nav").toggleClass("open")})}),$(function(){$("a.page-scroll").bind("click",function(a){var n=$(this);$("html, body").stop().animate({scrollTop:$(n.attr("href")).offset().top},800,"easeInOutExpo"),a.preventDefault()})});


var images = document.querySelectorAll("img"),
  options = { root: null, rootMargin: "0px", threshold: 0.1 },
  fetchImage = function(a) {
    return (
      console.log(a),
      new Promise(function(b, c) {
        var d = new Image();
        (d.src = a), (d.onload = b), (d.onerror = c);
      })
    );
  },
  loadImage = function(a) {
    var b = a.dataset.src;
    fetchImage(b).then(function() {
      a.src = b;
    });
  },
  handleIntersection = function(a) {
    a.forEach(function(c) {
      0 < c.intersectionRatio &&
        (console.log(c.intersectionRatio), loadImage(c.target));
    });
  },
  observer = new IntersectionObserver(handleIntersection, options);
images.forEach(function(a) {
  observer.observe(a);
});