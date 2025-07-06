export function card(log: any) {

  const dateObj = new Date(log.timestamp);
  const date = dateObj.toISOString().slice(0, 10);
  const time = dateObj.toTimeString().slice(0, 8);

  return `
    <div class="bg-stone-300 h-auto w-1/2 mx-auto mt-8 p-3 text-white space-y-2 rounded">
      <div class="bg-violet-900 p-2 rounded text-white">
        <p>Date: ${date} Heure: ${time}</p>
        <p>Message: ${log.message}</p>
        <p>Service: ${log.service}</p>
        <p>Level: ${log.level}</p>
      </div>
    </div>
  `;
}

