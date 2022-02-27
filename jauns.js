
$(document).ready(function() {
	$('#btnLogin').click(function(){
	event.preventDefault();
	IdValue = $('input[name=id-name]').val(); 
	window.location.href = "http://ppa.lv/id/"+ IdValue+".pdf"; 
	});
});