function verif3() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("Message").value.trim();
    let  nameMessage = document.getElementById('nameMessage'); 
    let emailMessage = document.getElementById("emailMessage");
    let messagMessage = document.getElementById("messagMessage");

    if (name.length <= 0) {
        nameMessage.textContent = "saisir le nom est obligatoire";
        nameMessage.style.color = 'red';
        return false;
    } else {
        nameMessage.textContent = ' ';
    }

    if (email.length === 0 || !email.endsWith("@gmail.com")) {
        emailMessage.textContent = "L'email doit se terminer par @gmail.com";
        emailMessage.style.color = "red";
        return false;
    } else {
        emailMessage.textContent = " ";
    }

    if (message.length === 0) {
        messagMessage.textContent = "saisir lemessage est obligatoire";
        messagMessage.style.color = 'red';
        return false;
    } else {
        messagMessage.textContent = ' ';
    }

    return true;
}

