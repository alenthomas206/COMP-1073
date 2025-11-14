
function calculatePrice(size, ingredientCount) {
    const sizePrices = {
        Small: 3,
        Medium: 5,
        Large: 7
    };

    return sizePrices[size] + ingredientCount * 1.5; //set price based on size and ingredients
}



document.getElementById("orderBtn").addEventListener("click", () => {
    const base = document.getElementById("base").value;// Capture base value 
    const size = document.getElementById("size").value;// Capture size value 
    const selectedIngredients = [...document.querySelectorAll(".ingredients input:checked")]
        .map(item => item.value);// Capture selected ingredients
    const sweetener = document.getElementById("sweetener").value;// Capture sweetener value

    const rawOrder = {
        base: base,
        size: size,
        ingredients: selectedIngredients,
        sweetener: sweetener
    };

    console.log("Collected order details:", rawOrder);
});


