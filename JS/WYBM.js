const state = {
    LOADING: "Loading",
    START: "Start",
    NO_1: "NoClicked1",
    NO_2: "NoClicked2",
    YES_IMMEDIATE: "YesClickedImmediately",
    YES_AFTER_NO: "YesClickedAfterNo",
    FINAL: "FinalReveal"
}

var typing = false
var noCount = 0

const assets = [
    "assets/smiley smiles final.gif",
    "assets/cry gif.gif",
    "assets/pray1.gif",
    "assets/noo.gif",
    "assets/sad.gif",
    "assets/whytheNo.jpg",
    "assets/Heart.png"
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

window.addEventListener("load", async () => {
    let currentstate = state.LOADING

    await preloadAssets(assets);
    
    const loadingscreen = document.getElementById('loadingScreen');


    
    loadingscreen.style.transition =  "opacity";
    loadingscreen.style.opacity = 0;
    loadingscreen.style.display = "none";
    initChoiceMenu();
});

function initChoiceMenu() {
    const choiceMenu = document.getElementById('choiceMenu');
    const choiceText = document.getElementById('choiceText');
    typeText(choiceText, "Will You Be My Valentine?")
    
    choiceMenu.style.opacity = 1;  //ajklhsjkdh ajkh kja

    initButtons();
}

function initButtons() {
    const yesButton = document.getElementById('yesbutton');
    const noButton = document.getElementById('nobutton');   
    
    yesButton.addEventListener('click', function() { choiceFunction("yes");});
    noButton.addEventListener('click', function() { choiceFunction("no");});  
}

function choiceFunction(choice) {
    if (typing === true) {
        return
    }

    const gifChoice = document.getElementById('choicegif');
    if (choice === "no") {

        noCount += 1;
        console.log(noCount)
        
        const yesButton = document.getElementById('yesbutton');
        const noButton = document.getElementById('nobutton'); 

        

        if (noCount === 1) {
            gifChoice.src = "assets/cry gif.gif"
            typeText(choiceText, "Why??? Did you click the wrong one?")
            yesButton.style.transform = "scale(1.2)";
            noButton.style.transform = "scale(0.8)";
        } else if (noCount === 2) {
            gifChoice.src = "assets/noo.gif"
            typeText(choiceText, "Youre joking right?")
            yesButton.style.transform = "scale(1.5)";
            noButton.style.transform = "scale(0.6)";
        } else if (noCount === 3) {
            gifChoice.src = "assets/sad.gif"
            typeText(choiceText, "Lets think this out pleasee")
            yesButton.style.transform = "scale(2.5)";
            noButton.style.transform = "scale(0.3)";
        } else if (noCount === 4) {
            gifChoice.src = "assets/sad.gif"
            typeText(choiceText, "Pleaseee")
            yesButton.style.transform = "scale(5)";
            noButton.style.transform = "scale(0)";
            noButton.style.alignSelf = "center";
        } 
        
    } else {
        if (noCount >= 2) {
            gifChoice.src = "assets/whytheNo.jpg"
            typeText(choiceText, "Why did you say no so many times :(")
        } else {
            gifChoice.src = "assets/pray1.gif"
            typeText(choiceText, "Used to pray for times like this")
        }

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
                startValentine();
        }, 10000);
        
    }
};

function startValentine() {
    spawnHearts();

    var cardNumber = 0
    const cardHeading = document.getElementById('aftercardh1');
    const cardParagraph = document.getElementById('aftercardp1');
    const cardImage = document.getElementById('aftercardimg');
    const cardVideo = document.getElementById('aftercardvid');
    const cardButton = document.getElementById('aftercardbutton');
    
    typeText(cardHeading, "Heading 1")
    typeText(cardParagraph, "Paragraph 1")

    function OnCardBttnClick() {
        cardNumber += 1;

        if (cardNumber === 1) {
            typeText(cardHeading, toString(cardNumber))
            typeText(cardParagraph, toString(cardNumber))
        } else if (cardNumber === 2) {
            typeText(cardHeading, toString(cardNumber))
            typeText(cardParagraph, toString(cardNumber))
        } else if (cardNumber === 3) {
            typeText(cardHeading, toString(cardNumber))
            typeText(cardParagraph, toString(cardNumber))
        } else if (cardNumber === 4) {
            typeText(cardHeading, toString(cardNumber))
            typeText(cardParagraph, toString(cardNumber))
        } else if (cardNumber === 5) {
            typeText(cardHeading, toString(cardNumber))
            typeText(cardParagraph, toString(cardNumber))
        } else if (cardNumber === 6) {
            typeText(cardHeading, toString(cardNumber))
            typeText(cardParagraph, toString(cardNumber))
        } else if (cardNumber === 7) {
            typeText(cardHeading, toString(cardNumber))
            typeText(cardParagraph, toString(cardNumber))
        } else if (cardNumber === 8) {
            typeText(cardHeading, toString(cardNumber))
            typeText(cardParagraph, toString(cardNumber))
        }
    }

    cardButton.addEventListener('click', function() {OnCardBttnClick();})
};

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




function typeText(element, text, speed = 100, callback) {

    typing = true
    element.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
        element.textContent += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(interval);
            typing = false;
            if (callback) callback();
        }
    }, speed);
};