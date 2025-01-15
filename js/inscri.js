function verif2() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirm_password = document.getElementById('confirm-password').value.trim();
    let message = document.getElementById('emailMessage'); 
    let nameMessage = document.getElementById('nameMessage'); 
    let passwordMessage = document.getElementById('passwordMessage'); 
    let confirm_passwordMessage = document.getElementById('confirm-passwordMessage'); 
    if (name.length <= 0) {
        nameMessage.textContent = "saisir le nom est obligatoire";
        nameMessage.style.color = 'red';
        return false;
    } else {
        nameMessage.textContent = ' ';
    }

    if (email.length <= 0 || !email.endsWith('@gmail.com')) {
        message.textContent = "L'email doit se terminer par @gmail.com";
        message.style.color = 'red';
        return false;
    } else {
        message.textContent = ' ';

    }
    if (password.length <= 0) {
        passwordMessage.textContent = "saisir le password est obligatoire";
        passwordMessage.style.color = 'red';
        return false;
    } else {
        passwordMessage.textContent = ' ';
    }
    if (confirm_password.length <= 0) {
        confirm_passwordMessage.textContent = "saisir le confirm-passwoed est obligatoire";
        confirm_passwordMessage.style.color = 'red';
        return false;
    } 
    else if (password !== confirm_password) {
        confirm_passwordMessage.textContent = "Les mots de passe ne correspondent pas.";
        confirm_passwordMessage.style.color = 'red';
        return false;
    } else {
        confirm_passwordMessage.textContent = ' ';
    }


    return true;
}
