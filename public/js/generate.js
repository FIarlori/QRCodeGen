const form = document.getElementById('form');
const qrContainer = document.getElementById('qrContainer');
const generatedLink = document.getElementById('generatedLink');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Generar ID único para el perfil
    const profileId = Date.now().toString();
    
    // Crear objeto con los datos del formulario
    const profileData = {
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        company: document.getElementById('company').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        website: document.getElementById('website').value
    };

    // Guardar en localStorage
    const profiles = JSON.parse(localStorage.getItem('profiles') || '{}');
    profiles[profileId] = profileData;
    localStorage.setItem('profiles', JSON.stringify(profiles));

    // Obtener la URL base del sitio
    const baseUrl = window.location.origin + window.location.pathname.replace('index.html', '');
    const profileUrl = `${baseUrl}profile.html?id=${profileId}`;

    // Generar QR
    qrContainer.innerHTML = '';
    new QRCode(qrContainer, {
        text: profileUrl,
        width: 256,
        height: 256
    });

    // Mostrar enlace generado
    generatedLink.innerHTML = `<p>Link directo: <a href="${profileUrl}" target="_blank">${profileUrl}</a></p>`;
});