document.addEventListener("DOMContentLoaded", function() {
  // Show loader when page starts loading
  const loader = document.getElementById("spinner-wrapper");
  loader.style.display = "block";
  // loader.classList.add(".spinner-wrapper-hidden");

  // Hide loader when page finishes loading
  window.onload = function() {
    loader.style.display = "none";
    document.getElementById("content-to-display").style.display = "block"; // Show content

    document.getElementById("imageModal").style.display = 'block';
    
    loader.addEventListener("transitionend",()=>{
      document.body.removeChild("loader");
    });
  };
});

// Function to close modal
function closeModal() {
  document.getElementById("imageModal").style.display = 'none';
};


// <!-- contact email using emailjs-->


// Function to send email when form is submitted

var sender_mail = document.getElementById("email").value
 if(sender_mail !== "example@gmail.com" || sender_mail !== ""){

document.getElementById('email-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  var formData = {
    from_name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    phone: document.getElementById("phone").value
  };
  
  // Send email using EmailJS
  emailjs.send('YOUR_SERVICE_ID', 'TEMPELATE_ID', formData)
    .then(function(response) {
      alert('Message sent successfully!');
    }, function(error) {
      console.error('Error sending message:', error);
      alert('Message could not be sent. Please try again later.');
    });
});
}else{
  alert('Give email to submit the contact form');
}




