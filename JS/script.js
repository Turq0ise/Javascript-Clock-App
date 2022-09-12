const getMainNav = document.getElementById("main-nav")
const getMainSection = document.getElementById("main-section")

window.onload = () => {
    fixSpacing()
    addCurrentIndicator()
}

console.log(window.location)
function fixSpacing() {
    getMainSection.style.paddingTop = `${getMainNav.clientHeight}px`
}

const navListItems = document.querySelectorAll(".nav-li")
let getCurrentIndicator = document.querySelectorAll(".current-indicator")
let currentSectionId = window.location.hash

function addCurrentIndicator() {
    if(currentSectionId === "") {
        getCurrentIndicator[0].style.opacity = "100"
    } else {
        document.querySelector(`[href="${currentSectionId}"]`).children[0].children[1].style.opacity = "100"
    }
}

for(let i = 0; i < navListItems.length; i++){
    let navListItem = navListItems[i]
    navListItem.onclick = e => {
        e.srcElement.localName.toLowerCase()
        for(let x = 0; x < getCurrentIndicator.length; x++) {
            getCurrentIndicator[x].style.opacity = "0"
        }
        
        if(e.srcElement.localName.toLowerCase() === "li") {
            e.srcElement.children[1].style.opacity = "100"
        } else if(e.srcElement.localName.toLowerCase() === "p") {
            e.srcElement.nextElementSibling.style.opacity = "100"
        }
    }
}

const standardTime = 60

let setHours = 0   //max 99 hours or 5940 mins or 356400 seconds
let setMinutes = 0 //max 60 mins or 3600 seconds
let setSeconds = 0 //max 60 seconds

function setTimer() {    
    setHours = setHours * Math.pow(standardTime, 2)
    setMinutes = setMinutes * standardTime
    setSeconds = setSeconds
    
    let time = setHours + setMinutes + setSeconds

    console.log(time)
}