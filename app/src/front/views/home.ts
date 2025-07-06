import '../../style.css';
import { getPostForm } from '../components/form.ts';
import { setupFormListener } from '../requests/requests.ts';
import { togglePostForm } from '../requests/toggles.ts'
import { searchLogs } from '../components/searchbar.ts'
import { setupSearchBarListener } from '../requests/requests.ts';
import { displayLogs } from '../requests/requests.ts'

export function renderHome() {

  document.body.innerHTML = `

    <div class="min-h-full w-full bg-violet-900 flex justify-center">

      <div class="h-auto w-3/5 mt-6 pt-6">

        <p id="toggle-form" class="tracking-wide text-stone-100 hover:text-stone-400 cursor-pointer text-3xl font-semibold text-center">
          POST A LOG
        </p>

        <div id="form-container" class="hidden mt-6">
          ${getPostForm()}
        </div>

        <p class="tracking-wide text-stone-100 text-3xl font-semibold text-center mt-6 pt-6">
          LAST 20 LOGS
        </p>
        <div id="logs-search">${searchLogs()}</div>
        <div id="logs-container"></div>
      </div>

    </div>
  `;

  togglePostForm();
  setupFormListener();
  setupSearchBarListener();
  displayLogs();
}


document.addEventListener('DOMContentLoaded', () => {
  renderHome();
});
