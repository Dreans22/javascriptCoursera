let length;
let width;

function calculateArea(){
    length=parseFloat(document.getElementById('length').value);
    width=parseFloat(document.getElementById('width').value);
    let area= length*width
    document.getElementById("result").innerText=`The area of the rectangle is: ${area}`
}

let p1,p2,p3;

function calcularCosto(){
    p1=parseFloat(document.getElementById("p1").value);
    p2=parseFloat(document.getElementById("p2").value);
    p3=parseFloat(document.getElementById("p3").value);

    let total=p1+p2+p3;

    document.getElementById("costo").innerText=`el valor total de los productos es: ${total}`
}