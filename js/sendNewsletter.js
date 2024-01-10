function submitNewsletter(e) {
    e.preventDefault();
    const mailInput = document.querySelector('[aria-label="newsletter"]');
    const mailValue = mailInput.value;
    if (!mailValue) {
        alert("please enter a email");
        return;
    }
    if (!validateEmail(mailValue)) {
        alert("enter a valid email");
        return;
    }
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzZljS1kc1jYxluwhawdkhC4BYUiLh3fsXshnhC3hVQQD06m6bwI4CraQRyIjw3c7i0jg/exec",
        data: $("#submit-form").serialize(),
        method: "POST",
        success: function (response) {
            alert("Form submitted successfully");
            window.location.reload();
        },
        error: function (err) {
            alert("Something Error");
        },
    });
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
