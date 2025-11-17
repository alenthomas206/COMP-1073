function ToyCar(productName, brand, carBrand, carModel, scale, color, material, length, width, height, packaging, sku, upc) {
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
const eclipse = new ToyCar(
  "Brian's Mitsubishi Eclipse Remix – Fast & Furious",
  "Jada Toys",
  "Mitsubishi",
  "Eclipse Remix",
  "1/24 Scale",
  "Red",
  "Diecast", "8in", "3.75in", "2.75in",
  "Window Box", "36815-JADA-RED", "801310368152",
  true, true, true, true,
  true, "Black"
);
function displayDetails(car) {
    document.getElementById("detailsBox").innerHTML = `
        <b>Name:</b> ${car.productName}<br>
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
        <b>Spoiler:</b> ${car.hasSpoiler}<br>
        <b>Spoiler Color:</b> ${car.spoilerColor}<br>
    `;
}
displayDetails(eclipse);

const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let currentIndex = 0;

document.getElementById("leftArrow").onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    carImage.src = images[currentIndex];
};

document.getElementById("rightArrow").onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    carImage.src = images[currentIndex];
};
