export function searchLogs() {
  return `
    <div class="h-auto w-2/5 mx-auto text-stone-700 p-4 space-y-4 rounded">
      <form id="searchForm" class="flex flex-col space-y-3">
        <input
          id="searchInput"
          class="appearance-none bg-violet-900 border-4 border-solid border-stone-300 rounded w-full text-stone-100 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-violet-700"
          type="text"
          autocomplete="off"
          placeholder="Search a log"
        >

        <input
          id="serviceFilter"
          class="appearance-none bg-violet-900 border-4 border-solid border-stone-300 rounded w-full text-stone-100 py-2 px-3 "
          type="text"
          autocomplete="off"
          placeholder="Search a service"
        >

        <select
          id="levelFilter"
          class="w-full bg-violet-900 border-4 border-solid border-stone-300 text-stone-300 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-stone-400"
        >
          <option value="">Select a level</option>
          <option value="info">Info</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
          <option value="debug">Debug</option>
        </select>

        <div class="flex space-x-4 justify-center">
          <button
            class="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
            type="submit"
          >
            Search
          </button>

          <button
            id="resetBtn"
            class="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
            type="button"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  `;
}
