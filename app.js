
document.querySelector(".btn").onclick = convertir;
function convertir() {
    const input = parseFloat(document.getElementById("input").value);
    const inputType = document.getElementById("inputType").value;
    const resultType = document.getElementById("resultType").value;

    //se convierten a metros
    const conversionMedidas = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mic: 0.000001,
        nan: 0.000000001,
        mi: 1609.34,
        ya: 0.9144,
        pie: 0.3048,
        pul: 0.0254,
        nau: 1852
    }

    const inputUno = input * conversionMedidas[inputType];
    const resultado = inputUno / conversionMedidas[resultType];

    document.getElementById("result").value = resultado.toFixed(3);
    

    if (input && resultado < 0 || input && resultado === '' || (isNaN(input))) {
        document.querySelector(".descripcion").innerHTML = "No existe numeros negativos, carracteres o letras"
        document.getElementById("input").value = "";
        document.getElementById("result").value = "";

    } else {
        document.querySelector(".descripcion").innerHTML = `Tu numero es ${input}${inputType} y el resultado es ${resultado.toFixed(3)}${resultType}`;
    }
}

//resetear
document.querySelector(".reset").onclick = reset;
function reset() {
    document.querySelector(".descripcion").innerHTML = "";
    document.getElementById("input").value = "";
    document.getElementById("result").value = "";
}

