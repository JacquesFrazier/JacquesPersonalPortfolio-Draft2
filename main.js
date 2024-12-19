//button click
var togglebtn = document.querySelector('.togglebtn')
var nav = document.querySelector('.navlinks')
var links = document.querySelector('.navlinks li')

togglebtn.addEventListener('click', function(){
     this.classList.toggle('click');
    nav.classList.toggle('open');    
    
})




//cursor tracker animation 
const tracker = document.querySelector('.cursor-tracker')
const trackerSize = tracker.offsetWidth
let trackerX = 0
let trackerY = 0
let mouseX = 0
let mouseY = 0
const speed = 0.05
let isVisible = false

document.addEventListener('mousemove', e => {
    if(!isVisible){
        isVisible = true
        tracker.style.opacity = 1
        updatePosition()
    }
    mouseX = e.clientX
    mouseY = e.clientY
})

const updatePosition = () => {
    const distanceX = mouseX - (trackerX + trackerSize / 2)
    const distanceY = mouseY - (trackerY + trackerSize / 2)

    trackerX += distanceX * speed
    trackerY += distanceY * speed

    tracker.style.transform = `translate(${trackerX}px, ${trackerY}px)`

    requestAnimationFrame(updatePosition)
}


//scroll bar animation 


const bodyEl = document.body;
const barEl = document.querySelector('.bar');
const updateBar = () => {
    let scrollPos = (window.scrollY / (bodyEl.scrollHeight - window.innerHeight)) * 100;
    barEl.style.width = `${scrollPos}%`;
    requestAnimationFrame(updateBar);
};
updateBar();



//Different Carrers and/or Skills
//"Economics Graduate"

var typed = new Typed(".change",{
    strings:["Frontend Developer", "Content Creator", "Jack of All Trades", "Autodidact"],
    typedSpeed: 70, 
    backSpeed: 55, 
    loop: true
})



//Space Gun => sound effect

var sound1 = new Audio();
sound1.src = "sound1.wav";


//Are you sure you want to go to Youtube 

    // Function to show confirmation pop-up
    function confirmNavigation(event) {
      var message = 'Are you sure you want to explore YouTube channel?';
      event.returnValue = message; // Standard for most browsers
      return message; // For some older browsers
    }

    // Attach the event handler to the link
    var nextPageLink = document.getElementById('nextPageLink');
    nextPageLink.addEventListener('click', function(event) {
      if (!confirm('Are you sure you want to explore YouTube channel?')) {
        event.preventDefault(); // Cancel the navigation
      } 
    });
  //    else {
  //      // If the user clicks "OK" on the confirmation, attach the onbeforeunload event
  //      window.onbeforeunload = confirmNavigation;
  //    }
  //  });
  



//change background color
var sun = document.getElementById('sun');

sun.onclick = function(){
 document.body.classList.toggle('light-theme');
}



//switching the sun and moon by click
sun.addEventListener('click', () => {
  if (sun.classList.contains('fa-sun')) {
      sun.classList.remove('fa-sun');
      sun.classList.add('fa-moon'); // Switching to another icon    
  } else {
      sun.classList.remove('fa-moon');
      sun.classList.add('fa-sun'); // Switching back to the initial icon
  }
});



//Slide In content
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

