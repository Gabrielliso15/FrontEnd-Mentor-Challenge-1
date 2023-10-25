document.addEventListener('DOMContentLoaded', function() {
    const email = document.getElementById('email');
    const form = document.getElementById('form');
    const warnings = document.getElementById('warnings');
    const a = document.getElementById('a');
    const b = document.getElementById('b');
    const bemail = document.getElementById('bemail');
    const dismissButton = document.querySelector('.principalbbutton');

    form.addEventListener('submit', e => {
        e.preventDefault();
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!regexEmail.test(email.value)) {
            console.log("Correo electrónico no válido");
            warnings.style.display = "block";
            email.style.backgroundColor = "#fdd9d6";
            email.style.border = "1px solid #f9695b";
            email.style.color = 'red';
        } else {
            // El correo electrónico es válido, puedes enviar el formulario aquí
            console.log("Formulario enviado con éxito");
            warnings.style.display = "none";
            email.style.color = 'black';
            a.style.display = 'none';
            b.style.display = 'flex';
            if (bemail) {
                bemail.textContent = email.value;
            }
        }
    });

    dismissButton.addEventListener('click', function() {
        if (a && b) {
            a.style.display = 'flex'; // Muestra "a"
            b.style.display = 'none'; // Oculta "b"
        }
    });
});