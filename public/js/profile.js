// public/js/profile.js
document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const profiles = JSON.parse(localStorage.getItem('profiles') || '{}');
  const profile = profiles[id];

  if (!profile) {
      document.body.innerHTML = '<p>Perfil no encontrado.</p>';
      return;
  }

  const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${profile.name}
TITLE:${profile.role}
ORG:${profile.company}
TEL;TYPE=CELL:${profile.phone}
EMAIL:${profile.email}
URL:${profile.website}
END:VCARD`;

  const blob = new Blob([vCard], { type: 'text/vcard' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'contacto.vcf';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);

  document.getElementById('displayName').textContent = profile.name;
  document.getElementById('displayRole').textContent = profile.role;
  document.getElementById('displayCompany').textContent = profile.company;
  document.getElementById('phoneButton').href = `tel:${profile.phone}`;
  document.getElementById('emailButton').href = `mailto:${profile.email}`;
  document.getElementById('websiteButton').href = profile.website;
});
