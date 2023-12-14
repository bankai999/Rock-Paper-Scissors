let userChoice = '';

document.getElementById('rock').addEventListener('click', function () {
    userChoice = 'rock';
    play();
});

document.getElementById('paper').addEventListener('click', function () {
    userChoice = 'paper';
    play();
});

document.getElementById('scissors').addEventListener('click', function () {
    userChoice = 'scissors';
    play();
}); 

function randomNumber() {
    let num = (Math.round(Math.random() * 2));
    return num;
}

function getComputerChoice() {
    switch(randomNumber()) {
        case 0:
           return 'rock';
            break;
        case 1:
           return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return 'Error';           
    }
}

function winner(user, comp) {
    user = user.toLowerCase();
    comp = comp.toLowerCase();

    if(user=='rock' && comp=='paper' || user=='paper' && comp=='scissors' || user == 'scissors' && comp=='rock') {
        return 'Computer Wins!!';
    }
    else if(user=='rock' && comp=='scissors' || user=='paper' && comp=='rock' || user == 'scissors' && comp=='paper') {
        return 'You Win!!';
    }
    else {
        return 'Its a TIE!!';
    }
}

function play() {
    let computerChoice = getComputerChoice();
    let res = winner(userChoice, computerChoice);
    
    document.getElementById('start').innerText = '';
    document.getElementById('user').innerText = 'Your choice: ' + userChoice;
    document.getElementById('computer').innerText = "Computer's choice: " + computerChoice;
    displayWinner(res);
    
    userChoice = '';
}

function displayWinner(result) {
    document.getElementById('result').innerText = result;
    if(result=='Computer Wins!!') {
        document.getElementById('result').style.color = '#FF2400';
    }
    else if(result=='You Win!!') {
        document.getElementById('result').style.color = 'limegreen';
    }
    else {
        document.getElementById('result').style.color = 'yellow';
    }
}

