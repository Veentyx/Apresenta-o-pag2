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
        // mostrar erro
        // add classe
        setErrorFor(username, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(username)
    }

    if(cpfValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(cpf, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(cpf)
    }

    if(telValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(tel, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(tel)
    }

    if(dataValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(data, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(data)
    }

    if(sexoValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(sexo, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(sexo)
    }

    if(estadoValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(estado, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(estado)
    }
    if(cepValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(cep, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(cep)
    }

    if(cidadeValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(cidade, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(cidade)
    }

    if(bairroValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(bairro, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(bairro)
    }

    if(ruaValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(rua, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(rua)
    }

    if(numeroValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(numero , 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(numero)
    }

    if(emailValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(email, 'Preencha esse campo')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(email)
    }
   
    if(passwordValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(password, 'Preencha esse campo')

    } else if(passwordValue.length < 8) { 
        setErrorFor(password, 'Senha deve ter mais que 8 caracteres')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(password)
    }

    if(passwordtwoValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(passwordtwo, 'Preencha esse campo')

    } else if(passwordValue !== passwordtwoValue) { 
        setErrorFor(passwordtwo, 'Senhas não tão iguais')
    } else {
        // adicionar a classe de sucesso
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