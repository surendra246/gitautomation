$(document).ready(function(){
	console.log('ready to use');
	$('.submit').click(function(){
		console.log('Clicked Submit');
		$('form').find('input').each(function(){
			console.log($(this).val());
		})
	})
});
