const countdown = document.querySelector('.countdown');

// Set landing Date
const landingDate = new Date('jan 1, 2020 13:00:00').getTime();

// set interval
const intvl = setInterval(()=>{
  // get today date
  const now = new Date().getTime();

  // get difernce
  const defer = landingDate - now;

  // math calculation for date
  const days = Math.floor(defer / (1000 * 60 * 60 * 24));
  
  const hours = Math.floor((defer % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));

  const min = Math.floor((defer % (1000 * 60 * 60) / (1000 * 60)));

  const sec = Math.floor((defer % (1000 * 60) / 1000 ));

  // display all
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${min}<span>Minutes</span></div>
    <div>${sec}<span>Seconds</span></div>
  `;

  // if date is expired
  if(defer < 0) {
    clearInterval(intvl);
    countdown.style.color = '#235098';
    countdown.innerHTML = 'lanched!';
  }
},1000);