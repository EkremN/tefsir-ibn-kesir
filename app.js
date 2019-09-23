function sendMesage() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.send("kontakt_servis", "tefsir_inb_kesir_forma", this)
    });
}

