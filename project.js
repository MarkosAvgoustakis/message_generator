const beginnings = ["Today is a great day to", "You should always", "Never forget to"];
const middles = ["chase your dreams", "help a stranger", "be yourself"];
const endings = ["because the world needs you.", "because good karma pays off.", "because you are unique."];

const generator = () => {
    let final = '';
    let randomIndex = Math.floor(Math.random()*3);
    final = beginnings[randomIndex] +' ' + middles[randomIndex] +' '+ endings[randomIndex];
    return console.log(final);
}

generator();