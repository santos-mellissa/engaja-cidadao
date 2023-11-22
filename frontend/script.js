// user inputs
const fullName = document.querySelector('#full_name');
const documentNumber = document.querySelector('#document_number');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
// report inputs
const street = document.querySelector('#street');
const number = document.querySelector('#number');
const complement = document.querySelector('#complement');
const city = document.querySelector('#city');
const zipCode = document.querySelector('#zip_code');
const state = document.querySelector('#state');
const report = document.querySelector('#report');
const reportType = document.querySelector('#report_type');
const resident = document.querySelector('#resident');
const image = document.querySelector('#image');

const button = document.querySelector('#send_report');

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
            resident: resident.value,
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
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    }
    await fetch('http://localhost:3001/report/', apiConfiguration)
}

button.addEventListener('click', postFormData);
