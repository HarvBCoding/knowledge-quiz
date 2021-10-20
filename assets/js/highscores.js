const highscoreEl = document.querySelector(".highscores");

// grab highscores from localStorage
let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

const clearStorage = () => {
    localStorage.clear();
};

if (highscores.length === 0) {
    highscoreEl.innerHTML = `
    <h1>Sorry! You don't have any scores saved!</h1>
    `;
} else {
    // display the highscores
    highscoresRender = highscores.map(scoreObj => {
        
        const { name, score } = scoreObj

        return `
        <p>${name}: ${score}</p>
        `;
    }); 

    highscoreEl.innerHTML = highscoresRender.join("");

    const clearBtn = document.createElement("button");
    clearBtn.setAttribute("type", "button");
    clearBtn.setAttribute("onclick","clearStorage()");
    clearBtn.id = "clearBtn";
    clearBtn.textContent = "Clear high scores";
    
    highscoreEl.appendChild(clearBtn);
}
