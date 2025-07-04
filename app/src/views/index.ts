import '../style.css';

document.body.innerHTML = `

    <div class="h-full w-full bg-violet-900 flex justify-center items-end">
      <div class="h-4/5 w-3/5">

        <p class="uppercase tracking-wide text-stone-100 text-3xl font-semibold text-center">
          POST A LOG
        </p>

        <form class="h-auto w-1/2 mx-auto mt-8">
          <div class="flex flex-wrap -mx-3 mb-6 flex justify-center">
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-stone-100 text-xs font-semibold mb-2" for="grid-message">
                Message
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text">
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6 flex justify-center">
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-stone-100 text-xs font-semibold mb-2" for="grid-service">
                Service
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text">
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6 flex justify-center">
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-stone-100 text-xs font-semibold mb-2" for="grid-level">
                Level
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>Info</option>
                  <option>Warning</option>
                  <option>Error</option>
                  <option>Debug</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>

`;
