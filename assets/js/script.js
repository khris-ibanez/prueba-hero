$(document).ready(function(){
    $('#formHero').submit(function(event){
        event.preventDefault();

        $.ajax({
            type:"GET",
            url:`https://superheroapi.com/api/4905856019427443/${idHeroe}`
        });
    });
});

