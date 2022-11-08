const form = document.getElementById('form')
const username = document.getElementById('username')
const cpf = document.getElementById('cpf')
const tel = document.getElementById('tel')
const data = document.getElementById('data')
const sexo = document.getElementById('sexo')
const estado = document.getElementById('estado')
const cidade = document.getElementById('cidade')
const cep = document.getElementById('cep')
const bairro = document.getElementById('bairro')
const rua = document.getElementById('rua')
const numero = document.getElementById('numero')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('password-two')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const usernameValue = username.value.trim()
    const cpfValue = cpf.value.trim()
    const telValue = tel.value.trim()
    const dataValue = data.value.trim()
    const sexoValue = sexo.value.trim()
    const estadoValue = estado.value.trim()
    const cidadeValue = cidade.value.trim()
    const cepValue = cep.value.trim()
    const bairroValue = bairro.value.trim()
    const ruaValue = rua.value.trim()
    const numeroValue = numero.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()

    if(usernameValue === '') {
        setErrorFor(username, 'Preencha esse campo')
    } else {
        setSuccessFor(username)
    }

    if(cpfValue === '') {
        setErrorFor(cpf, 'Preencha esse campo')
    } else {
        setSuccessFor(cpf)
    }

    if(telValue === '') {
        setErrorFor(tel, 'Preencha esse campo')
    } else {
        setSuccessFor(tel)
    }

    if(dataValue === '') {
        setErrorFor(data, 'Preencha esse campo')
    } else {
        setSuccessFor(data)
    }

    if(sexoValue === '') {
        setErrorFor(sexo, 'Preencha esse campo')
    } else {
        setSuccessFor(sexo)
    }

    if(estadoValue === '') {

        setErrorFor(estado, 'Preencha esse campo')
    } else {
        setSuccessFor(estado)
    }
    if(cepValue === '') {
        setErrorFor(cep, 'Preencha esse campo')
    } else {
        setSuccessFor(cep)
    }

    if(cidadeValue === '') {
        setErrorFor(cidade, 'Preencha esse campo')
    } else {
        setSuccessFor(cidade)
    }

    if(bairroValue === '') {
        setErrorFor(bairro, 'Preencha esse campo')
    } else {
        setSuccessFor(bairro)
    }

    if(ruaValue === '') {
        setErrorFor(rua, 'Preencha esse campo')
    } else {
        setSuccessFor(rua)
    }

    if(numeroValue === '') {
        setErrorFor(numero , 'Preencha esse campo')
    } else {
        setSuccessFor(numero)
    }

    if(emailValue === '') {
        setErrorFor(email, 'Preencha esse campo')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else {
        setSuccessFor(email)
    }
   
    if(passwordValue === '') {
        setErrorFor(password, 'Preencha esse campo')

    } else if(passwordValue.length < 8) { 
        setErrorFor(password, 'Senha deve ter mais que 8 caracteres')
    } else {
        setSuccessFor(password)
    }

    if(passwordtwoValue === '') {
        setErrorFor(passwordtwo, 'Preencha esse campo')

    } else if(passwordValue !== passwordtwoValue) { 
        setErrorFor(passwordtwo, 'Senhas não tão iguais')
    } else {
        setSuccessFor(passwordtwo)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}
