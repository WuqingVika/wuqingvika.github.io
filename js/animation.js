//------------------
// animation
//------------------


$(function(){
   $('.animation-item').hover(
   	function(){
    $(this).removeClass('itemRIn').addClass('itemLIn');   
   },function(){
   	$(this).removeClass('itemLIn').addClass('itemRIn');   
   });  
});