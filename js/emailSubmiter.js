var emailSender = function (e) {
  e.preventDefault();
  var formId = $(e.target.parentNode.parentNode).attr('id');
  var emailInput = e.target.parentNode.getElementsByClassName('emailInput');
  var emailInputValue = e.target.parentNode.getElementsByClassName('emailInput')[0].value;
  var submitButton = e.target;
  var errorMsg = e.target.parentNode.parentNode.getElementsByClassName('formErrorMsg');
  var emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  if (emailValidation.test(emailInputValue)) {

    $(submitButton).removeClass('error');
    $(errorMsg).removeClass('error');

    ga( 'send', 'event', 'Contact Form', 'submit' );

    emailInputValue = '';
    modal.style.display = "flex";
    setTimeout(function(){
      modal.style.display = "none";
    }, 2000);
  }	else {
    $(submitButton).addClass('error');
    $(errorMsg).addClass('error');
  }
  // When the user clicks on <span> (x), close the modal
  modal.onclick = function() {
      modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}

$("#emailFormTop .emailSubmit").click(function(e){
  emailSender(e);
});
