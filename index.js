
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer1 = new Timer(durationInput, startButton, pauseButton, {
    onStart() {
        console.log('Timer Started')
    }, 
    onTick() {
        console.log('Time changed')
    }, 
    onComplete() {
        console.log('Timer completed')
    }
});