var typing = false
var noCount = 0
var yesClicked = false
var saidnoalot = false;

const assets = [
    "assets/smiley smiles final.gif",
    "assets/cry gif.gif",
    "assets/pray1.gif",
    "assets/noo.gif",
    "assets/sad.gif",
    "assets/whytheNo.jpg",
    "assets/Heart.png",
    "assets/excusmi.jpeg"
];
    

function preloadAssets(list) {
    return Promise.all(
    list.map(src => new Promise(resolve => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
    }))
    );
}

let loadingInterval = null;

function startLoadingDots() {
    const loadingText = document.getElementById("loadingText");
    let dots = 0;

    loadingInterval = setInterval(() => {
        dots = (dots + 1) % 4; // cycles 0 → 3
        loadingText.textContent =
            "Loading something " + ".".repeat(dots);
    }, 500);
}

function stopLoadingDots() {
    clearInterval(loadingInterval);
}

window.addEventListener("load", async () => {
    startLoadingDots()
    const loadingscreen = document.getElementById('loadingScreen');
    
    await preloadAssets(assets);

    stopLoadingDots()
    
    loadingscreen.style.opacity = 0;
    loadingscreen.style.display = "none";
    initChoiceMenu();
});

function initChoiceMenu() {
    const choiceMenu = document.getElementById('choiceMenu');
    const choiceText = document.getElementById('choiceText');
    typeText(choiceText, "Will You Be My Valentine?")
    
    choiceMenu.style.opacity = 1;  

    initButtons();
}

function initButtons() {
    const yesButton = document.getElementById('yesbutton');
    const noButton = document.getElementById('nobutton');   
    
    yesButton.addEventListener('click', function() { choiceFunction("yes");});
    noButton.addEventListener('click', function() { choiceFunction("no");});  
}

function choiceFunction(choice) {
    const yesButton = document.getElementById('yesbutton');
    const noButton = document.getElementById('nobutton'); 
    const gifChoice = document.getElementById('choicegif');
    const choiceText = document.getElementById('choiceText');

    if (choice === "no") {
        noCount += 1;

        if (yesClicked === true) {
            typeText(choiceText, "Damn... Okay")
            gifChoice.src = "";
            yesButton.style.opacity = 0;
            yesButton.style.pointerEvents = "none";
            noButton.style.opacity = 0;
            noButton.style.pointerEvents = "none";

        } else if (noCount === 1) {
            gifChoice.src = "assets/cry gif.gif";
            typeText(choiceText, "Why??? Did you click the wrong one?");
            yesButton.style.width = "180px";
            yesButton.style.height = "50px";
            yesButton.style.fontSize = "20px";
            noButton.style.width = "120px";
            noButton.style.height = "40px";
            noButton.style.fontSize = "18px";
            noButton.style.opacity = "1";
            noButton.style.pointerEvents = "auto";
        } else if (noCount === 2) {
            gifChoice.src = "assets/noo.gif";
            typeText(choiceText, "Youre joking right?");
            yesButton.style.width = "220px";
            yesButton.style.height = "60px";
            yesButton.style.fontSize = "24px";
            noButton.style.width = "100px";
            noButton.style.height = "35px";
            noButton.style.fontSize = "16px";
        } else if (noCount === 3) {
            gifChoice.src = "assets/sad.gif";
            typeText(choiceText, "Lets think this out pleasee");
            yesButton.style.width = "260px";
            yesButton.style.height = "70px";
            yesButton.style.fontSize = "28px";
            noButton.style.width = "80px";
            noButton.style.height = "30px";
            noButton.style.fontSize = "14px";
        } else if (noCount === 4) {
            gifChoice.src = "assets/sad.gif";
            typeText(choiceText, "Pleaseee");
            yesButton.style.width = "280px";
            yesButton.style.height = "90px";
            yesButton.style.fontSize = "32px";
            yesButton.textContent = "Fine";
            noButton.style.opacity = "0";
            noButton.style.pointerEvents = "none";
            noButton.style.width = "0";
            noButton.style.height = "0";
            noButton.style.display = "none";
        } 
    } else { 
        yesCLicked = true
        
        if (noCount === 4) {
            typeText(choiceText, "Do you actually want to be my valentine?");
            
            yesButton.style.width = "150px";
            yesButton.style.height = "40px";
            yesButton.style.fontSize = "clamp(18px, 15%, 28px)";
            yesButton.textContent = "Yes";

            noButton.style.width = "150px";
            noButton.style.height = "40px";
            noButton.style.opacity = "1";
            noButton.style.pointerEvents = "auto";
            noButton.style.margin = "";
            noButton.style.display = "inline-block";

            noCount = 0;
        } else if (noCount >= 2) {
            gifChoice.src = "assets/whytheNo.jpg";
            typeText(choiceText, "Why did you say no so many times :(");
            saidnoalot = true;
            beginValentine()
        } else {
            gifChoice.src = "assets/pray1.gif";
            typeText(choiceText, "Used to pray for times like this");
            beginValentine()
        }
    }
}

function beginValentine() {
    const choicebox = document.getElementById('choicebox');
    choicebox.style.display = "none";
            
    setTimeout(() => {
        typeText(choiceText, "Lets get into it")
    }, 5000);
    setTimeout(() => {
        const choiceMenu = document.getElementById('choiceMenu');
        choiceMenu.style.display = "none";
        const afterchoiceMenu = document.getElementById('afterchoiceMenu');
        afterchoiceMenu.style.display = "flex";
        startValentine(saidnoalot);
    }, 10000);
}


const cards = [
  {
    render(container) {
      container.innerHTML = `<h1></h1><p></p>`;
      const h1 = container.querySelector('h1');
      const p = container.querySelector('p');
      typeText(h1, "Hey");
      typeText(p, "Im so happy you said yes, Heres a little something I made just for you.");
    }
  },
  {
    render(container) {
      container.innerHTML = `<h1></h1><p></p>`;
      const h1 = container.querySelector('h1');
      const p = container.querySelector('p');
      typeText(h1, "I miss you");
      typeText(p, "You should totally message me once ur finished because i probably want to talk to you right about now.");
    }
  },
  {
    render(container) {
     const videoId = "xzRSCI60kHU";
        
    container.innerHTML = `
      <h1></h1>
      <a 
        href="https://www.youtube.com/watch?v=${videoId}" 
        target="_blank" 
        rel="noopener noreferrer"
        class="youtube-link"
      >
        <img 
          src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg" 
          class="card-image"
          alt="YouTube video preview"
        >
        <div class="play-overlay">▶</div>
      </a>
    `;
      const h1 = container.querySelector('h1')
      typeText(h1, "Made a little video talking about some things")
    }
  },
  {
    render(container) {
      container.innerHTML = `<h1></h1><img src="assets/excusmi.jpeg" class="card-image"><p></p>`;
      const h1 = container.querySelector('h1');
      const p = container.querySelector('p')
      typeText(h1, "Remember this?");
      typeText(p, "I need to know what made you think i wouldnt do something for you")
    }
  },
  
  {
    render(container) {
      container.innerHTML = `<h1></h1><p></p>`;
      const h1 = container.querySelector('h1');
      const p = container.querySelector('p');
      typeText(h1, "One last thing");
      typeText(p, "You know how I like to conclude everything I do. Kc you are so amazing, i like you alot and there wont be any time with me around where you will feel otherwise. Hopefully you enjoyed the experience today.");
    }
  }
];

function startValentine(saidnoalot) {
  if (!saidnoalot) spawnHearts();

  let cardIndex = 0;
  const cardContent = document.getElementById('cardContent');
  const cardBtn = document.getElementById('cardBtn');

  cards[cardIndex].render(cardContent);

  function showNextCard() {
    cardIndex += 1;
    if (cardIndex >= (cards.length)) {
      cardBtn.style.display = "none";
      return;
    }
    cards[cardIndex].render(cardContent);
  }

  cardBtn.onclick = showNextCard;
}

function spawnHearts() {
    function spawnHeart() {
        const heart = document.createElement("div");
        heart.className= "heart";

        const size = Math.random() * 10 + 10;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;

        heart.style.left = Math.random() * 100 + "vw";

        const duration = Math.random() * 5 + 6; 
        heart.style.animationDuration = duration + "s";

        document.getElementById("heartContainer").appendChild(heart);

        setTimeout(() => heart.remove(), duration * 1000);
    };
    
    setInterval(spawnHeart, 400);
};




function typeText(element, text, speed = 75, callback) {
    setButtonsEnabled(false);
    element.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
        element.textContent += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(interval);
            setButtonsEnabled(true);
            if (callback) callback();
        }
    }, speed);
};

function setButtonsEnabled(enabled) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = !enabled);
}


