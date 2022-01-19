 let words = new Map();


function preload() {
  loadStrings('beale.wordlist.asc.txt', createMap);
}
/**
 * This function goes through the word list line-by-line.
 * It then splits the line on any tab characters that appear, 
 *   recording only the first two as 'key' and 'value'
 * If the key is exactly five characters long, we assume the 
 *   line we are on is a line that contains a key/value pair
 *   then we store the word in the map with the key. 
 * 
 * This allows us to use the words Map later by simply using 
 *   a call to get, like so:
 * 
 * lookupKey = 12340
 * word = words.get(lookupKey)
 */

let lookupKey = "12345";

function createMap(strings) {
  for (let line of strings) {
    let [key, word] = line.split('\t');
    if (key.length === 5) {
      words.set(key, word);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);
}

function draw() {
  background('lime');
  text(`${lookupKey}: ${words.get(lookupKey)}`, width / 2, height / 2);
  noLoop();
  textSize(30);
  text('Password', width / 2., height / 4);
}


function keyPressed() {
  if (key === " ") {
    lookupKey = generateLookupKey();
    redraw();
  }
}
function generateLookupKey() {
  key = "";
  const dieFaces = [1,2,3,4,5,6,7,8,9,19] 
  for( let i = 0; i < 5; i++ ) {
    // this string syntax embeds values into a string
    // the ${value} pattern indicates a value
    // that value is computed and then converted into a string
    // in this example there are two values:
    // key - which is the previous key
    // random(dieFaces), which gets a random value from the dieFaces list.
    key = `${key}${random(dieFaces)}`; 
  }
  return key;
}