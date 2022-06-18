

function markLetterFound(letterIndex) {
    var element = document.getElementById("letter"+letterIndex);
    element.classList.add("found");
}

export default markLetterFound;