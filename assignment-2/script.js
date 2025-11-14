
function calculatePrice(size, ingredientCount) {
    const sizePrices = {
        Small: 3,
        Medium: 5,
        Large: 7
    };

    return (sizePrices[size] + ingredientCount * 1.5).toFixed(2);; //set price based on size and ingredients
}



document.getElementById("orderBtn").addEventListener("click", () => {
    const base = document.getElementById("base").value;// Capture base value 
    const size = document.getElementById("size").value;// Capture size value 
    const selectedIngredients = [...document.querySelectorAll(".ingredients input:checked")]
        .map(item => item.value);// Capture selected ingredients
    const sweetener = document.getElementById("sweetener").value;// Capture sweetener value

    const ingredientCount = ingredients.length;
    const finalPrice = calculatePrice(size, ingredientCount);
    
    const Order = {
        base: base,
        size: size,
        ingredients: selectedIngredients,
        sweetener: sweetener,
        price: finalPrice
    };

    console.log("Collected order details:", Order);

    const output = document.getElementById("output");

    output.innerHTML = `
        <h2>Your Smoothie Order</h2>
        <p><strong>Base:</strong> ${base}</p>
        <p><strong>Size:</strong> ${size}</p>
        <p><strong>Ingredients:</strong> ${ingredients.join(", ") || "None"}</p>
        <p><strong>Sweetener:</strong> ${sweetener}</p>
        <p><strong>Total Price:</strong> $${finalPrice}</p>
    `;
});
document.getElementById("resetBtn").addEventListener("click", () => {

    // Reset dropdowns
    document.getElementById("base").selectedIndex = 0;
    document.getElementById("size").selectedIndex = 0;
    document.getElementById("sweetener").selectedIndex = 0;

    // Uncheck all checkboxes
    document.querySelectorAll(".ingredients input").forEach(cb => cb.checked = false);

    // Clear output
    document.getElementById("output").innerHTML = "";

    console.log("Form reset successfully");
});

