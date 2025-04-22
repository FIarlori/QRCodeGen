const params = new URLSearchParams(window.location.search);
const id = params.get('id'); // debe coincidir con generate.js
const profiles = JSON.parse(localStorage.getItem('profiles') || '{}');
const user = profiles[id];

if (!user) {
  document.getElementById('profileCard').textContent = 'Usuario no encontrado.';
} else {
  document.getElementById('profileCard').innerHTML = `
    <h1>${user.name}</h1>
    <p>${user.role}</p>
    <p>${user.company}</p>
    <p>${user.phone}</p>
    <p>${user.email}</p>
    <a href="${user.website}" target="_blank">${user.website}</a>
  `;
}
