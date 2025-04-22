// public/js/generate.js
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const profile = {
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        company: document.getElementById('company').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        website: document.getElementById('website').value,
    };

    const id = crypto.randomUUID();
    const profiles = JSON.parse(localStorage.getItem('profiles') || '{}');
    profiles[id] = profile;
    localStorage.setItem('profiles', JSON.stringify(profiles));

    // Generar QR con link al perfil
    const profileUrl = `${window.location.origin}/profile.html?id=${id}`;
    const qrContainer = document.getElementById('qrContainer');
    qrContainer.innerHTML = '';
    new QRCode(qrContainer, profileUrl);

    // Mostrar link generado
    document.getElementById('generatedLink').innerHTML = `
        <p>Compartí este enlace:</p>
        <a href="${profileUrl}" target="_blank">${profileUrl}</a>
    `;
});
