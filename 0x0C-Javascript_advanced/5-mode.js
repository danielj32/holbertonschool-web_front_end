function changeMode(size, weight, transform, background, color){
    return () => {
        const myPage = document.querySelector("body");
        myPage.style.fontSize = size;
        myPage.style.fontWeight = weight;
        myPage.style.textTransform = transform;
        myPage.style.background = background;
        myPage.style.color = color;
    };
}

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    //Create new elements
    let myPage = document.querySelector("body");
    let secondSpooky = document.createElement("button");
    let secondDark = document.createElement("button");
    let secondScream = document.createElement("button");
    //Insert a text
    myPage.innerHTML = "<p>Welcome Holberton!</p>";
    secondSpooky.innerText = "Spooky";
    secondDark.innerText = "Dark mode";
    secondScream.innerText = "Scream mode";
    //Append at the page
    document.body.appendChild(secondSpooky);
    document.body.appendChild(secondDark);
    document.body.appendChild(secondScream);
    //Adding function
    secondSpooky.onclick = spooky;
    secondDark.onclick = darkMode;
    secondScream.onclick = screamMode;
}
main();
