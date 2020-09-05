$(document).ready(function(){
	console.log('ready to use');
	$('.submit').click(function(){
		console.log('Clicked Submit');
		$('form').find('input').each(function(){
			console.log($(this).val());
			var input = $(this).val();
			$(this).attr('border','');
			if(input == ""){
 				alert('Field can not be blank');
				$(this).attr('border',"1px solid red");
			}
		})
	})
});
