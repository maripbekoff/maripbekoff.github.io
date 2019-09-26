function firstMealOn() {
    document.getElementById("first_meal").style.display = "block";
}

function firstMealOff() {
    document.getElementById("first_meal").style.display = "none";
}

function secondMealOn() {
    document.getElementById("second_meal").style.display = "block";
}

function secondMealOff() {
    document.getElementById("second_meal").style.display = "none";
}

function saladsOn() {
    document.getElementById("salads").style.display = "block";
}

function saladsOff() {
    document.getElementById("salads").style.display = "none";
}

function coldSnacksOn() {
    document.getElementById("cold_snacks").style.display = "block";
}

function coldSnacksOff() {
    document.getElementById("cold_snacks").style.display = "none";
}

function europeanCuisineOn() {
    document.getElementById("european_cuisine").style.display = "block";
}

function europeanCuisineOff() {
    document.getElementById("european_cuisine").style.display = "none";
}

function kebabsOn() {
    document.getElementById("kebabs").style.display = "block";
}

function kebabsOff() {
    document.getElementById("kebabs").style.display = "none";
}

function fastFoodOn() {
    document.getElementById("fastfood").style.display = "block";
}

function fastFoodOff() {
    document.getElementById("fastfood").style.display = "none";
}

function pizzaOn() {
    document.getElementById("pizza").style.display = "block";
}

function pizzaOff() {
    document.getElementById("pizza").style.display = "none";
}

function sushiOn() {
    document.getElementById("sushi").style.display = "block";
}

function sushiOff() {
    document.getElementById("sushi").style.display = "none";
}


function bakeryProductsOn() {
    document.getElementById("bakery_products").style.display = "block";
}

function bakeryProductsOff() {
    document.getElementById("bakery_products").style.display = "none";
}

function dessertsOn() {
    document.getElementById("desserts").style.display = "block";
}

function dessertsOff() {
    document.getElementById("desserts").style.display = "none";
}

function hotDrinksOn() {
    document.getElementById("hot_drinks").style.display = "block";
}

function hotDrinksOff() {
    document.getElementById("hot_drinks").style.display = "none";
}

function coldDrinksOn() {
    document.getElementById("cold_drinks").style.display = "block";
}

function coldDrinksOff() {
    document.getElementById("cold_drinks").style.display = "none";
}

function beerOn() {
    document.getElementById("beer").style.display = "block";
}

function beerOff() {
    document.getElementById("beer").style.display = "none";
}

function beerSnacksOn() {
    document.getElementById("beer_snacks").style.display = "block";
}

function beerSnacksOff() {
    document.getElementById("beer_snacks").style.display = "none";
}

function cognacOn() {
    document.getElementById("cognac").style.display = "block";
}

function cognacOff() {
    document.getElementById("cognac").style.display = "none";
}

function vodkaOn() {
    document.getElementById("vodka").style.display = "block";
}

function vodkaOff() {
    document.getElementById("vodka").style.display = "none";
}

function whiskeyOn() {
    document.getElementById("whiskey").style.display = "block";
}

function whiskeyOff() {
    document.getElementById("whiskey").style.display = "none";
}

$("#menu").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
});
