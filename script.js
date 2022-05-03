let char = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"x",
"y",
"z",
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"X",
"Y",
"Z",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0",
"!",
"#",
"€",
"%",
"&",
"/",
"=",
"?",
"*",
"<",
">",
"$",
"£",
"@",
"©",
"∞",
"|",
"≈",
"±"
]

let copyText = document.getElementById('copy-text')
let outputs = document.getElementById('outputs')
let output = document.querySelector('.output')
let btn = document.querySelector(".btn")
let form = document.querySelector(".charAmount")
let outputChildren = Array.from(outputs.children);

  
// Generate password on button click event
btn.addEventListener('click', () => generatePassword())

// Function that generates password and outputs it
function generatePassword(){

    outputChildren.forEach(outputChildren => {
        // Resets the output on button click
        if (outputChildren.textContent.length >= 0){
            outputChildren.textContent = ""
        }
    });
   

    // Generates a random number and converts it to a password and outputs it
    outputChildren.forEach(outputChildren => {
    for ( let i = 0; i < getInputValue(); i++){  
        let random = Math.floor(Math.random() * char.length);
            outputChildren.textContent += char[random]; 
        }

        input()
        copied.classList.add('hide')
        copyText.classList.remove('hide')
    })};

    
    // Generates a password based on character amount input
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        getInputValue();
        generatePassword()
    })
    
    // Returns the input value
    function getInputValue(){
        return form.inputVal.value.trim();
    }
    
    // Presets the value to 8 if no value is set
    function input(){
        if (form.inputVal.value.length === 0){
            form.inputVal.value = 8
        }
}

// Copy password on click event
outputs.addEventListener('click', (e) => {
    
    navigator.clipboard.writeText(e.target.textContent);
    let copied = document.getElementById('copied');
    copied.classList.remove('hide')
    copyText.classList.add('hide')
})








// outputChildren.forEach(outputChildren => {
//     outputChildren.textContent = " heisan"
// });

//outputChildren.textContent += "hello"