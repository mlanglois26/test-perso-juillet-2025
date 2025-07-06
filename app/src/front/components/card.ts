export function card(log: any) {
  return `
    <div class="bg-stone-300 h-auto w-1/2 mx-auto mt-8 p-3 text-white space-y-2 rounded">
      <div class="bg-violet-900 p-2 rounded text-white">
        <p>Date: ${log.timestamp}</p>
        <p>Message: ${log.message}</p>
        <p>Service: ${log.service}</p>
        <p>Level: ${log.level}</p>
      </div>
    </div>
  `;
}
