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
        inputs.forEach(input => input.value = "")
        sendMesage()
    } else {
        alertify.error("Molimo vas provjerite prijavu");
    }
})
