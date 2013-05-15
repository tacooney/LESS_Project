/**
 * @author tacooney
 */
$(document).ready(function(){
	$.get("content/home.txt", function(data){
$('#content').html(data);
});

	var headerTag = $('header h1').get();
	TweenLite.to(headerTag, 5, {left:"500"})
	
	$("nav a").click(function(e){
		//alert($(this).html().toLowerCase());
		var txtName = $(this).html().toLowerCase();
		$.get("content/" + txtName + ".txt", function(data){
			$('#content').html(data);
		});
		
	})

});
