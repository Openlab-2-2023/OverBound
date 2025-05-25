let currentDifficulty = 'normal';
document.querySelector('.difficulty').addEventListener('click', (event) => {
    if (event.target.tagName === 'B') {
        currentDifficulty = event.target.textContent;
        console.log(`Selected difficulty: ${event.target.textContent}`);
    }
});