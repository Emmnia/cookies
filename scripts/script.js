document.getElementById('main-action-button').addEventListener('click', () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

const links = document.querySelectorAll('.menu-item > a');

for (let link of links) {
    link.addEventListener('click', () => {
        document.getElementById(link.getAttribute('data-link')).scrollIntoView({ behavior: 'smooth' });
    });
}

const buttons = document.querySelectorAll('.products-item .button');

for (let button of buttons) {
    button.addEventListener('click', () => {
        document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
    });
}

let prices = document.getElementsByClassName("products-item-price");

document.getElementById('change-currency').addEventListener('click', (e) => {
    let currentCurrency = e.target.innerText;
    let newCurrency = "$";
    let coefficient = 1;
    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 91.4;
    } else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 2.8;
    } else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
    e.target.innerText = newCurrency;
    for (let price of prices) {
        price.innerText = +(price.getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }
});

let cookie = document.getElementById('cookie');
let name = document.getElementById('name');
let phone = document.getElementById('phone');

document.getElementById('order-action').addEventListener('click', () => {
    let hasError = false;

    [cookie, name, phone].forEach(item => {
        if (!item.value) {
            item.style.borderColor = 'red';
            hasError = true;
        } else {
            item.style.borderColor = '';
        }
    });

    if (!hasError) {
        [cookie, name, phone].forEach(item => {
            item.value = '';
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
    }
});