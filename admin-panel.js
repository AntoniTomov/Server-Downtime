const outageBtn = document.getElementById('outageBtn');
const maintenanceBtn = document.getElementById('maintenanceBtn');
const outageWrapper = document.getElementById('outageWrapper');
const maintenanceWrapper = document.getElementById('maintenanceWrapper');
const main = document.getElementsByTagName('main');
const addOutageEmailBtn = document.getElementById('addOutageEmailBtn');
const addMaintenanceEmailBtn = document.getElementById('addMaintenanceEmailBtn');
const emailPanel = document.getElementById('emailPanel');
const maintenanceEmailPanel = document.getElementById('maintenanceEmailPanel');
const outageEmails = document.getElementById('outageEmails');
const maintenanceEmails = document.getElementById('maintenanceEmails');
const createOutageEmailBtn = document.getElementById('createOutageEmailBtn');
const createMaintenanceEmailBtn = document.getElementById('createMaintenanceEmailBtn');
const emailType = document.getElementById('emailType');
const allOutageEmails = outageEmails.querySelectorAll('span');

window.addEventListener('click', (ev) => {
    switch(ev.target) {
        case maintenanceBtn: {
            showElements(outageWrapper);
            hideElements(maintenanceWrapper);
            main[0].style.backgroundImage = 'url(https://t3.ftcdn.net/jpg/04/25/12/60/360_F_425126020_j8IEXIT4eKUzymu8RLCgnk4ZrTR6YFQ8.jpg)';
        }
        break;
        case outageBtn: {
            showElements(maintenanceWrapper);
            hideElements(outageWrapper);
            main[0].style.backgroundImage = 'url(https://i2-prod.dailystar.co.uk/incoming/article20747051.ece/ALTERNATES/s615/0_Fortnite-Down.jpg)';
        }
        break;
        case addOutageEmailBtn: {
            toggleDisplay(emailPanel);
        }
        break;
        case createOutageEmailBtn: {
            const newEmail = document.createElement('span');
            newEmail.innerText = emailType.value;
            newEmail.addEventListener('click', (ev) => ev.target.remove())
            outageEmails.append(newEmail);
            hideElements(emailPanel);
        }
        break;
        case addMaintenanceEmailBtn: {
            console.log('asd')
            toggleDisplay(maintenanceEmailPanel);
        }
        break;
        case createMaintenanceEmailBtn: {
            const newEmail = document.createElement('span');
            newEmail.innerText = emailType.value;
            newEmail.addEventListener('click', (ev) => ev.target.remove())
            maintenanceEmails.append(newEmail);
            hideElements(maintenanceEmailPanel);
        }
        break;
    }
})

// allOutageEmails.forEach(email => {
//     email.addEventListener('click', (ev) => {
//         ev.target.remove();
//         console.log(ev.target);
//         console.log(email);
//     })
// })

function showElements(...elements) {
    [...elements].forEach(el => el.style.display = 'flex');
}

function hideElements(...elements) {
    [...elements].forEach(el => el.style.display = 'none');
}

function toggleDisplay(...elements) {
    console.log([...elements][0]);
    [...elements].forEach(el => el.style.display === 'flex' ? el.style.display = 'none' : el.style.display = 'flex');
}
