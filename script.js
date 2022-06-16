
var show = document.getElementById('show');
var resetLap = document.getElementById('resetLap');
var startStop = document.getElementById('startStop');
var laps = document.getElementById('laps');

var milliseconds = 0;
var seconds = 0;
var minutes = 0;

//defining variable to hold displaying values
var showMS = 0;
var showSeconds = 0;
var showMinutes = 0;


// variable to hold setInterval id
var interval = null;


// flags to know the stopwatch status
var startStopStatus = 'stopped';
var resetLapStatus = 'lap';


//stopwatch function
function stopWatch()
{
  // incrementing MS , seconds and minutes
  milliseconds++;
  
  if (milliseconds / 100 === 1){
    milliseconds = 0;
    seconds++;

    if (seconds / 60 === 1){
      seconds = 0;
      minutes++;
    }
  }

  //if milliseconds or seconds or minutes are only one digit, then adding extra 0
  if (milliseconds < 10){
    showMS = '0' + milliseconds.toString();
  }
  else{
    showMS = milliseconds;
  }

  if (seconds < 10){
    showSeconds = '0' + seconds.toString();
  }
  else{
    showSeconds = seconds;
  }

  if (minutes < 10){
    showMinutes = '0' + minutes.toString();
  }
  else{
    showMinutes = minutes;
  }

  show.innerHTML = `${showMinutes}:${showSeconds}:${showMS}`;
}


// startAndStop onclick function
function startAndStop()
{

  if (startStopStatus === 'stopped')
  {
    interval = setInterval(stopWatch, 10);
    startStop.innerHTML = 'Stop';
    resetLap.innerHTML = 'Lap';
    startStopStatus = 'started';
    resetLapStatus = 'lap'
    startStop.style.background = '#9C1414';
  } 

  else
  {
    clearInterval(interval);
    startStop.innerHTML = 'Start';
    resetLap.innerHTML = 'Reset'
    startStopStatus = 'stopped';
    resetLapStatus = 'reset';
    startStop.style.background = '#474444ce';
  }

} 


// resetAndLap onclick function
function resetAndLap()
{

  if (resetLapStatus === 'reset')
  {
    clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    showMS = '00';
    showSeconds = '00';
    showMinutes = '00';
    show.innerHTML = '00:00:00';
    startStop.innerHTML = 'Start';
    resetLap.innerHTML = 'Lap';
    laps.innerHTML = '';
    resetLapStatus = 'lap';
  }

  else
  {
    var currentLap = `${showMinutes}:${showSeconds}:${showMS}`;
    var li = document.createElement('li');
    li.setAttribute('class', 'lapItems');

    var currentTime = document.createElement('span');
    currentTime.setAttribute('class', 'currentTime');
    currentTime.innerHTML = currentLap;

    li.appendChild(currentTime);
    laps.appendChild(li);
  }

}