function createParagraph(){
    var wordOne = document.getElementById('wordOne').value;
    var wordTwo = document.getElementById('wordTwo').value;
    var wordThree = document.getElementById('wordThree').value;
    var wordFour = document.getElementById('wordFour').value;
    var wordFive = document.getElementById('wordFive').value;
    var wordSix = document.getElementById('wordSix').value;
    var wordSeven = document.getElementById('wordSeven').value;
    var wordEight = document.getElementById('wordEight').value;
    var wordNine = document.getElementById('wordNine').value;
    var wordTen = document.getElementById('wordTen').value;
    var wordEleven = document.getElementById('wordEleven').value;
    var wordTwelve = document.getElementById('wordTwelve').value;
    var wordThirteen = document.getElementById('wordThirteen').value;
    var wordFourteen = document.getElementById('wordFourteen').value;
// comment

    var paragraph = `This might sound ${wordOne}, but my ${wordTwo} friend is a ghost. We met in ${wordThree} grade at school while they were ${wordFour} the ${wordFive}. Their name is ${wordSix} and they were ${wordSeven} years old when they died. Noone can ${wordEight} my friend but me. They have ${wordNine} hair and are ${wordTen} ${wordEleven}, and their clothes are ${wordTwelve}. Having an invisible friend is ${wordThirteen}, but they always win at ${wordFourteen} and seek.`

    document.getElementById('answer').innerHTML = paragraph
}