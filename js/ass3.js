function changeColor() {
	var a = document.getElementById('selectColor');
	var b = selectColor.options[selectColor.selectedIndex].value;
	if(b==1){
		document.getElementById('bg').style.backgroundColor="red";
	}
	if(b==2){
		document.getElementById('bg').style.backgroundColor="green";
	}
	if(b==3){
		document.getElementById('bg').style.backgroundColor="blue";
	}
}

$( function() {
	$( "#datepicker" ).datepicker();
} );


$(function () {

	$("#clickwtr").click(function() {
		var cname = $("#chosencity").val();
		wtr(cname);
	});
	var b;
	function wtr(b) {
		$.ajax({
			url: 'http://api.apixu.com/v1/current.json?key=e8dd641fa1934a9f839184343172503&q='+b,
			dataType: "json",
			success:function(data) {
				console.log(data);
				$("#city").text(data.location.name);
				$("#country").text(data.location.country);
				$("#temp").text(data.current.temp_c);
				$(".twitter-share-button").attr("href","https://twitter.com/intent/tweet?text="+data.location.name+" "+data.location.country+" "+data.current.temp_c);
			},
			error: function() {
				alert("this city is not available");
			}
		})
	}
	
	
})

$(document).ready(function()
{	
	$('#password').keyup(function()
	{
		$('#result').html(checkStrength($('#password').val()))
	})	
		
	function checkStrength(password)
	{
		var strength = 0
		
		if (password.length < 6) { 
			$('#result').removeClass()
			$('#result').addClass('short')
			return 'Too short' 
		}
		
		if (password.length > 7) strength += 1
		
		if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1

		if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  strength += 1 
		
		if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1
		
		if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
			
		if (strength < 2 )
		{
			$('#result').removeClass()
			$('#result').addClass('weak')
			return 'Weak'			
		}
		else if (strength == 2 )
		{
			$('#result').removeClass()
			$('#result').addClass('good')
			return 'Good'		
		}
		else
		{
			$('#result').removeClass()
			$('#result').addClass('strong')
			return 'Strong'
		}
	}
});



