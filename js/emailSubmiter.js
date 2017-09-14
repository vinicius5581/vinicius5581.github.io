var emailSender = function (e) {
  e.preventDefault();

  // console.log($(e.target.parentNode.parentNode).attr('id'));
  // console.log(e.target.parentNode.getElementsByClassName('emailInput')[0].value);
  // console.log(e.target.parentNode.getElementsByClassName('nameInput')[0].value);
  // console.log(e.target.parentNode.getElementsByClassName('messageField')[0].value);


  var formId = $(e.target.parentNode.parentNode).attr('id');
  var nameInput = e.target.parentNode.getElementsByClassName('nameInput')[0].value;
  var emailInputValue = e.target.parentNode.getElementsByClassName('emailInput')[0].value;
  var messageInput = e.target.parentNode.getElementsByClassName('messageInput')[0].value;



  var submitButton = e.target;
  var errorMsg = e.target.parentNode.parentNode.getElementsByClassName('formErrorMsg');
  var emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (nameInput.length && emailValidation.test(emailInputValue) && messageInput.length) {
    var dateTime = new Date($.now());
    $(submitButton).removeClass('error');
    $(errorMsg).removeClass('error');
    ga( 'send', 'event', {
        'eventCategory': 'Contact form',
        'eventAction': 'Submit',
        'eventLabel': ':|-|: name: ' + nameInput + ' :|-|: email: ' + emailInputValue + ' :|-|: msg: ' + messageInput + ' :|-|: date & time: ' +  dateTime
      }
    );
    modal.style.display = "flex";

    setTimeout(function(){
      modal.style.display = "none";
    }, 5000);

    $('#contact-form .nameInput').val("");
    $('#contact-form .messageInput').val("");
    $('#contact-form .emailInput').val("");

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

$(".emailSubmit").click(function(e){
  emailSender(e);
});
