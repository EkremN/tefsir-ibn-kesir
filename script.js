const inputs = document.querySelectorAll("input")
const notification = document.getElementById("notification")
const form = document.getElementById("contact-form")
let formInput;

form.addEventListener("submit", () => {

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
        alertify.success("Message sent")
        inputs.forEach(input => input.value = "")
        sendMesage()
    } else {
        alertify.error("Please check your entries");
    }
})
