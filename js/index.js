/* 
           
			  
*/

import { getToDoData } from "./lib/firebase/api";
import { markupTemplate } from "./templates/toDoItem";

async function appInit() {
	const toDos = await getToDoData();
	console.log(toDos);
	const toDoItems = Object.values(toDos).map((obj) => {
		return markupTemplate(obj);
	})

	const container = document.createElement("div");
	toDoItems.forEach(item => {
		container.appendChild(item);
	})

	console.log(container);
	console.log(document.querySelector('body'));
	document.querySelector('body').append(container);
}

appInit();
