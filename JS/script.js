const getMainNav = document.getElementById("main-nav")
const getMainSection = document.getElementById("main-section")

function fixSpacing() {
    getMainSection.style.paddingTop = `${getMainNav.clientHeight}px`
}

const navListItems = document.querySelectorAll(".nav-li")
for(let i = 0; i < navListItems.length; i++){
    let navListItem = navListItems[i]
    navListItem.onclick = e => {
        e.srcElement.localName.toLowerCase()
        console.log(e)
        
        if(e.srcElement.localName.toLowerCase() === "li") {
            console.log(e.srcElement.localName.toLowerCase())
            //e.srcElement.children[1]
        } else if(e.srcElement.localName.toLowerCase() === "a") {
            console.log("bruh trolling")
            //e.srcElement.nextElementSibling
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