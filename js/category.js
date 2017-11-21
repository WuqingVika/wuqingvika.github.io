//------------------
// category
//------------------



//hover the category-name show the detail posts
$(function(){
	$('.category-name').hover(function (){
		$('.category-posts').each(function (i){
			//hide the last hover
			$(this).addClass('slideDownMin').hide();
		});
		$(this).removeClass('slideDownMin').next('ul').show();		
	})
})
