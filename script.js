const inputs = document.querySelectorAll("input")
const notification = document.getElementById("notification")
const form = document.getElementById("contact-form")
let formInput;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    inputs.forEach(input => {

        if (input.value == "") {
            input.classList.add("red-border")
            formInput = false;
        } else {
            input.classList.remove("red-border")
            formInput = true;
        }

    })

    if (formInput) {
        alertify.success("Pretplata poslana, hvala na povjerenju")

        sendMesage()
        // window.location.reload();
        // inputs.forEach(input => input.value = "")
    } else {
        alertify.error("Molimo vas provjerite prijavu");
    }
})

// $(document).ready(function() {
//   $('#contact-form').submit(function(e) {
//     let name    = document.getElementById('inputName'),
//         surname = document.getElementById('surname'),
//         email   = document.getElementById('inputEmail'),
//         city = document.getElementById('city'),
//         address = document.getElementById('address'),
//         country = document.getElementById('country'),
//         adress = document.getElementById('adress'),
//         phone_number = document.getElementById('phone_number')


//     if (!name.value || !email.value || !surname.value || !city.value || !address.value || !county.value || !phone_number.value) {
//       alertify.error("Molimo vas provjerite formu");
//       return false;
//     } else {
//       $.ajax({
//         method: 'POST',
//         url: '//formspree.io/elkelimeh.bosna@gmail.com',
//         data: $('#contact-form').serialize(),
//         datatype: 'json'
//       });
//       e.preventDefault();
//       $(this).get(0).reset();
//       alertify.success("Prijava za pretplatu poslana");
//     }
//   });
// });
