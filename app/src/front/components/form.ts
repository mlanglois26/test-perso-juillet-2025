export function getPostForm() {
  return `
        <form id="log-form" class="h-auto w-1/2 mx-auto mt-8">
          <div class="flex flex-wrap -mx-3 mb-6 justify-center">
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-stone-100 text-xs font-semibold mb-2">
                Message
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" type="text">
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6 justify-center">
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-stone-100 text-xs font-semibold mb-2">
                Service
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="service" type="text">
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6 justify-center">
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-stone-100 text-xs font-semibold mb-2">
                Level
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="level">
                  <option>INFO</option>
                  <option>WARNING</option>
                  <option>ERROR</option>
                  <option>DEBUG</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6 justify-center">
            <button id="submit-btn" class="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              Submit
            </button>
          </div>
        </form>
  `;
}
