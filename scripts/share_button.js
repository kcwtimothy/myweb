// Sharing functions
function shareToWhatsApp() {
  var url = encodeURIComponent(window.location.href);
  var text = encodeURIComponent("Check out this page: ");
  window.open(`https://wa.me/?text=${text}${url}`, '_blank');
}

function shareToFacebook() {
  var url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareToTwitter() {
  var url = encodeURIComponent(window.location.href);
  var text = encodeURIComponent("Check out this page: ");
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

function shareToLinkedIn() {
  var url = encodeURIComponent(window.location.href);
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
}

function shareToInstagram() {
    var url = encodeURIComponent(window.location.href);
    var instagramUrl = `instagram://story-camera?url=${url}`;
    
    // Try to open Instagram app
    window.location.href = instagramUrl;
    
    // Fallback to website if app doesn't open after a short delay
    setTimeout(function() {
        window.location.href = 'https://www.instagram.com/';
    }, 2000);
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(function() {
    alert('Link copied to clipboard!');
  }, function(err) {
    console.error('Could not copy text: ', err);
  });
}