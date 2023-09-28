document.addEventListener("DOMContentLoaded", function () {
    const characterButtons = document.querySelectorAll(".character button");
    const gameContainer = document.getElementById("game-container");

    characterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const characterId = button.parentElement.id;
            startGame(characterId);
        });
    });

    function startGame(characterId) {
       
        const characterSelection = document.querySelector(".character-selection");
        characterSelection.style.display = "none";
        gameContainer.style.display = "flex";
        gameContainer.style.flexDirection = "coloumn";

        
        gameContainer.innerHTML = `<h2>Game is loading for Character ${characterId}</h2>`;
        
    }
});
