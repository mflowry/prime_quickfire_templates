$(document).ready(function(){

    //submit form contents to create new student
    $('form').on('submit', function(e){
        console.log("submitting");
        var $this = $(this);
        e.preventDefault();
        //capture each field (fname, lname) to a variable name
        var fname = $(this).serializeArray()[0].value;
        var lname = $(this).serializeArray()[1].value;
        var data = {//set up the data object to be posted
            fname: fname,
            lname: lname
        };
        console.log(data);
        $.ajax({
            url: '/students',//send to the students.json file, uses the route set up in students.js
            type: 'POST',
            data: data//send the data packet we just made
        }).done(function(response, textStatus, jqXHR){
            console.log('Success!');
        }).fail(function( jqXHR, textStatus, errorThrown ) {
            console.log(jqXHR, textStatus, errorThrown);
        }).always(function(){
            console.log('Ajax Complete!');
        });
    })
});

