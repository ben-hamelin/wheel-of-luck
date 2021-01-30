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
    //var letters =  arraynew();
    for (let x of string) {
        console.log(x);
        var letter = document.createElement("input");
        letter.value=x;
        document.getElementById('theBoard').appendChild(letter);
    }
}

function clearboard(){
    const myNode = document.getElementById("theBoard");
    myNode.innerHTML = '';

}