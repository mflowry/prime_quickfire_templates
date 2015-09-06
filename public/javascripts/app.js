$(document).ready(function(){

    $('form').on('submit', function(e){
        console.log("submitting");
        var $this = $(this);
        console.log(this);
        e.preventDefault();
        var fname = $(this).serializeArray()[0].value;
        var lname = $(this).serializeArray()[1].value;
        var data = {
            fname: fname,
            lname: lname
        };
        console.log(data);
        $.ajax({
            url: '/students',
            type: 'POST',
            data: data
        }).done(function(response, textStatus, jqXHR){
            console.log('Success!');
        }).fail(function( jqXHR, textStatus, errorThrown ) {
            console.log(jqXHR, textStatus, errorThrown);
        }).always(function(){
            console.log('Ajax Complete!');
        });
    })
});

