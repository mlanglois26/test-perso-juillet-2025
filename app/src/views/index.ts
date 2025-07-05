import '../style.css';
import { getPostForm } from './post.ts';
import { printLogs } from './get.ts';
import { searchLogs } from './search.ts'

document.body.innerHTML = `

    <div class="h-auto w-full bg-violet-900 flex justify-center items-end">
      <div class="h-auto w-3/5 mt-6 pt-6">
        <p class="uppercase tracking-wide text-stone-100 hover:text-stone-400 cursor-pointer text-3xl font-semibold text-center">
          LOGS
        </p>
      <div id="logs-search">${searchLogs()}</div>
      <div id="logs-container"></div>

        <!-- <p class="uppercase tracking-wide text-stone-100 hover:text-stone-400 cursor-pointer text-3xl font-semibold text-center">
          POST A LOG
        </p>

         ${getPostForm()} -->

      </div>
    </div>

`;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("searchForm");

  if (form) {
    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      const query = document.getElementById("searchInput").value.trim();
      if (!query) return;

      const res = await fetch(`http://localhost:8000/search?query=${encodeURIComponent(query)}`);
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
  }
});


printLogs().then(html => {
  const container = document.getElementById('logs-container');
  if (container) container.innerHTML = html;
});

// const form = document.getElementById('log-form') as HTMLFormElement;

// form.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const messageInput = document.getElementById('message') as HTMLInputElement;
//   const levelInput = document.getElementById('level') as HTMLSelectElement;
//   const serviceInput = document.getElementById('service') as HTMLInputElement;

//   const data = {
//     message: messageInput.value.trim(),
//     level: levelInput.value,
//     service: serviceInput.value.trim(),
//   };

//   console.log('data: ', data);

//   try {
//     const res = await fetch('http://localhost:8000/logs', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data),
//     });

//     // const result = await res.json();

//   } catch (error) {
//     console.log('Error: ', error);
//   }
// });
