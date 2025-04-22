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

    // Generate URL with all parameters directly
    const params = new URLSearchParams(profile);
    const profileUrl = `${window.location.origin}/QRCodeGen/profile.html?${params.toString()}`;
    
    // Generate QR code
    const qrContainer = document.getElementById('qrContainer');
    qrContainer.innerHTML = '';
    new QRCode(qrContainer, {
        text: profileUrl,
        width: 256,
        height: 256
    });

    // Show generated link
    document.getElementById('generatedLink').innerHTML = `
        <p>Compartí este enlace:</p>
        <a href="${profileUrl}" target="_blank">${profileUrl}</a>
    `;
});