document.addEventListener('DOMContentLoaded', () => {
       function createSnowflakes() {
           const snowContainer = document.getElementById('snow-container');
           if (!snowContainer) return;

           for (let i = 0; i < 150; i++) {
               let snowflake = document.createElement('div');
               snowflake.className = 'snowflake';
               snowflake.style.left = `${Math.random() * 100}vw`;
               snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;
               snowflake.style.animationDelay = `${Math.random() * 5}s`;
               snowContainer.appendChild(snowflake);
           }
       }
       createSnowflakes();
   });