document.addEventListener("DOMContentLoaded", function () {
    const purchaseForm = document.querySelector(".purchase-form form");
    const purchaseMessage = document.createElement("p");
    purchaseMessage.id = "purchase-message";

    if (purchaseForm) {
        purchaseForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const nameInput = purchaseForm.querySelector("input[name='name']");
            const customerName = nameInput ? nameInput.value.trim() : "Клиент";

            purchaseMessage.textContent = `Благодарим за поръчката, ${customerName}!`;
            purchaseForm.appendChild(purchaseMessage);
            purchaseForm.reset();
        });
    }

    document.getElementById('review-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const reviewText = document.getElementById('review-text').value.trim();
    if (reviewText !== "") {
        const reviewSection = document.getElementById('review-list');

        const newReview = document.createElement('div');
        newReview.className = 'review';
        newReview.textContent = reviewText;

        reviewSection.prepend(newReview);
        document.getElementById('review-form').reset();
    }
});
    
});