
document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const company =
            document.getElementById("company").value;

        const phone =
            document.getElementById("phone").value;

        const email =
            document.getElementById("email").value;

        const trucks =
            document.getElementById("trucks").value;

        const service =
            document.getElementById("service").value;

        const message =
            document.getElementById("message").value;


        const subject =
            "New Prueba Trucking Inquiry";


        const body =
            "New trucking services inquiry:%0D%0A%0D%0A" +

            "Name: " + name + "%0D%0A" +

            "Company: " + company + "%0D%0A" +

            "Phone: " + phone + "%0D%0A" +

            "Email: " + email + "%0D%0A" +

            "Number of trucks: " + trucks + "%0D%0A" +

            "Service needed: " + service + "%0D%0A%0D%0A" +

            "Message:%0D%0A" + message;


        window.location.href =
            "mailto:example@email.com" +
            "?subject=" +
            encodeURIComponent(subject) +
            "&body=" +
            body;

    });
