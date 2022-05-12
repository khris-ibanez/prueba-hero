$(document).ready(function(){
    $('#formHero').submit(function(event){
        event.preventDefault();

        $.ajax({
            type:"GET",
            url:`https://superheroapi.com/api/4905856019427443/${idHeroe}`,
            success:function(data){
                $('#mensajeHero').text('SuperHero Encontrado');
                console.log(data);
            },
            error:function(data){
                $('#mensajeHeroe').text(`API NO ENCONTRADA: ${data}`);
            },
            dataType: 'json',
        });
    });
});

