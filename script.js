// Smoothie class definition
class Smoothie {
    constructor(fruit, size, extras) {
        this.fruit = fruit;
        this.size = size;
        this.extras = extras;
        this.price = this.calculatePrice();
        this.imageUrl = this.getImageUrl();
    }

    calculatePrice() {
        let basePrice = 0;

        // Set base price depending on size
        if (this.size === 'small') {
            basePrice = 5;
        } else if (this.size === 'medium') {
            basePrice = 7;
        } else if (this.size === 'large') {
            basePrice = 9;
        }

        // Add extras cost
        let extrasPrice = this.extras.length * 1.5;
        return basePrice + extrasPrice;
    }

    getDescription() {
        return `
            <h3>Your Smoothie Order:</h3>
            <p><strong>Fruit:</strong> ${this.fruit}</p>
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Extras:</strong> ${this.extras.join(', ')}</p>
            <p><strong>Total Price:</strong> $${this.price.toFixed(2)}</p>
        `;
    }

    getImageUrl() {
        switch (this.fruit) {
            case 'mango':
                return 'images/MangoSmoothie.jpg';
            case 'strawberry':
                return 'images/StrawberrySmoothie.jpg';
            case 'orange':
                return 'images/OrangeSmoothie.jpg';
            case 'banana':
                    return 'images/BananaSmoothie.jpg';
            
            default:
                return 'images/MangoSmoothie.jpg';
        }
    }
}

// Handle form submission and display smoothie order details
document.getElementById('smoothieForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fruit = document.getElementById('fruit').value;
    const size = document.getElementById('size').value;
    const extras = Array.from(document.getElementById('extras').selectedOptions).map(option => option.value);

    const smoothie = new Smoothie(fruit, size, extras);

    // Display smoothie details
    document.getElementById('orderSummary').innerHTML = smoothie.getDescription();
    document.getElementById('smoothieImage').src = smoothie.imageUrl;
});

