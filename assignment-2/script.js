
document.getElementById("orderBtn").addEventListener("click", () => {
    const base = document.getElementById("base").value;// Capture base value 
    const size = document.getElementById("size").value;// Capture size value 
    const selectedIngredients = [...document.querySelectorAll(".ingredients input:checked")]
        .map(item => item.value);// Capture selected ingredients
    console.log("Base:", base);
    console.log("Size:", size);
    console.log("Ingredients:", selectedIngredients);
});



