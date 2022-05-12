$(document).ready(function(){
    $('#formHero').submit(function(event){
        event.preventDefault();
        console.log('funciona sumit');
        $('#mensajeHeroe').text('cargando...');
        let idHeroe=$('#txtSuperheroe').val();

        $.ajax({
            type:"GET",
            url:`https://superheroapi.com/api.php/4905856019427443/${idHeroe}`,
            success:function(data){

                $('#mensajeHeroe').text('SuperHero Encontrado');
                console.log(data);
                $('#imagenHeroe').attr("src",`${data.image.url}`);
                $('#nombreHeroe').text(`Nombre: ${data.name}`);
                let lasConexiones = data['connections']['group-affiliation'];
                $('#conexionesHeroe').text(`Conexiones: ${lasConexiones}`);
                $('#publicado').text(`publicado por: ${data.biography.publisher}`);
                $('#ocupacion').text(`Ocupacion: ${data.work.occupation}`);
                let primeraA = data['biography']['first-appearance'];
                $('#apa').text(`primera aparicion: ${primeraA}`);
                $('#altura').text(`Altura: ${data.appearance.height}`);
                $('#peso').text(`Peso: ${data.appearance.weight}`);
                $('#alianzas').text(`Alianzas: ${data.biography.aliases}`);

                let inteligencia=`${data.powerstats.intelligence}`;
                let fuerza=`${data.powerstats.strength}`;
                let velocidad=`${data.powerstats.speed}`;
                let durability=`${data.powerstats.durability}`;
                let power=`${data.powerstats.power}`;
                let combat=`${data.powerstats.combat}`;
                
                var chart = new CanvasJS.Chart("chartContainer", {
                    theme: "light2",
                    exportEnabled: true,
                    animationEnabled: true,
                    title: {
                        text: `Estadisticas de ${data.name}`
                    },
                    data: [{
                        type: "pie",
                        startAngle: 25,
                        toolTipContent: "<b>{label}</b>: {y}",
                        showInLegend: "true",
                        legendText: "{label}",
                        indexLabelFontSize: 16,
                        indexLabel: "{label} - {y}",
                        dataPoints: [
                            { y: inteligencia, label: "Inteligencia" },
                            { y: fuerza, label: "fuerza" },
                            { y: velocidad, label: "velocidad" },
                            { y: durability, label: "durability" },
                            { y: power, label: "power" },
                            { y: combat, label: "combat" },
                            
                        ]
                    }]
                });
                chart.render();
            },
            
            error:function(data){
                $('#mensajeHeroe').text(`API NO ENCONTRADA: ${data}`);
            },
            dataType: 'json',
        });
    });
});

