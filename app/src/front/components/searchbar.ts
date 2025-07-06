export function searchLogs() {
  return `
    <div class="bg-stone-300 h-auto w-1/2 mx-auto mt-8 text-gray-700 p-2 space-y-4 rounded">
      <form id="searchForm" class="flex justify-center">
        <input id="searchInput" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search a log">
        <button class="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
          Search
        </button>
        <button id="resetBtn" class="ml-4 shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
          Reset
        </button>
      </form>
    </div>
  `;
}
