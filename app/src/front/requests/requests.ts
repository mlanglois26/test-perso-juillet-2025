import { card } from '../components/card.ts';

export function setupFormListener() {

  const form = document.getElementById('log-form') as HTMLFormElement;

  if (!form)
    return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const messageInput = document.getElementById('message') as HTMLInputElement;
    const levelInput = document.getElementById('level') as HTMLSelectElement;
    const serviceInput = document.getElementById('service') as HTMLInputElement;

    const data = {
      message: messageInput.value.trim(),
      level: levelInput.value,
      service: serviceInput.value.trim(),
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch('http://localhost:8000/api/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log('Error: ', error);
    }
  });
}

export async function displayLogs() {

  const container = document.getElementById('logs-container');
  if (!container) return;

  try {
    const response = await fetch('http://localhost:8000/api/logs');
    const logs = await response.json();
    if (Array.isArray(logs)) {
      container.innerHTML = logs.map(card).join('');
    } else {
      container.innerHTML = `<p>Erreur de récupération</p>`;
    }
  } catch (error) {
    container.innerHTML = `<p>Erreur réseau</p>`;
    console.error(error);
  }
}


export function setupSearchBarListener() {

  const form = document.getElementById("searchForm");

  if (form) {
    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      const query = document.getElementById("searchInput").value.trim();
      if (!query) return;

      const res = await fetch(`http://localhost:8000/api/search?query=${encodeURIComponent(query)}`);
      const data = await res.json();

      const resultsDiv = document.getElementById("searchResults");
      resultsDiv.innerHTML = "";

      if (Array.isArray(data) && data.length > 0) {
        data.forEach(log => {
          resultsDiv.innerHTML += `
            <div class="bg-purple-800 text-white p-2 rounded">
              <p><strong>Message:</strong> ${log.message}</p>
              <p><strong>Service:</strong> ${log.service}</p>
              <p><strong>Level:</strong> ${log.level}</p>
              <p><strong>Date:</strong> ${log.timestamp}</p>
            </div>
          `;
        });
      } else {
        resultsDiv.innerHTML = "<p>Aucun résultat trouvé.</p>";
      }
    });
  };
}
