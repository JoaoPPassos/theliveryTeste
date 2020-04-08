var cart = document.getElementById("carteira");
var cifrao = document.getElementById("cifrao");
var restaurante = document.getElementById("carteira_restaurante");


function cashbackExemple(){
    cartAnimation();
    restauranteAnimation();
    cifraAnimation();
}

function cifraAnimation(){
    cifrao.style.visibility = "visible";
    cifrao.animate([{transform: 'translateX(0px)'},
    {transform: 'translateX(400px)'}],{
    duration:2000,
    iterations:Infinity,
    direction: "alternate"
    });
}

function cartAnimation(){
    cart.style.visibility = "visible";
    cart.style.marginLeft = "50%";
    cart.animate([{transform: 'translateY(0px)'},
    {transform: 'translateY(10px)'}],{
    duration:800,
    iterations: Infinity,
    direction:"alternate"
    });
}

function restauranteAnimation(){
    restaurante.style.visibility = "visible";
    restaurante.animate([{transform: 'translateY(0px)'},
    {transform: 'translateY(10px)'}],{
    duration:800,
    iterations: Infinity,
    direction:"alternate"
    })
}
