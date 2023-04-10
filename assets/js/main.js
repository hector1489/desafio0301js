const PRECIO = 400000;



const btn = document.querySelector(".btn");
const cantidad = document.querySelector("#amount");
const inputColor = document.querySelector ("#inputColor");

const totalAmount = document.querySelector("#totalAmount")
const colors = document.querySelector("#colorBall")

btn.addEventListener('click', () => {
const total = cantidad.value * PRECIO;
const resultado = document.querySelector("#total");
resultado.innerHTML = total;

totalAmount.innerHTML = cantidad.value;
colors.style.backgroundColor = inputColor.value;

});
