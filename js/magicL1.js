// magic.js
$(document).ready(function() {

    // process the form
    
    
    	$('form').submit(function(event) {
	        var gender=$("#coperG option:selected").text();
            var birthdate=$("#coperYear option:selected").text()+$("#coperMonth option:selected").text();
            var marital=$("#coperM option:selected").text();
            var address=$("#province option:selected").text()+"-"+$("#city option:selected").text()+"-"+$("#town option:selected").text();
			console.log("2",address);
	        // get the form data
	        // there are many ways to get this data using jQuery (you can use the class or id also)
	        var formData = {
	            'partnername'           :$('#partnername').val() ,
	            'gender'                :gender,
				'birthdate'             :birthdate,
				'marital'               : marital,
	            'tel'                   : $('#coperTel').val(),
	            'email'                 : $('#coperEmail').val(),
	            'address'               : address
	        };
	        // process the form
	        
			$.ajax({
				type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
				url         : '/recruit/submitpartner', // the url where we want to POST
				data : JSON.stringify({ 
					'partnername'           :$('#partnername').val() ,
					'gender'                :gender,
					'birthdate'             :birthdate,
					'marital'               : marital,
					'tel'                   : $('#coperTel').val(),
					'email'                 : $('#coperEmail').val(),
					'address'               : address
					}),
				contentType: "application/json",
				dataType    : 'json'
			})
			.done(function(data) {
				console.log(data);
			});

			alert("提交成功！");
			//console.log($('#partnername').val());
			console.log("1",status);
			event.preventDefault();
		    });
    
    

});

