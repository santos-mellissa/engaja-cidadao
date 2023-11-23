// user inputs
const fullName = document.querySelector('#full_name');
const documentNumber = document.querySelector('#document_number');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
// report inputs
const street = document.querySelector('#street');
const number = document.querySelector('#number');
const complement = document.querySelector('#complement');
const neighborhood = document.querySelector('#neighborhood');
const city = document.querySelector('#city');
const zipCode = document.querySelector('#zip_code');
const state = document.querySelector('#state');
const report = document.querySelector('#report');
const reportType = document.querySelector('#report_type');
const resident = document.querySelector('#resident');
const image = document.querySelector('#image');
// another elements
const searchButton = document.querySelector('#search_cep');
const sendButton = document.querySelector('#send_report');
const anonymousCheckbox = document.querySelector('#anonymous');
const userSection = document.querySelector('#user_identification');

anonymousCheckbox.addEventListener('change', () => {
    if (anonymousCheckbox.checked) {
        console.log(userSection);
        userSection.style.display = 'initial';
    } else {
        userSection.style.display = 'none';
    }
});

function resetLocationFields() {
    [street, neighborhood, city, state].forEach((field) => {
        field.value = '';
        field.disabled = false;
    })
}

function fillLocationFields(data) {
    resetLocationFields();
    if (data.logradouro) {
        street.value = data.logradouro;
        street.disabled = true;
    };
    if (data.bairro) {
        neighborhood.value = data.bairro;
        neighborhood.disabled = true;
    };
    if (data.localidade) {
        city.value = data.localidade;
        city.disabled = true;
    };
    if (data.uf) {
        state.value = data.uf;
        state.disabled = true;
    };
}

async function getDataFromCep() {
    const cep = zipCode.value;
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    if (response.status !== 200 || data.erro) {
        return alert('CEP inválido.')
    }
    fillLocationFields(data);
    return console.log(data);
}

async function postFormData() {
    const payload = {
        report: {
            street: street.value,
            number: number.value,
            neighborhood: neighborhood.value,
            city: city.value,
            zip_code: zipCode.value,
            state: state.value,
            complement: complement.value,
            report: report.value,
            report_type: reportType.value,
            resident: resident.checked ? 1 : 0,
            image: image.value
        },
        user: {
            full_name: fullName.value,
            document_number: documentNumber.value,
            phone: phone.value,
            email: email.value
        }
    }
    const apiConfiguration = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }
    await fetch('http://localhost:3001/report', apiConfiguration);
    console.log(payload);
}

searchButton.addEventListener('click', getDataFromCep);
sendButton.addEventListener('click', postFormData);
