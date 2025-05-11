const services = [
    { name: 'JetSki Tour', img: 'img/tour.png', price: 100 },
    { name: 'Rental', img: 'img/rental.png', price: 70 },
    { name: 'Private Event', img: 'img/event.png', price: 200 }
];
let current = 0;

const imgEl = document.getElementById('service-image');
const nameEl = document.getElementById('service-name');
const priceEl = document.getElementById('service-price');
const buyBtn = document.getElementById('buy');
const msgEl = document.getElementById('purchase-message');

function updateService() {
    const s = services[current];
    imgEl.src = s.img;
    imgEl.alt = s.name;
    nameEl.textContent = s.name;
    priceEl.textContent = s.price;
    // al cambiar de servicio, restauramos el buy-button y ocultamos el mensaje
    buyBtn.style.display = 'inline-block';
    msgEl.style.display = 'none';
}

document.getElementById('prev').addEventListener('click', () => {
    current = (current - 1 + services.length) % services.length;
    updateService();
});
document.getElementById('next').addEventListener('click', () => {
    current = (current + 1) % services.length;
    updateService();
});

buyBtn.addEventListener('click', () => {
    buyBtn.style.display = 'none';
    msgEl.innerHTML = 'Visit our <a href="contact.html">contact page</a> and complete your booking.';
    msgEl.style.display = 'block';
});

updateService();

// Elementos del DOM
const form = document.getElementById('review-form');
const container = document.getElementById('reviews-container');

// Manejo del evento de envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el recargo de la página

    // Captura de datos
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    // Creación del contenedor de la valoración
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');
    reviewDiv.innerHTML = `<strong>${username} dice:</strong><p>${comment}</p>`;

    // Agregar al contenedor principal
    container.appendChild(reviewDiv);

    // Limpiar formulario
    form.reset();
});