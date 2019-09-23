function sendMesage() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm("kontakt_servis", "contact_form",this )
    });
}

