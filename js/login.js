function verif1(){
    let  name = document.getElementById('name').value.trim();
    let  password = document.getElementById('password').value.trim();
    let  nameMessage = document.getElementById('nameMessage'); 
    let  passwordMessage= document.getElementById('passwordMessage'); 

    if (name.length <= 0) {
        nameMessage.textContent = "saisir le nom est obligatoire";
        nameMessage.style.color = 'red';
        return false;
    } else {
        nameMessage.textContent = ' ';
    }

    if (password.length <= 0) {
        passwordMessage.textContent = "saisir le password est obligatoire";
        passwordMessage.style.color = 'red';
        return false;
    } else {
        passwordMessage.textContent = ' ';
    }
    return true;
    
}