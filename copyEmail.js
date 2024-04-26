document.addEventListener('DOMContentLoaded', function() {
    var emailLink = document.getElementById('emailLink');
    emailLink.addEventListener('click', function(event) {
        event.preventDefault();
        var email = 'amscheibler@gmail.com';
        var tempTextArea = document.createElement('textarea');
        tempTextArea.value = email;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);
        alert('Email copiado para a área de transferência: ' + email);
    });
});
