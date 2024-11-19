// let value;
// const inputValues = {};

// function getInputValue() {
//     var inputField = document.getElementById("myInput");
//     var inputValue = inputField.value; 
//     return inputValue;
// }
// function duplicateDiv() {
//     const teamname_block = document.getElementById("input-teamname");
//     const repeat_block = document.getElementById("team-repeat");

//     for (let i = 1; i < value; i++) {
//         const clone = repeat_block.cloneNode(true);
//         clone.id = "team" + i;
//         teamname_block.appendChild(clone);
//     }
// }

// function createBracket() {
//     const parentdiv = document.getElementById("team-repeat");
//     const input1 = parentdiv.querySelector("input");
//     const input_data = input1.value;
//     inputValues["inputValue0"] = input_data;
//     for (let i = 1; i < value; i++) {
//         const parentdiv = document.getElementById("team"+ i);
//         const input1 = parentdiv.querySelector("input");
//         const input_data = input1.value;
//         inputValues[`inputValue${i}`] = input_data;
//     }
//     for(let i = 0 ; i < value; i++){
//         console.log(inputValues[`inputValue${i}`]);
//     }
// }
let value; // Ensure `value` is initialized before use
const inputValues = {};

function getInputValue() {
    const inputField = document.getElementById("myInput");
    const inputValue = inputField.value;
    return inputValue;
}

function duplicateDiv() {
    const teamname_block = document.getElementById("input-teamname");
    const repeat_block = document.getElementById("team-repeat");

    // Check if `value` is defined and greater than 1
    // if (!value || value <= 1) {
    //     console.error("Value must be defined and greater than 1");
    //     return;
    // }

    for (let i = 1; i < value; i++) {
        const clone = repeat_block.cloneNode(true);
        clone.id = "team" + i;

        // Clear the input field in the cloned block to avoid duplication issues
        const inputField = clone.querySelector("input");
        if (inputField) inputField.value = "";

        teamname_block.appendChild(clone);
    }
}

function createBracket() {
    if (!value || value < 1) {
        console.error("Value must be defined and greater than 0");
        return;
    }

    // Process the first "team-repeat" block
    const firstDiv = document.getElementById("team-repeat");
    if (firstDiv) {
        const input1 = firstDiv.querySelector("input");
        const input_data = input1 ? input1.value : "";
        inputValues["inputValue0"] = input_data;
    } else {
        console.error("First parent div not found");
        return;
    }

    // Process dynamically created "teamX" blocks
    for (let i = 1; i < value; i++) {
        const parentDiv = document.getElementById("team" + i);
        if (parentDiv) {
            const input1 = parentDiv.querySelector("input");
            const input_data = input1 ? input1.value : "";
            inputValues[`inputValue${i}`] = input_data;
        } else {
            console.warn(`Parent div with ID team${i} not found`);
        }
    }

    // Log all input values
    for (let i = 0; i < value; i++) {
        console.log(inputValues[`inputValue${i}`]);
    }
}
