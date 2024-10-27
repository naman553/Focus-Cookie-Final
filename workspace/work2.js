
document.getElementById("svg").addEventListener("click", function () {
    var activity = document.getElementById("activity");
    if (activity.style.visibility === "visible") {
        activity.style.visibility = "hidden";
    } else {
        activity.style.visibility = "visible";
    }
});

var hits = 0;
var hitElement = document.querySelector('.hits');
document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        addHit();
    }
}

var addHit = function () {
    hits++;
    renderHits();
    let audio = document.getElementById('audio1')
    audio.play();
}

var renderHits = function () {
    hitElement.innerHTML = hits;
}

var resetHits = function () {
    hits = 0;
    renderHits();
}




document.getElementById("toggle").addEventListener("click", function () {
    var calculator = document.getElementById("calculator");
    calculator.style.display = calculator.style.display === "block" ? "none" : "block";
});

var calc = document.getElementById("calculator");
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

calc.addEventListener("mousedown", function (e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.addEventListener("mousemove", elementDrag);
    document.addEventListener("mouseup", closeDragElement);
});

function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    calc.style.top = (calc.offsetTop - pos2) + "px";
    calc.style.left = (calc.offsetLeft - pos1) + "px";
}

function closeDragElement() {
    document.removeEventListener("mousemove", elementDrag);
    document.removeEventListener("mouseup", closeDragElement);
}

function appendToCalc(value) {
    document.getElementById('calcinput').value += value;
}

function calculate() {
    try {
        document.getElementById('calcinput').value = eval(document.getElementById('calcinput').value);
    } catch {
        document.getElementById('calcinput').value = "Error";
    }
}
function clearAll() {
    var calcinput = document.getElementById("calcinput");
    calcinput.value = "";
}


let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');

let workTime = 1;
let breakTime = 5;

let seconds = "00"

// display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
}

// start timer
function start() {
    // change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // change the time
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    // countdown
    let timerFunction = () => {
        //change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        // start
        seconds = seconds - 1;

        if (seconds === 0) {
            workMinutes = workMinutes - 1;
            if (workMinutes === -1) {
                if (breakCount % 2 === 0) {
                    // start break
                    workMinutes = breakMinutes;
                    breakCount++
                    // Display break message
                    let breakMessage = document.createElement('div');
                    breakMessage.className = 'breakMessage';
                    breakMessage.id = 'breakMessage';
                    breakMessage.style.position = 'absolute';
                    breakMessage.style.top = '50%';
                    breakMessage.style.left = '50%';
                    breakMessage.style.transform = 'translate(-50%, -50%)';
                    breakMessage.style.backgroundColor = 'rgba(213, 153, 73, 0.8)';
                    breakMessage.style.color = '#FFECC6';
                    breakMessage.style.padding = '20px';
                    breakMessage.style.borderRadius = '10px';
                    breakMessage.style.zIndex = '1000';
                    breakMessage.style.fontSize = '20px';
                    breakMessage.innerHTML = '<h1 class="breakTitle">Break Time</h1><br>Take a break! You could go for a short walk, drink water, enjoy the relaxing music, or simply meditate for the time period. <br><button id="closeBreakMessage">Close</button>';

                    document.body.appendChild(breakMessage);

                    // Add event listener to close button
                    document.getElementById('closeBreakMessage').addEventListener('click', () => {
                        document.body.removeChild(breakMessage);
                    });
                    // change the painel
                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                } else {
                    // continue work
                    workMinutes = workTime;
                    breakCount++

                    // change the painel
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    // start countdown
    setInterval(timerFunction, 1000); // 1000 = 1s
}
document.getElementById("toggle1").addEventListener("click", function () {
    var container1 = document.querySelector(".container1");
    if (container1.style.visibility === "hidden") {
        container1.style.visibility = "visible";
    } else {
        container1.style.visibility = "hidden";
    }
});



document.getElementById("toggle1").addEventListener("click", function () {
    var work = document.getElementById("work");
    if (work.style.visibility === "hidden") {
        work.style.visibility = "visible";
    } else {
        work.style.visibility = "hidden";
    }
});


document.getElementById("activity").addEventListener("mousedown", function (e) {
    e.preventDefault();
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    pos3 = e.clientX;
    pos4 = e.clientY;

    document.addEventListener("mousemove", dragElement);
    document.addEventListener("mouseup", closeDragElement);

    function dragElement(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        var element = document.getElementById("activity");
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.removeEventListener("mouseup", closeDragElement);
        document.removeEventListener("mousemove", dragElement);
    }
});
document.getElementById("svg").addEventListener("click", function () {
    var work = document.getElementById("work");
    if (work.style.visibility === "hidden") {
        work.style.visibility = "visible";
    } else {
        work.style.visibility = "hidden";
    }
});

let tool = document.getElementById('toggle')
let timer = document.getElementById('toggle1')
let music = document.getElementById('music')
let counter = document.getElementById('svg')

tool.addEventListener("click", function () {
    document.getElementById('toggle').classList.toggle('fill')
}
)
timer.addEventListener("click", function () {
    document.getElementById('toggle1').classList.toggle('fill')
}
)
music.addEventListener("click", function () {
    document.getElementById('music').classList.toggle('fill')
}
)
counter.addEventListener("click", function () {
    document.getElementById('svg').classList.toggle('fill')
}
)



const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const playlist = document.getElementById('playlist').getElementsByTagName('li');
let currentSongIndex = 0;
let isPlaying = false;

function playSong(index) {
    audio.src = playlist[index].getAttribute('data-song');
    audio.play();
    isPlaying = true;
    playPauseBtn.textContent = '⏸';
}

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = '▶';
    } else {
        audio.play();
        playPauseBtn.textContent = '⏸';
    }
    isPlaying = !isPlaying;
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    playSong(currentSongIndex);
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    playSong(currentSongIndex);
}

playPauseBtn.addEventListener('click', togglePlayPause);
document.getElementById('next').addEventListener('click', nextSong);
document.getElementById('prev').addEventListener('click', prevSong);

audio.addEventListener('ended', nextSong);

Array.from(playlist).forEach((item, index) => {
    item.addEventListener('click', () => {
        currentSongIndex = index;
        playSong(currentSongIndex);
    });
});

// Load the first song initially
playSong(currentSongIndex);
document.getElementById("music").addEventListener("click", function () {
    var musicPlayer = document.getElementById("music-player");
    if (musicPlayer.style.visibility === "hidden") {
        musicPlayer.style.visibility = "visible";
    } else {
        musicPlayer.style.visibility = "hidden";
    }
});

document.getElementById("music-player").addEventListener("mousedown", function (e) {
    e.preventDefault();
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    pos3 = e.clientX;
    pos4 = e.clientY;

    document.addEventListener("mousemove", dragElement);
    document.addEventListener("mouseup", closeDragElement);

    function dragElement(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        var element = document.getElementById("music-player");
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.removeEventListener("mouseup", closeDragElement);
        document.removeEventListener("mousemove", dragElement);
    }
});


// Toggling visibility on SVG click
document.getElementById("todo").addEventListener("click", () => {
    const todoContainer = document.getElementById("todo-container1");
    todoContainer.style.visibility = (todoContainer.style.visibility === "hidden") ? "visible" : "hidden";
});

// Make the todo-container draggable via the header only
dragElement(document.getElementById("todo-container1"), document.getElementById("drag-header"));

function dragElement(element, dragHandle) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    dragHandle.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const listItem = document.createElement("li");
    listItem.className = "task-item";

    const textNode = document.createTextNode(taskText);
    listItem.appendChild(textNode);

    listItem.addEventListener("click", () => {
        listItem.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "&#10003;";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        listItem.remove();
    });

    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    taskInput.value = "";
}