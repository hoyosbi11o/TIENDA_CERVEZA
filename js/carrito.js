document.addEventListener("DOMContentLoaded", function() {

    const cartButton = document.getElementById("cartButton");


    const contenedorbot = document.querySelectorAll(".contenedorbot");


    contenedorbot.forEach((controls) => {
        const subtractButton = controls.querySelector(".subtract-button");
        const addButton = controls.querySelector(".add-button");

        let quantity = 0;

        subtractButton.addEventListener("click", subtractFromCart);
        addButton.addEventListener("click", addToCart);

        function subtractFromCart() {
            if (quantity > 0) {
                quantity--;
            }
            updateCart();
        }

        function addToCart() {
            quantity++;
            updateCart();
        }

        function updateCart() {
            cartButton.textContent = "Carrito [" + quantity + "]";
        }
    });
});