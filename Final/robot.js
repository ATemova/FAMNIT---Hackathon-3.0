document.getElementById('switch-button').addEventListener('change', function() {
    if (this.checked) {
        document.querySelector('.left-hand').classList.add('green-wave');
        document.querySelector('.right-hand').classList.add('green-wave');
    } else {
        document.querySelector('.left-hand').classList.remove('green-wave');
        document.querySelector('.right-hand').classList.remove('green-wave');
    }
});
// Get the current day of the week
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var date = new Date();
var dayName = days[date.getDay()];

// Set the greeting text
var greetingText = "Hello, it's your " + dayName + " bot!";
document.getElementById('greeting').innerText = greetingText;

// Open a smaller pop-up window when the bot icon is clicked
function openPopup() {
  window.open('popup.html', 'Popup', 'width=500,height=500'); // Adjust the width and height as needed
}

function navigateToPage(){
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      console.log('Hello');
      sleep(1000).then(() => {window.location.href ="news.html"});
    
}