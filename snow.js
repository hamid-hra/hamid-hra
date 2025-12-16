document.addEventListener('DOMContentLoaded', function () {
    const snowfall = document.createElement('div');
    snowfall.id = 'snowfall';
    document.body.appendChild(snowfall);

    for (let i = 0; i < 150; i++) {
        let snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowfall.appendChild(snowflake);
    }
});
