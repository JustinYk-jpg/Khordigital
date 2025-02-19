let isModalOpen = false;
let contrast = false;
const scaleFactor = 1 / 20;

let pageLoaded = false;
let timeElapsed = false;


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal-overlay-loading');
    const success = document.querySelector('.modal-overlay-success');

    loading.classList += ' modal-overlay-visible'
     emailjs
        .sendForm (
            'service_rh0kavb', 'template_7fa317p', event.target, 'user_DRxJ18uk3xgkYakVhvZLw'
    ).then(() => {
        console.log('this worked');
        loading.classList.remove('modal-overlay-visible');
        success.classList += ' modal-overlay-visible';
    }).catch(() => {
        loading.classList.remove('modal-overlay-visible');
        alert('The messaging service is temporarily unavailable. Please contact me directly at (404)-960-4938');
    }
    )
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal-open');
    }
    isModalOpen = true;
    document.body.classList += ' modal-open';
}

function toggleContrast() {
    contrast = !contrast;
    if (contrast) {
        document.body.classList += ' dark-mode';
    } else {
    document.body.classList.remove('dark-mode');
    }
}