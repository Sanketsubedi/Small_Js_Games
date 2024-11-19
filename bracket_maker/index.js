let value;
const inputValues = {};

function getInputValue() {
    var inputField = document.getElementById("myInput");
    var inputValue = inputField.value; 
    return inputValue;
}
function duplicateDiv() {
    const teamname_block = document.getElementById("input-teamname");
    const repeat_block = document.getElementById("team-repeat");

    for (let i = 1; i < value; i++) {
        const clone = repeat_block.cloneNode(true);
        clone.id = "team" + i;
        teamname_block.appendChild(clone);
    }
}

function createBracket() {
    const parentdiv = document.getElementById("team-repeat");
    const input1 = parentdiv.querySelector("input");
    const input_data = input1.value;
    inputValues["inputValue0"] = input_data;
    for (let i = 1; i < value; i++) {
        const parentdiv = document.getElementById("team"+ i);
        const input1 = parentdiv.querySelector("input");
        const input_data = input1.value;
        inputValues[`inputValue${i}`] = input_data;
    }
    for(let i = 0 ; i < value; i++){
        console.log(inputValues[`inputValue${i}`]);
    }
}
