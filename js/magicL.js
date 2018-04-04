// magic.js
$(document).ready(function() {

    // process the form
    
    
    	$('form').submit(function(event) {
	        var datebirth;
	        datebirth=$("#year option:selected").text()+$("#month option:selected").text();

	        var address;
	        address = $("#province option:selected").text()+"-"+$("#city option:selected").text()+"-"+$("#town option:selected").text();
	        console.log("aaaaa",datebirth);

	        var name1=$('input[name=name]').val();
    		var tel1=$('input[name=tel]').val()

	        // get the form data
	        // there are many ways to get this data using jQuery (you can use the class or id also)
	        var formData = {
	            'name'                  :$('input[name=name]').val(), 
	            'gender'                :$('select[name=gender]',).val(),
	            'dateofbirth'           :datebirth,
	            //'dateofbirth'           : $('select[name=birthYear]').val(),
	            //'birthMonth'          : $('select[name=birthMonth]').val(),
	            'schoolname'            : $('input[name=university]').val(),
	            'department'            : $('input[name=grade]').val(),
	            'major'                 : $('input[name=major]').val(),
	            'workexperience'        : $('select[name=term]').val(),
	            'positionapplied'       : $('input[name=job]').val(),
	            'telephone'             : $('input[name=tel]').val(),
	            'mail'                  : $('input[name=email]').val(),
	            'residence'             : address,
	            'selfintroduce'         : $('textarea[name=introduce]').val(),
				'jobdecription'         : $('textarea[name=experience]').val(),
				'referrer_tel'          : $('input[name=referrer_tel]').val()

	        };
	       console.log("name1",name1);
	       console.log("tel",tel1);
	        // process the form
	        if(name1 !== "" && tel1 !== ""){
		        $.ajax({
		            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
		            //url:'http://xzyhui.com/ccl.php',
		            url         : '/recruit/submitapplication', // the url where we want to POST
		            //data        : formData, // our data object
		            //data : JSON.stringify({ 'name': 'foovalue', 'gender': 'barvalue' }),
		            data : JSON.stringify({ 
		            'name'                  :$('input[name=name]').val(), 
		            'gender'                :$('select[name=gender]',).val(),
		            'dateofbirth'           : datebirth,
		            'schoolname'            : $('input[name=university]').val(),
		            'department'            : $('input[name=grade]').val(),
		            'major'                 : $('input[name=major]').val(),
		            'workexperience'        : $('select[name=term]').val(),
		            'positionapplied'       : $('input[name=job]').val(),
		            'telephone'             : $('input[name=tel]').val(),
		            'mail'                  : $('input[name=email]').val(),
		            'residence'             : address,
		            'selfintroduce'         : $('textarea[name=introduce]').val(),
					'jobdecription'         : $('textarea[name=experience]').val(),
					'referrer_tel'          : $('input[name=referrer_tel]').val()
		             }),
		            contentType: "application/json",
		            dataType    : 'json', // what type of data do we expect back from the server
					//encode          : true
					
					/*success: function(returnData){
						if(returnData['success']==1){
							alert(returnData['success']);
							window.location.href="http://www.yzschool.com.cn/training.html";
							console.log("转机");
							
						}else{
							return false;
						}
					}*/
		        })
		        .done(function(data) {
		            console.log(data);
		        });

		        alert("提交成功！");
		        console.log("b22",name1);
				console.log("b33",tel1);
				event.preventDefault();
				window.location.href="http://www.yzschool.com.cn/training.html";
		        }else{
			    	alert("提交失败！请正确填写姓名以及联系方式"); 
			    	console.log("b2",name1);
					console.log("b3",tel1);
			    }
		    });
    
    

});

