$(document).ready(function() {
    $("#bmi").submit(function(event) {
        event.preventDefault();
        const peso = $("#peso").val();
        const altura = $("#altura").val();
        const bmi = 10000 * (peso / (altura * altura))
        const final = Math.round(bmi);
        

        if (final < 18.5 ) {
            $("h2").append(final + " Bajo peso")
            alert(final + " Bajo peso");

        } else if ((final > 18.5 ) && (final <= 24)){
            $("h2").append(final + " Peso Normal")
            alert(final + " Peso Normal");
        } else if ((final >= 25 ) && (final <= 29)){
            $("h2").append(final + " Sobrepeso")
            alert(final + " Sobrepeso");
        } else if (final > 30 ) {
            $("h2").append(final + " Obesidad")
            alert(final + " Obesidad");
        } else {

        }
        
    
        
        
        
        
        
        
        
        
        
        
        
        
        
    });





});