const form = document.getElementById('contact-form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const consentCheckboxInput = document.getElementById('consent');
const general = document.getElementById('general');
const support = document.getElementById('support');
const successBanner = document.getElementById('success-banner');

form.addEventListener('submit', function (e) {
    /* prevent page reload */
    e.preventDefault();

    let isValid = true;

    /* Check First Name */
    if (firstNameInput.value.trim() === '') {
        firstNameInput.parentElement.classList.add('error');
        isValid = false;
    } else {
        firstNameInput.parentElement.classList.remove('error');
    }

    /* Check Last Name */
    if (lastNameInput.value.trim() === '') {
        lastNameInput.parentElement.classList.add('error');
        isValid = false;
    } else {
        lastNameInput.parentElement.classList.remove('error');
    }

    /* Check Email */
    if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
        emailInput.parentElement.classList.add('error');
        isValid = false;
    } else {
        emailInput.parentElement.classList.remove('error');
    }

    /* Check Query Type (Radio Buttons) */
    const queryGroup = general.closest('.form-group');
    if (!general.checked && !support.checked) {
        queryGroup.classList.add('error');
        isValid = false;
    } else {
        queryGroup.classList.remove('error');
    }

    /* Check Message */
    if (messageInput.value.trim() === '') {
        messageInput.parentElement.classList.add('error');
        isValid = false;
    } else {
        messageInput.parentElement.classList.remove('error');
    }

    /* Check Consent Checkbox */
    const consentGroup = consentCheckboxInput.closest('.form-group');
    if (!consentCheckboxInput.checked) {
        consentGroup.classList.add('error');
        isValid = false;
    } else {
        consentGroup.classList.remove('error');
    }

    /* Show Success Banner if all fields are valid */
    if (isValid) {
        successBanner.classList.add('active');
        form.reset();
    }
});

