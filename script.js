// Betting Game
document.getElementById('betForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const betAmount = parseInt(document.getElementById('betAmount').value);
    const betChoice = document.getElementById('betChoice').value;
    const result = Math.random() < 0.5 ? 'win' : 'lose';
    let message = `You ${result}!`;

    if (result === betChoice) {
        message = `You win ${betAmount * 2}!`;
    } else {
        message = `You lose your bet of ${betAmount}.`;
    }

    document.getElementById('betResult').textContent = message;
});

// Slot Machine Game
document.getElementById('spinButton')?.addEventListener('click', function() {
    const fruits = ['🍎', '🍒', '🍇', '🍊', '🍓'];
    const result = [
        fruits[Math.floor(Math.random() * fruits.length)],
        fruits[Math.floor(Math.random() * fruits.length)],
        fruits[Math.floor(Math.random() * fruits.length)]
    ];
    document.getElementById('slot1').textContent = result[0];
    document.getElementById('slot2').textContent = result[1];
    document.getElementById('slot3').textContent = result[2];

    let message = 'Try Again!';
    if (result[0] === result[1] && result[1] === result[2]) {
        message = 'You Win!';
    }
    document.getElementById('slotResult').textContent = message;
});

// Wheel Spin Game
document.getElementById('spinButton')?.addEventListener('click', function() {
    const canvas = document.getElementById('spinCanvas');
    const ctx = canvas.getContext('2d');

    const prizes = ['$100', 'Free Spin', '50% Discount', 'Try Again', 'Big Win', 'Free Credits'];
    const angle = Math.random() * 360;
    const prizeIndex = Math.floor(angle / (360 / prizes.length));

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(200, 200, 180, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = '#fff';
    ctx.font = '20px Arial';
    ctx.fillText('Spinning...', 130, 200);
    
    setTimeout(function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(200, 200, 180, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.fillStyle = '#fff';
        ctx.font = '20px Arial';
        ctx.fillText('You won: ' + prizes[prizeIndex], 130, 200);
    }, 2000);
});
