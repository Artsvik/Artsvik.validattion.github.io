let input_email = document.querySelector("#email")

input_email.onkeyup = function () {
    console.log("emmail_with_@", input_email.value)
    try {
        if (input_email.value.includes("@gmail.com")) {
            input_email.style.background = "pink"
        } else if (input_email.value.includes("@mail.ru")) {
            input_email.style.background = "pink"
        } else if (input_email.value.includes("@bk.ru")) {
            input_email.style.background = "pink"
        } else if (input_email.value.includes("@yahoo.com+")) {
            input_email.style.background = "pink"
        } else {
            input_email.style.background = "red"
            console.log("Please enter an email adress")
        }
    } catch (e) {
        input_email.innerHTML = e
    }

}

let input_password = document.querySelector("#password")

input_password.onkeyup = function () {
    console.log("password_symbols", input_email.value)

    let numbers_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let symbols = "!,@,#,$,%,^,&,*,(,)"
    let symbols_arr = symbols.split(",")
    console.log(numbers_arr.includes(+-input_password.value))
    console.log(symbols_arr.includes(input_password.value))
    try {
        if (input_password.value.length >= 8 && input_password.value.length <= 16) {

            // console.log()
            if (numbers_arr.includes(+input_password.value) && symbols_arr.includes(input_password.value)) {

                input_password.style.background = "pink"
            }
        } else {
            input_password.style.background = "red"
            console.log("Please enter a suitable password")
        }
    } catch (f) {
        input_password.innerHTML = f
    }

}

let input_zip = document.querySelector("#zip")

input_zip.onkeyup = function () {
    console.log("zip_length", input_zip.value)
    try {
        if (input_zip.value.length < 5) {
            throw "Zip code must contain 5 numbers"
        } else if (input_zip.value.length > 5) {
            throw "Zip code must contain 5 numbers"
        } else {

        }
    } catch (g) {
        input_zip.innerHTML = g
    }
}

let form = document.querySelector("form")

form.onsubmit = (e) => {
    e.preventDefault()
    console.log("submit")
}