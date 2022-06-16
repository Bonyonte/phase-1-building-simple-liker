// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const allHearts = document.querySelector('span.like-glyph');

allHearts.forEach(heart => {
  heart.addEventListener('click', () => {
    if (heart.innerText === FULL_HEART){
      heart.classList.remove('activated-heart')
      heart.innerText = EMPTY_HEART;
    }
    else{
      mimicServerCall()
    .then(() => {
      heart.innerText = FULL_HEART;
      heart.classList.add ('activated-heart');
    })

    .catch(() => {
      const modal = document.getElementById('modal');
      modal.classList.remove('.hidden')
      const message = document.getElementById('modal-message')
      message.innerText = 'Random server error. Try again.'

      setTimeout(() => {modal.classList.add ('.hidden')}, 3000);
    });
  }})
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
mimicServerCall();