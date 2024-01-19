function updateProductImage() {
    // Get the selected size from the dropdown
    var selectedSize = document.getElementById("size").value;

    // Update the product image source based on the selected size
    switch (selectedSize) {
        case "small":
            document.getElementById("productImage").src = "img/small-product.jpg";
            break;
        case "medium":
            document.getElementById("productImage").src = "img/medium-product.jpg";
            break;
        case "large":
            document.getElementById("productImage").src = "img/large-product.jpg";
            break;
        default:
            // Use a default image or handle the case as needed
            break;
    }
}
