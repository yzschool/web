// magic.js
$(document).ready(function() {
      /*  var Q1;
        Q1=$('p[name=Q1]').text();
        console.log("Q1 is ",a1);*/
    $('form').submit(function(event) {
       /* var Q1;
        Q1=$('p[name=Q1]').text();
        console.log("Q1 is ",a1);
*/
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'exam':'面试题目',
            'tester':$('input[name=tester]').val(),
            'telephone':$('input[name=telephone]').val(),
            'mail':$('input[name=mail]').val(),
            'result':[
                {
                    'question':$('p[name=Q1]').text(),
                    'answer':$('textarea[name=An1]').val(),
                },
                {
                    'question':$('p[name=Q2]').text(),
                    'answer':$('textarea[name=An2]').val(),
                },
                {
                    'question':$('p[name=Q3]').text(),
                    'answer':$('textarea[name=An3]').val(),
                },
                {
                    'question':$('p[name=Q4]').text(),
                    'answer':$('textarea[name=An4]').val(),
                },
                {
                    'question':$('p[name=Q5]').text(),
                    'answer':$('textarea[name=An5]').val(),
                }
            ]
           /* 'name'                  :$('input[name=name]').val(), 
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
            'jobdecription'         : $('textarea[name=experience]').val()
*/
        };
       //console.log("aaaaa",address);
        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : '/recruit/submitexam', // the url where we want to POST
            //data        : formData, // our data object
            //data : JSON.stringify({ 'name': 'foovalue', 'gender': 'barvalue' }),
            data : JSON.stringify({ 
            'exam':'面试题目',
            'tester':$('input[name=tester]').val(),
            'telephone':$('input[name=telephone]').val(),
            'mail':$('input[name=mail]').val(),
            'result':[
                {
                    'question':$('p[name=Q1]').text(),
                    'answer':$('textarea[name=An1]').val(),
                },
                {
                    'question':$('p[name=Q2]').text(),
                    'answer':$('textarea[name=An2]').val(),
                },
                {
                    'question':$('p[name=Q3]').text(),
                    'answer':$('textarea[name=An3]').val(),
                },
                {
                    'question':$('p[name=Q4]').text(),
                    'answer':$('textarea[name=An4]').val(),
                },
                {
                    'question':$('p[name=Q5]').text(),
                    'answer':$('textarea[name=An5]').val(),
                }
            ]
            /*'name'                  :$('input[name=name]').val(), 
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
            'jobdecription'         : $('textarea[name=experience]').val()
             */
             }),
            contentType: "application/json",
            dataType    : 'json', // what type of data do we expect back from the server
            //encode          : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data);

                // here we will handle errors and validation messages
            });
            alert("提交成功！"); 
            console.log("11111",$('textarea[name=An1]').val())


            event.preventDefault();
    });

});

