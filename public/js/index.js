const profiles = JSON.parse(localStorage.getItem('profiles') || '{}');
const container = document.getElementById('cardsContainer');

Object.entries(profiles).forEach(([id, profile]) => {
  const link = document.createElement('a');
  link.href = `profile.html?id=${id}`;
  link.textContent = profile.name;
  container.appendChild(link);
  container.appendChild(document.createElement('br'));
});