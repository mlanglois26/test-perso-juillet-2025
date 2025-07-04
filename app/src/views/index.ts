import '../style.css';
import { getPostForm } from './post.ts';
import { printLogs } from './get.ts'

document.body.innerHTML = `

    <div class="h-full w-full bg-violet-900 flex justify-center items-end">
      <div class="h-4/5 w-3/5">
        <p class="uppercase tracking-wide text-stone-100 hover:text-stone-300 text-3xl font-semibold text-center">
          GET A LOG
        </p>
        ${printLogs()}

        <p class="uppercase tracking-wide text-stone-100 hover:text-stone-300 text-3xl font-semibold text-center">
          POST A LOG
        </p>

         ${getPostForm()}

      </div>
    </div>

`;
