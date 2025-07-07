import axios from 'axios';
import { card } from '../components/card.ts';

const API_URL = (import.meta as any).env.VITE_BACK_URL;

export function setupFormListener() {

  const form = document.getElementById('log-form') as HTMLFormElement;
  if (!form)
    return;

  const messageInput = document.getElementById('message') as HTMLInputElement;
  const serviceInput = document.getElementById('service') as HTMLInputElement;

  let messageErrorDiv = document.createElement('div');
  messageErrorDiv.classList.add('text-red-400', 'mt-1', 'text-sm');
  messageInput.parentElement?.appendChild(messageErrorDiv);

  let serviceErrorDiv = document.createElement('div');
  serviceErrorDiv.classList.add('text-red-400', 'mt-1', 'text-sm');
  serviceInput.parentElement?.appendChild(serviceErrorDiv);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const message = messageInput.value.trim();
    const service = serviceInput.value.trim();

    let hasError = false;

    if (message.length < 10) {
      messageErrorDiv.textContent = 'Message length must be at least 10 characters.';
      hasError = true;
    } else {
      messageErrorDiv.textContent = '';
    }

    if (service.length < 3) {
      serviceErrorDiv.textContent = 'Service name must be at least 3 characters.';
      hasError = true;
    } else {
      serviceErrorDiv.textContent = '';
    }

    if (hasError)
      return;

    const levelInput = document.getElementById('level') as HTMLSelectElement;

    const data = {
      message,
      level: levelInput.value,
      service,
      timestamp: new Date().toISOString(),
    };

    try {
      await axios.post(`${API_URL}/api/log`, data);
      form.reset();
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
    const response = await axios.get(`${API_URL}/api/logs`);
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
export function renderLogs(logs: any) {

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
      const service = (document.getElementById("serviceFilter") as HTMLSelectElement).value.trim();
      const level = (document.getElementById("levelFilter") as HTMLSelectElement).value;

      if (!query && !service && !level)
        return;

      try {
        const params: any = {};
        if (query) params.query = query;
        if (service) params.service = service;
        if (level) params.level = level;

        const res = await axios.get(`${API_URL}/api/search`, { params });
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
      (document.getElementById("serviceFilter") as HTMLSelectElement).value = "";
      (document.getElementById("levelFilter") as HTMLSelectElement).value = "";
      displayLogs();
    });
  }
}
