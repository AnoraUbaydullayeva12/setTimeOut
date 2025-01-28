// function showMessage(from, text){
//     console.log(`${from}, ${text}`);
// }
// setTimeout(showMessage, 3000, 'hi', 'John'); //setTimeout


// function showMessage(from, text) {
//   console.log(`${from}, ${text}`);
// }
// setInterval(showMessage, 500, "hi", "John"); //setInterval


// function showNumber(num){
//     console.log(num);
//     if(num< 5){
//         setTimeout(showNumber, 1000, ++num);
//     }
// } 
// setTimeout(showNumber, 1000, 1); //setTimeout double

// function showMessage(num){
//     console.log(num);
//     let timeId = setTimeout(showMessage, 1000, ++num);
//     if (num ===10){
//         clearTimeout(timeId)
//     }
// }

// setTimeout(showMessage, 1000, 1)  //clearTimeout

// home task

function updateTimer(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');    

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = second;
}

    setInterval(updateTimer, 1000);
    updateTimer();
