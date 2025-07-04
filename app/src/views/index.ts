import '../style.css';
import { getPostForm } from './post.ts';
import { printLogs } from './get.ts'

document.body.innerHTML = `

    <div class="h-full w-full bg-violet-900 flex justify-center items-end">
      <div class="h-4/5 w-3/5">
        <p class="uppercase tracking-wide text-stone-100 hover:text-stone-400 cursor-pointer text-3xl font-semibold text-center">
          LAST LOGS
        </p>
      <div id="logs-container"></div>

        <!-- <p class="uppercase tracking-wide text-stone-100 hover:text-stone-400 cursor-pointer text-3xl font-semibold text-center">
          POST A LOG
        </p>

         ${getPostForm()} -->

      </div>
    </div>

`;

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
