
class Smoothie {
    constructor(fruit, size, extras) {
        this.fruit = fruit;
        this.size = size;
        this.extras = extras;
        this.price = this.calculatePrice();
    }

    // Method to calculate the price of the smoothie based on size and extras
    calculatePrice() {
        let basePrice = this.size === 'small' ? 5 : this.size === 'medium' ? 7 : 9;
        let extrasPrice = this.extras.length * 1.5;  // Each extra costs $1.5
        return basePrice + extrasPrice;
    }

    // Method to generate the smoothie description
    getDescription() {
        return `
            <h3>Your Smoothie Order:</h3>
            <p>Fruit: ${this.fruit}</p>
            <p>Size: ${this.size}</p>
            <p>Extras: ${this.extras.join(', ')}</p>
            <p>Total Price: $${this.price.toFixed(2)}</p>
        `;
    }
}

// Event listener for form submission
document.getElementById('smoothieForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the form from reloading the page

    const fruit = document.getElementById('fruit').value;
    const size = document.getElementById('size').value;
    const extras = Array.from(document.getElementById('extras').selectedOptions).map(option => option.value);

    // Create a new smoothie object
    const smoothie = new Smoothie(fruit, size, extras);

    // Display the smoothie order summary
    document.getElementById('orderSummary').innerHTML = smoothie.getDescription();
});

