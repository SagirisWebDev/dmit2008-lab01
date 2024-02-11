import { toElement } from "../utils/toElement"

function markupTemplate(data) {
  console.log(data);
  const template = `
  <section class="flex flex-col bg-white p-5 m-3 border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:border-t-blue-500 dark:shadow-slate-700/[.7]">
    <p class="text-white">Category: ${data.category}</p>
    <p class="text-white">Status: ${data.status}</p>
    <p class="text-white">ToDo: ${data.todos}</p>
    <p class="text-white">Start: ${data.start}</p>
    <p class="text-white">Finish: ${data.finish}</p>
  </section>
  `;

  return toElement(template);
}

export { markupTemplate };