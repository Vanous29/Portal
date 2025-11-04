// Coin Tracking System with LocalStorage Support

class CoinSystem {
    constructor() {
        this.coins = 0;
        this.loadCoins();
    }

    loadCoins() {
        const storedCoins = localStorage.getItem('coins');
        this.coins = storedCoins ? parseInt(storedCoins) : 0;
    }

    saveCoins() {
        localStorage.setItem('coins', this.coins);
    }

    addCoins(amount) {
        this.coins += amount;
        this.saveCoins();
        this.animateCoinAddition();
    }

    subtractCoins(amount) {
        if (this.coins >= amount) {
            this.coins -= amount;
            this.saveCoins();
        } else {
            console.error('Not enough coins!');
        }
    }

    getCoinBalance() {
        return this.coins;
    }

    makePurchase(cost) {
        this.subtractCoins(cost);
        // Additional purchase logic can go here
    }

    animateCoinAddition() {
        // Add coin animation logic (placeholder)
        console.log('Coin added!');
    }
}

// Example usage:
const coinSystem = new CoinSystem();
coinSystem.addCoins(100); // Adds 100 coins
console.log(`Current coins: ${coinSystem.getCoinBalance()}`); // Displays current coins
coinSystem.makePurchase(50); // Makes a purchase for 50 coins
console.log(`Current coins after purchase: ${coinSystem.getCoinBalance()}`); // Displays current coins after purchase
