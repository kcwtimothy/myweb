function copyPageUrl() {
    navigator.clipboard.writeText(window.location.href).then(function() {
      alert('Link copied to clipboard!');
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  }