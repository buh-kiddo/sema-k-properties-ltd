//Select element function

const selectElement = function (element){
    return document.querySelector(element)
};


let bottomNavItems = document.querySelectorAll('.mb-nav-item')

let bottomMove = document.querySelector('.mb-move-item')

bottomNavItems.forEach((item, index) => {
    item.onclick = (e) => {
        console.log('object')
        let crrItem = document.querySelector('.mb-nav-item.active')
        crrItem.classList.remove('active')
        item.classList.add('active')
        bottomMove.style.left = index * 25 + '%'
    }
})

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open')
});

// Scroll reveal
/* window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 100
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 100
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 100
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 100
}); */

/* Contact */
$('.element').each(function() {
    $(this).mouseover(function() {
        $(this).addClass('active');
      $('.stage').children('.element').not('.active').addClass('inactive');
    });
    $(this).mouseleave(function() {
        $(this).removeClass('active');
        $('.stage').children('.element').not('.active').removeClass('inactive');
    });
});

/* Gallery */
 //Email JS
 function validate() {
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn')
  
    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value ==  "" || email.value ==  "" || msg.value ==  "") {
            emptyerror();
        } else{
          sendmail(name.value, email.value, msg.value);
          success();
        }
    })
  }
  validate();
  
  function sendmail(name,email,msg){
  emailjs.send("service_a0gzidf","template_z3490ae",{
  from_name: email,
  to_name: name,
  message: msg,
  });
  }
  
  function emptyerror() {
  swal({
      title: "Oh No...!",
      text: "Fields cannot be empty!",
      icon: "error",
    });
    
  }
  function success() {
  swal({
      title: "Email sent successfully",
      text: "We try to reply in 24 hours",
      icon: "success",
    });
    
  }