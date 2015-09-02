
$(document).ready(function(){

    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);

    $('form').on('submit', function(e){

        var $this = $(this);

        e.preventDefault();
        var fname = $(this).fname;
        var lname = $(this).lname;
        var data = {
            fname: fname.value,
            lname: lname.value
        };
        console.log(data);
        $.ajax({
            url: '/messages',
            type: 'POST',
            data: data
        }).done(function(response, textStatus, jqXHR){
            console.log('Success!');

            var html = template({ fname: data.fname, lname: data.lname });


        }).fail(function( jqXHR, textStatus, errorThrown ) {
            console.log(jqXHR, textStatus, errorThrown);
        }).always(function(){
            console.log('Ajax Complete!');
        });
    })
});