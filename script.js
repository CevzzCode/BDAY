document.addEventListener('DOMContentLoaded', function() {
    const celebrateBtn = document.getElementById('celebrate-btn');
    const confettiContainer = document.getElementById('confetti-container');
    const cake = document.querySelector('.cake');
    const flame = document.querySelector('.flame');
    
  
    celebrateBtn.addEventListener('click', function() {
    
        createConfetti();
      
        cake.style.animation = 'none';
        cake.offsetHeight; 
        cake.style.animation = 'float 0.5s ease-out';
        
     
        flame.style.animation = 'flicker3 0.1s infinite alternate';
        
        launchBalloons();
        
     
        celebrateBtn.textContent = 'Happy Birthday! 🎉';
        setTimeout(() => {
            celebrateBtn.textContent = 'CLICK AGAIN!';
        }, 2000);
    });
    
    function createConfetti() {
        const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#7C6BF7', '#45A7E6'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
           
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 10 + 5;
            const left = Math.random() * 100;
            const animationDuration = Math.random() * 3 + 2;
            const animationDelay = Math.random() * 2;
            const rotate = Math.random() * 360;
            
            confetti.style.backgroundColor = color;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.left = `${left}%`;
            confetti.style.animation = `confetti-fall ${animationDuration}s ease-in ${animationDelay}s forwards`;
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            
            confettiContainer.appendChild(confetti);
            
            
            setTimeout(() => {
                confetti.remove();
            }, (animationDuration + animationDelay) * 1000);
        }
    }
    
    function launchBalloons() {
        for (let i = 0; i < 20; i++) {
            createBalloon();
        }
    }
    
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
     
        const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#7C6BF7', '#45A7E6'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const size = Math.random() * 60 + 40;
        const delay = Math.random() * 5;
        const duration = Math.random() * 5 + 5;
        const animationType = Math.random() > 0.5 ? 'balloon1' : 'balloon2';
        
        balloon.style.backgroundColor = color;
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size * 1.25}px`;
        balloon.style.left = `${left}%`;
        balloon.style.bottom = `-${size * 1.25}px`;
        balloon.style.animation = `${animationType} ${duration}s linear ${delay}s forwards`;
        
     
        if (Math.random() > 0.7) {
            balloon.style.borderRadius = '50% 50% 40% 40%';
            balloon.style.transform = 'rotate(30deg)';
        }
        
        document.body.appendChild(balloon);
      
        setTimeout(() => {
            balloon.remove();
        }, (duration + delay) * 1000);
    }
});