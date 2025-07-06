// export function printLogs() {
//   return `
//     <div class=" bg-red-500 h-auto w-1/2 mx-auto mt-8">
//       coucou
//     </div>
//   `
// }

export async function printLogs() {
  const response = await fetch('http://localhost:8000/api/logs');
  const logs = await response.json();

  let html = `
    <div class="bg-stone-300 h-auto w-1/2 mx-auto mt-8 p-4 text-white space-y-4 rounded">
  `;

  if (Array.isArray(logs)) {
    logs.forEach(log => {
      html += `
        <div class="bg-violet-900 p-2 rounded">
          <p>Message: ${log.message}</p>
          <p>Service: ${log.service}</p>
          <p>Level: ${log.level}</p>
        </div>
      `;
    });
  } else {
    html += `<p>Erreur de récupération: ${logs.error || 'Inconnue'}</p>`;
  }

  html += `</div>`;

  return html;
}
