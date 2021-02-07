$(document).ready(function() {
    
    const timeEnd = new Date("July 20, 2021 23:57:59");
    
    /////////////////////////////////////////////
    const oneSecMain = document.querySelector('.main-ones-sec');
    const oneSec = document.querySelector('.ones-sec');
    const oneSecOverlay = document.querySelector('.ones-sec-overlay');

    const tenSecMain = document.querySelector('.main-tens-sec');
    const tenSec = document.querySelector('.tens-sec');
    const tenSecOverlay = document.querySelector('.tens-sec-overlay');

    ////////////////////////////////////////////
    const oneMinMain = document.querySelector('.main-ones-min');
    const oneMin = document.querySelector('.ones-min');
    const oneMinOverlay = document.querySelector('.ones-min-overlay');

    const tenMinMain = document.querySelector('.main-tens-min');
    const tenMin = document.querySelector('.tens-min');
    const tenMinOverlay = document.querySelector('.tens-min-overlay');

    /////////////////////////////////////////////
    const oneHourMain = document.querySelector('.main-ones-hour');
    const oneHour = document.querySelector('.ones-hour');
    const oneHourOverlay = document.querySelector('.ones-hour-overlay');

    const tenHourMain = document.querySelector('.main-tens-hour');
    const tenHour = document.querySelector('.tens-hour');
    const tenHourOverlay = document.querySelector('.tens-hour-overlay');

    /////////////////////////////////////////////
    const oneDayMain = document.querySelector('.main-ones-day');
    const oneDay = document.querySelector('.ones-day');
    const oneDayOverlay = document.querySelector('.ones-day-overlay');

    const tenDayMain = document.querySelector('.main-tens-day');
    const tenDay = document.querySelector('.tens-day');
    const tenDayOverlay = document.querySelector('.tens-day-overlay');

    //////////////////////////////////////////////

    let timeDiff, sec, min, hour, day, oneSecTime, tenSecTime, oneMinTime, tenMinTime, 
    oneHourTime, tenHourTime, oneDayTime, tenDayTime, cancelReq;

    let tenMinState = true, tenHourState = true, tenDayState = true, timeupdateState = true;

    timeUpdate = () => {
        let timeStart = Date.now();
        timeDiff = timeEnd - timeStart;
        let date = new Date(timeDiff - (16 * 60 * 60 * 1000));

        sec = date.getSeconds();
        min = date.getMinutes();
        hour = date.getHours();
        day = Math.floor(timeDiff / 86400000);
    }
        timeUpdate();
        if(timeDiff > 0) {
        oneSecTime = sec % 10;
        tenSecTime = Math.floor(sec / 10);

        oneMinTime = min % 10;
        tenMinTime = Math.floor(min / 10);

        oneHourTime = hour % 10;
        tenHourTime = Math.floor(hour / 10);

        oneDayTime = day % 10;
        tenDayTime = Math.floor(day / 10);

        oneSec.innerHTML = oneSecTime;
        tenSec.innerHTML = tenSecTime;

        oneMin.innerHTML = oneMinTime;
        tenMin.innerHTML = tenMinTime;

        oneHour.innerHTML = oneHourTime;
        tenHour.innerHTML = tenHourTime;

        oneDay.innerHTML = oneDayTime;
        tenDay.innerHTML = tenDayTime;
        console.log('a');
    } else {
        oneSec.innerHTML = 0;
        tenSec.innerHTML = 0;

        oneMin.innerHTML = 0;
        tenMin.innerHTML = 0;

        oneHour.innerHTML = 0;
        tenHour.innerHTML = 0;

        oneDay.innerHTML = 0;
        tenDay.innerHTML = 0;    
        console.log('b');
        document.getElementById('timeUp').style.opacity = 1;
    }
    //////////////////////////////////////////////
    oneSecUpdate = () => {
        oneSecTime = sec % 10;
        oneSecMain.classList.add('temp-panel-8');
        oneSecOverlay.innerHTML = oneSecTime;
    }

    oneSecReform = () => {
        oneSec.style.transition = 'none';
        oneSecOverlay.style.transition = 'none';
        oneSecMain.classList.remove('temp-panel-8');
        oneSec.innerHTML = oneSecTime;
    }

    oneSecTransition = () => {
        oneSec.style.transition = '0.7s ease-out';
        oneSecOverlay.style.transition = '0.7s ease-out';
    }

    tenSecUpdate = () => {
        tenSecTime = Math.floor(sec / 10);
        tenSecMain.classList.add('temp-panel-7');
        tenSecOverlay.innerHTML = tenSecTime;
    }

    tenSecReform = () => {
        tenSec.style.transition = 'none';
        tenSecOverlay.style.transition = 'none';
        tenSecMain.classList.remove('temp-panel-7');
        tenSec.innerHTML = tenSecTime;
    }

    tenSecTransition = () => {
        tenSec.style.transition = '0.7s ease-out';
        tenSecOverlay.style.transition = '0.7s ease-out';
    }

    ////////////////////////////////////////////////

    oneMinUpdate = () => {
        oneMinTime = min % 10;
        oneMinMain.classList.add('temp-panel-6');
        oneMinOverlay.innerHTML = oneMinTime;
    }

    oneMinReform = () => {
        oneMin.style.transition = 'none';
        oneMinOverlay.style.transition = 'none';
        oneMinMain.classList.remove('temp-panel-6');
        oneMin.innerHTML = oneMinTime;
    }

    oneMinTransition = () => {
        oneMin.style.transition = '0.7s ease-out';
        oneMinOverlay.style.transition = '0.7s ease-out';
    }

    tenMinUpdate = () => {
        tenMinTime = Math.floor(min / 10);
        tenMinMain.classList.add('temp-panel-5');
        tenMinOverlay.innerHTML = tenMinTime;
    }

    tenMinReform = () => {
        tenMin.style.transition = 'none';
        tenMinOverlay.style.transition = 'none';
        tenMinMain.classList.remove('temp-panel-5');
        tenMin.innerHTML = tenMinTime;
    }

    tenMinTransition = () => {
        tenMin.style.transition = '0.7s ease-out';
        tenMinOverlay.style.transition = '0.7s ease-out';
    }

    ////////////////////////////////////////////////

    oneHourUpdate = () => {
        oneHourTime = hour % 10;
        oneHourMain.classList.add('temp-panel-4');
        oneHourOverlay.innerHTML = oneHourTime;
    }

    oneHourReform = () => {
        oneHour.style.transition = 'none';
        oneHourOverlay.style.transition = 'none';
        oneHourMain.classList.remove('temp-panel-4');
        oneHour.innerHTML = oneHourTime;
    }

    oneHourTransition = () => {
        oneHour.style.transition = '0.7s ease-out';
        oneHourOverlay.style.transition = '0.7s ease-out';
    }

    tenHourUpdate = () => {
        tenHourTime = Math.floor(hour / 10);
        tenHourMain.classList.add('temp-panel-3');
        tenHourOverlay.innerHTML = tenHourTime;
    }

    tenHourReform = () => {
        tenHour.style.transition = 'none';
        tenHourOverlay.style.transition = 'none';
        tenHourMain.classList.remove('temp-panel-3');
        tenHour.innerHTML = tenHourTime;
    }

    tenHourTransition = () => {
        tenHour.style.transition = '0.7s ease-out';
        tenHourOverlay.style.transition = '0.7s ease-out';
    }

    ///////////////////////////////////////////

    oneDayUpdate = () => {
        oneDayTime = day % 10;
        oneDayMain.classList.add('temp-panel-2');
        oneDayOverlay.innerHTML = oneDayTime;
    }

    oneDayReform = () => {
        oneDay.style.transition = 'none';
        oneDayOverlay.style.transition = 'none';
        oneDayMain.classList.remove('temp-panel-2');
        oneDay.innerHTML = oneDayTime;
    }

    oneDayTransition = () => {
        oneDay.style.transition = '0.7s ease-out';
        oneDayOverlay.style.transition = '0.7s ease-out';
    }

    tenDayUpdate = () => {
        tenDayTime = Math.floor(day / 10);
        tenDayMain.classList.add('temp-panel-1');
        tenDayOverlay.innerHTML = tenDayTime;
    }

    tenDayReform = () => {
        tenDay.style.transition = 'none';
        tenDayOverlay.style.transition = 'none';
        tenDayMain.classList.remove('temp-panel-1');
        tenDay.innerHTML = tenDayTime;
    }

    tenDayTransition = () => {
        tenDay.style.transition = '0.7s ease-out';
        tenHourOverlay.style.transition = '0.7s ease-out';
    }

    //////////////////////////////////////////
    check = () => {
        if(sec == 1 && min == 0 && hour == 0 && day == 0) {
            clearInterval(cancelReq);
            setTimeout(() => {
                document.getElementById('timeUp').style.opacity = 1;
            }, 1000);
        }
    }
    /////////////////////////////////////////
    if(timeDiff > 0) {    
        cancelReq = setInterval(() => {
            check();
            timeUpdate();

            oneSecUpdate();
            setTimeout(() => {
                oneSecReform();  
            }, 700); 
            oneSecTransition();

            if(oneSecTime == 9) {
                tenSecUpdate();
                setTimeout(() => {
                    tenSecReform();  
                }, 700); 
                tenSecTransition();
            }

            /////////////////////////////
            if(oneSecTime == 9 && tenSecTime == 5) {
                oneMinUpdate();
                setTimeout(() => {
                    oneMinReform();  
            }, 700); 
            oneMinTransition();
            }
            
            if(oneMinTime == 9 && tenMinState) {
                tenMinUpdate();
                setTimeout(() => {
                    tenMinReform();  
                }, 700); 
                tenMinTransition();
                tenMinState = false;
            }
// && tenSecTime == 5 && oneSecTime == 9
            if(oneMinTime == 8) {
                tenMinState = true;
            }
            /////////////////////////////
            if(oneSecTime == 9 && tenSecTime == 5 && oneMinTime == 9 && tenMinTime == 5) {
                oneHourUpdate();
                setTimeout(() => {
                        oneHourReform();  
                }, 700); 
                oneHourTransition();
            }

            if(oneHourTime == 9 && tenHourState) {
                tenHourUpdate();
                setTimeout(() => {
                    tenHourReform();  
                }, 700); 
                tenHourTransition();
                tenHourState = false;
            }

            if(oneHourTime == 8) {
                tenHourState = true;
            }

            ////////////////////////////
            if(oneSecTime == 9 && tenSecTime == 5 && oneMinTime == 9 && tenMinTime == 5
                && oneHourTime == 3 && tenHourTime == 2) {
                oneDayUpdate();
                setTimeout(() => {
                        oneDayReform();  
                }, 700); 
                oneDayTransition();
            }
            
            if(oneDayTime == 9 && tenDayState) {
                tenDayUpdate();
                setTimeout(() => {
                    tenDayReform();  
                }, 700); 
                tenDayTransition();
                tenDayState = false;
            }

            if(oneDayTime == 8) {
                tenDayState = true;
            }
        }, 1000);  
    } 
})

