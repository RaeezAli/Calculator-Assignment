const input = document.getElementById("display");

function back() {

    let backspace = input.value;
    let result = backspace.toString();
    input.value = result.slice(0,-1);

}

function clearAll() {

    input.value = '';
}