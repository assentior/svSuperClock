// Variables
const formL1 = document.querySelector('form');
const displayCountDown = document.querySelector('#displayCountDown');
const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');



// Event Listeners
var started = false;

formL1.addEventListener('submit', e => {
    // const resetButton_2 = document.getElementById('child_0').value;

    // alert('start');
    // if (started){
    //     started = false;
    //     //pauze magic
    // }else{


    //     alert(resetButton_2);
    //     started = true;
        e.preventDefault();
        countDown(formL1);
    // }
   
});



// Functions
function countDown (form) {
   
    
        // Get input
        let userTime = form.userTime.value
            .split(" ")
            .reduce((acc, item) => {
                if(item.includes("d")){
                    acc += item.substr(0, item.length - 1) * 8640000;
                } else if(item.includes("h")){
                    acc += item.substr(0, item.length - 1) * 360000;
                } else if(item.includes("m")){
                    acc += item.substr(0, item.length - 1) * 6000;
                } else if(item.includes("s")){
                    acc += item.substr(0, item.length - 1) * 100;
                } else {
                    acc += item * 6000;
                }

                return acc;
            }, 0);
 


        // Show time in correct format and start the timer
        const intervalDown = setInterval(() => {
            if(userTime === 0){
                clearInterval(intervalDown);
            };
        
            h = Math.floor(userTime / 360000);
            m = Math.floor((userTime - (h * 360000)) / 6000);
            s = Math.floor((userTime - (h * 360000) - (m * 6000)) / 100);
            cs = userTime % 100;
    
            h = h < 10 ? '0' + h : h;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;
            cs = cs < 10 ? '0' + cs : cs;
    
            displayCountDown.innerHTML = `${h}:${m}:${s},${cs}`;
            form.userTime.style.display = "none";
    
            userTime--;
    
            localStorage.setItem('time' , `${h}:${m}:${s},${cs}`);



        }, 10);

        startButton.value = 'Pause';
    
    

}



displayCountDown.innerHTML = localStorage.getItem('time')
