// Toy Car Constructor
function ToyCar(productName, brand, carBrand, carModel, scale, color, material,
                length, width, height, packaging, sku, upc,
                freewheeling, openingDoors, openingHood, openingTrunk,
                hasSpoiler = true, spoilerColor = "Black") {

    this.productName = productName;
    this.brand = brand;
    this.carBrand = carBrand;
    this.carModel = carModel;
    this.scale = scale;
    this.color = color;
    this.material = material;
    this.length = length;
    this.width = width;
    this.height = height;
    this.packaging = packaging;
    this.sku = sku;
    this.upc = upc;
    this.freewheeling = freewheeling;
    this.openingDoors = openingDoors;
    this.openingHood = openingHood;
    this.openingTrunk = openingTrunk;

    this.hasSpoiler = hasSpoiler;
    this.spoilerColor = spoilerColor;
}

// Create Object Instance
const eclipse = new ToyCar(
    "Brian's Mitsubishi Eclipse Remix – Fast & Furious",
    "Jada Toys",
    "Mitsubishi",
    "Eclipse Remix",
    "1/24 Scale",
    "Red",
    "Diecast metal with some plastic parts",
    "8 inches",
    "3.75 inches",
    "2.75 inches",
    "Window Box",
    "36815-JADA-RED",
    "801310368152",
    true,
    true,
    true,
    true,
    true,
    "Black"
);

// Display Properties
function displayDetails(car) {
    document.getElementById("detailsBox").innerHTML = `
        <b>Product Name:</b> ${car.productName}<br>
        <b>Brand:</b> ${car.brand}<br>
        <b>Car Brand:</b> ${car.carBrand}<br>
        <b>Model:</b> ${car.carModel}<br>
        <b>Scale:</b> ${car.scale}<br>
        <b>Color:</b> ${car.color}<br>
        <b>Material:</b> ${car.material}<br>
        <b>Dimensions:</b> ${car.length} × ${car.width} × ${car.height}<br>
        <b>Packaging:</b> ${car.packaging}<br>
        <b>SKU:</b> ${car.sku}<br>
        <b>UPC:</b> ${car.upc}<br>
        <b>Freewheeling:</b> ${car.freewheeling}<br>
        <b>Opening Doors:</b> ${car.openingDoors}<br>
        <b>Opening Hood:</b> ${car.openingHood}<br>
        <b>Opening Trunk:</b> ${car.openingTrunk}<br>
        <b>Spoiler:</b> ${car.hasSpoiler ? "Yes" : "No"}<br>
        <b>Spoiler Color:</b> ${car.spoilerColor}<br>
    `;
}

displayDetails(eclipse);


const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
];

let currentIndex = 0;
const carImage = document.getElementById("carImage");

document.getElementById("leftArrow").onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    carImage.src = images[currentIndex];
};

document.getElementById("rightArrow").onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    carImage.src = images[currentIndex];
};


document.getElementById("spoilerBtn").onclick = () => {
    let wantsSpoiler = prompt("Do you want a spoiler? (yes/no)");

    if (wantsSpoiler.toLowerCase() === "yes") {
        eclipse.hasSpoiler = true;
        let color = prompt("What color should the spoiler be?");
        eclipse.spoilerColor = color || "Black";
    } else {
        eclipse.hasSpoiler = false;
        eclipse.spoilerColor = "None";
    }

    displayDetails(eclipse);
};
