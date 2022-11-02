let scoreGuest = 0
let scoreHome = 0
let scoreForHome = document.getElementById("scoreHome-el") 
let scoreForGuest = document.getElementById("scoreGuest-el")

scoreForGuest.textContent = scoreGuest
scoreForHome.textContent = scoreHome

function oneHome(){
    scoreHome += 1
    scoreForHome.textContent = scoreHome
    
}

function twoHome(){
    scoreHome += 2
    scoreForHome.textContent = scoreHome
    
}

function threeHome(){
    scoreHome += 3
    scoreForHome.textContent = scoreHome
    
}

function oneGuest(){
    scoreGuest += 1
    scoreForGuest.textContent = scoreGuest
    
}

function twoGuest(){
    scoreGuest += 2
    scoreForGuest.textContent = scoreGuest
    
}

function threeGuest(){
    scoreGuest += 3
    scoreForGuest.textContent = scoreGuest
    
}