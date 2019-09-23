// let template_params = {
//    "name": "name_value",
//    "surname": "surname_value",
//    "email": "email_value",
//    "adress": "adress_value",
//    "city": "city_value",
//    "country": "country_value",
//    "phone_number": "phone_number_value"
// }

function sendMesage() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm("kontakt_servis", "tefsir_inb_kesir_forma", this )
    });
}

