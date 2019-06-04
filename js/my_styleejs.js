// JavaScript Document

$(function() {  
    $("body").niceScroll();
});

// 2. Instance with object returned:
var nice = false;
$(function() {  
    nice = $("body").niceScroll();
});

// 3. Style a DIV and chage cursor color:
$(function() {  
    $("#thisdiv").niceScroll({cursorcolor:"#00F"});
});

// 4. DIV with "wrapper", formed by two divs, the first is the vieport, the latter is the content:
$(function() {
    $("#viewportdiv").niceScroll("#wrapperdiv",{cursorcolor:"#00F"});
});

// 5. Get nicescroll object:
var nice = $("#mydiv").getNiceScroll();

// 6. Hide scrollbars:
$("#mydiv").getNiceScroll().hide();

// 7. Check for scrollbars resize (when content or position have changed):
$("#mydiv").getNiceScroll().resize();

// 8. Scrolling to a position:
$("#mydiv").getNiceScroll(0).doScrollLeft(x, duration); // Scroll X Axis
$("#mydiv").getNiceScroll(0).doScrollTop(y, duration); // Scroll Y Axis


 $(window).scroll
 (
    function()
	{
        var h= $(window).scrollTop();
		if(h>600)
		{
			$(".scrool").fadeIn(2000);
		}else
		{
			$(".scrool").fadeOut(2000);
		}
	}
 
 ) ;
 
 $(".scrool").click(
 
   function()
   {
	   $("body").animate({scrollTop:'0'},2500);
   }
 
 
 );