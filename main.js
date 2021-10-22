const access_code = "bcmlxh";
const vowel_amount=100;
const num_players=2;

function spin() {

    var x = Math.ceil (Math.random() *10) *100;
    document.getElementById('wheel').value=x

}

function createPuzzle() {
    const ThePuzzle = "volcano";
    return ThePuzzle;
}

function drawPuzzle(string){
    for (let x of string) {
        var letter = document.createElement("input");
        letter.setAttribute('value', x);
        if (x == ' ') {
            letter.className ="spacer";
        } else {
            letter.className = "letter hidden";
        }
        document.getElementById('theBoard').appendChild(letter);
    }
}

function clearboard(){
    const myNode = document.getElementById("theBoard");
    myNode.innerHTML = '';

}

function guessLetter(letter){
    if (letter == 'a') {
        letters = document.querySelectorAll('input.hidden[value="'+letter+'"]');

        for (x in letters){
            x.className="letter";
        }
    }
}




