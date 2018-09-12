/*Create a header and use the hangman image provided
	-html header w/css or use bootstrap


    Create an event using .onkeydown (key-press) to initialize the game 
        -  "Press Any Key To Get Started" is displayed
            * OPTIONAL - change color of the text when any key is pressed and return it to normal when the first guess is taken
        
                ''''''JAVASCRIPT''''''
    -  create an array that contains the available words (do 10)
        -  Show one of the array words with each letter hidden with an underscore shown (use a math.random function to pick between available words)
            
            *  if an incorrect letter is pressed leave the underscore for that space
                - show that letter under the "Letters Already Guessed" (in a row) 
                - add one to "Number of Guesses Remaining"
                - maximum guesses is 13.  If the number of incorrect guesses = 13, then the game is over and "Game Over" is displayed - GAME RESETS
            
    
            *  When the correct letter for that space is chosen, display that letter and remove the underscore
                - show that letter under the "Letters Guessed" (in a row) 
                - no affect on "Number of Guesses Remaining"
                - maximum guesses is 13.  If the number of incorrect guesses = 13, then the game is over and "Game Over" is displayed - GAME RESETS
                - When the total word is displayed, display You Win! - GAME RESETS
    
    - keep track of the number of wins a user has (keep until the game is reset) 
    
    */


   if(Objects.keys(pressedKey).length>0){ // checks if the object 'pressedKey' contains at least one key
   gameLoop()

function gameLoop() {
    var availableWordList = ['cher', 'madonna', 'aerosmith', 'acdc', 'styx', 'metallica', 'rush', 'journey', 'chicago', 'pixies']; //Array containing available words that can be guessed//
    var word = availableWordList[Math.floor(Math.random() * availableWordList.length)];  //Picks one of the avaialable words randomly from the available word array//
    //Sets up an array for the answers//
    var answerArray = [];
    for (var i = 0; i < availableWordList.length; i++) {
    answerArray[i] = "_";
    }} 
    document.getElementById("wordList").innerHTML = answerArray;
    

     //"


    
    
    























/*
var availableWordListArray = [];
    for (var i = 0; i < word.length; i++) {
    availableWordListArray[i] = "_";
}
document.getElementById('wordList').innerHTML = "availableWordList";

var remainingLetters = word.length;



variable list
var validChoices = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

var wins = 0;
var losses = 0;
var maxErrors = 13;

//Game logic

for()

for (x = 0; x < wordList.length; x++) { 
    text += wordList[i] + "<br>";
}
   



    var cher = ["c","h","e","r"];
    var madonna = ["m","a","d","o","n","n","a"];
    var aerosmith = ["a","e","r","o","s","m","i","t","h"];
    var acdc = ["a","c","d","c"];
    var styx = ["s","t","y","x"];
    var metallica = ["m","e","t","a","l","l","i","c","a"]
    var rush = ["r","u","s","h"];
    var journey = ["j","o","u","r","n","e","y"];
    var chicago = ["c","h","i","c","a","g","o"];
    var pixies = ["p","i","x","i","e","s"];
 */

