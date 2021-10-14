function Converter() {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value;
    var valorEmCelsius = parseFloat(valor);
    
    var valorEmFahrenheit = (valorEmCelsius * 1.8) + 32; 
    console.log(valorEmFahrenheit);
    
    var elementoValorConvertido = document.getElementById("valorConvertidoCelsius");
    var valorConvertidoFahrenheit = "A temperatura em Fahrenheit é " + valorEmFahrenheit.toFixed(0) + " graus.";
    elementoValorConvertido.innerHTML = valorConvertidoFahrenheit;
  }
  
  
  function Converter2() {
    var valorElemento2 = document.getElementById("valor2")
    var valor2 = valorElemento2.value;
    var valorEmFahrenheit = parseFloat(valor2);
    
    var valorEmCelsius = (valorEmFahrenheit - 32) * 5/9; 
    console.log(valorEmCelsius);
    
    var elementoValorConvertidoFahrenheit = document.getElementById("valorConvertidoFahrenheit");
    var valorConvertidoCelsius = "A temperatura em Celsius é " + valorEmCelsius.toFixed(0) + " graus.";
    elementoValorConvertidoFahrenheit.innerHTML = valorConvertidoCelsius;
  }
  