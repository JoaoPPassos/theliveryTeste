var cart = document.getElementById("carteira");
var cifrao = document.getElementById("cifrao");
var restaurante = document.getElementById("restaurante");


function cashbackExemple(){
    cartAnimation();
    restauranteAnimation();
    cifraAnimation();
}

function cifraAnimation(){
    cifrao.style.opacity = "100%";
    cifrao.animate([{transform: 'translateX(0px)'},
    {transform: 'translateX(400px)'}],{
    duration:2000,
    iterations:Infinity,
    direction: "alternate"
    });
}

function cartAnimation(){
    cart.style.opacity = "100%";
    cart.style.marginLeft = "50%";
    cart.animate([{transform: 'translateY(0px)'},
    {transform: 'translateY(10px)'}],{
    duration:1500,
    iterations: Infinity,
    direction:"alternate"
    });
}

function restauranteAnimation(){
    restaurante.style.opacity = "100%";
    restaurante.animate([{transform: 'translateY(0px)'},
    {transform: 'translateY(10px)'}],{
    duration:1500,
    iterations: Infinity,
    direction:"alternate"
    })
}
