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
