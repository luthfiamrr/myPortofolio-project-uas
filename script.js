//Mobile Menu
const sideMenu = document.querySelector('#sideMenu');

function openMenu() {
  sideMenu.style.transform = 'translateX(0rem)';
}

function closeMenu() {
  sideMenu.style.transform = 'translateX(16rem)';
}

//Form
document.getElementById('whatsapp-btn').addEventListener('click', function () {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  if (!name || !message) {
    alert('Please fill in all fields.');
    return;
  }

  const phoneNumber = '62859106968432';
  const text = `Hello, my name is ${name}. ${message}`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    text
  )}`;

  window.open(whatsappURL, '_blank');
});
