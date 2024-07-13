document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("yt_h2qc0-jHPo5GC_"); 

    // Belows are the behavior controlling opening/closing modal dialogues
    // Get the modal
    var modal = document.getElementById("contactModal");

    // Get the button that opens the modal
    var btn = document.getElementById("contactBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the block modal 
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close the modal too
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
    // Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Validate form fields
        const name = document.getElementById('ContactName').value;
        const message = document.getElementById('ContactComment').value;
        if (name === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }
        // Set the parameters for EmailJS
        var templateParams = {
            ContactName: name,
            ContactComment: message
        };

        emailjs.send('service_h0uv1zk', 'template_1ktdod6', templateParams)
            .then(function(response) {
                alert('Message sent successfully!');
                modal.style.display = "none";
            }, function(error) {
                alert('Failed to send message. Please try again later. Error: ' + JSON.stringify(error));
            });
    });
});

