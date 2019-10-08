 let name    = document.getElementById('inputName'),
        surname = document.getElementById('surname'),
        email   = document.getElementById('inputEmail'),
        city = document.getElementById('city'),
        address = document.getElementById('address'),
        country = document.getElementById('country'),
        phone_number = document.getElementById('phone_number')

function sendMesage() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm("kontakt_servis", "tefsir_inb_kesir_forma", {
        this.name = name.valu,
        this.surname = surname.valu,
        this.email = email.valu,
        this.city = city.valu,
        this.address = address.valu,
        this.country = country.valu,
        this.phone_number = phone_number.valu
      } )
    });
}

