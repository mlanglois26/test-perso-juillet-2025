import axios from 'axios';
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
      await axios.post('http://localhost:8000/api/log', data);
    } catch (error) {
      console.log('Error: ', error);
    }
  });
}

// les 20 derniers logs
export async function displayLogs() {

  const container = document.getElementById('logs-container');
  if (!container)
    return;

  try {
    const response = await axios.get('http://localhost:8000/api/logs');
    const logs = response.data;

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


// result de la query
export function renderLogs(logs) {

  const container = document.getElementById('logs-container');
  if (!container)
    return;

  if (Array.isArray(logs) && logs.length > 0) {
    container.innerHTML = logs.map(card).join('');
  } else {
    container.innerHTML = "<p class='text-center text-stone-100 text-1xl mt-6'>Aucun résultat trouvé.</p>";
  }
}

export function setupSearchBarListener() {

  const form = document.getElementById("searchForm");
  const resetBtn = document.getElementById("resetBtn");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const query = (document.getElementById("searchInput") as HTMLInputElement).value.trim();
      if (!query)
        return;

      try {
        const res = await axios.get(`http://localhost:8000/api/search`, {
          params: { query }
        });
        const data = res.data;

        renderLogs(data);
      } catch (error) {
        const container = document.getElementById("logs-container");
        if (container) {
          container.innerHTML = `<p>Erreur réseau</p>`;
        }
        console.error(error);
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      (document.getElementById("searchInput") as HTMLInputElement).value = "";
      displayLogs();
    });
  }
}
