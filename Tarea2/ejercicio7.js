/*
Jugando un poco
con la consola: Aventura conversacional/juego de preguntas y respuestas.
*/


    alert("Bienvenido. Voy a ir haciendote preguntas y debes elegir las respuestas");
    var question1 = prompt("¿Qué tiempo hace hoy? 1.Frio  2.Calor 3.Frio y lluvia");

    if (question1 == "1"){
        var question2 = prompt("Como hace frío. ¿Te has puesto ropa abrigada? 1.Si 2.No");
        
        if(question2 == "1"){
            alert("Vas a ir muy abrigado, así que no te precupes");
        } else{
            alert ("Creo que te vas a morir de frio");
        }

    }else if(question1 == "2"){
        var question3 = prompt("Aprovecha del sol que hace que va a durar poco. ¿Llevas gafas de sol? 1.Si 2.No");

        if (question3 == "1"){
            alert("Menos mal, porque así no te queda ciego");
        }else{
            alert("Intenta no mirar al sol...")
        }
    }else if (question1 == "3"){
        var question4 = prompt("Que mala suerte... Hoy era mejor quedarse en casa. ¿Te aperece un plan de peli, manta y palomitas? 1. Si 2.No");
        if (question4 == "1"){
            alert("Pues corre a casa antes de que te mojes más.")
        }else{
            alert("Pues si prefieres quedarte fuera y mojarte precura llevar paraguas.")
        }

    }else{
        alert("La opción seleccionada es inválida");
    }






