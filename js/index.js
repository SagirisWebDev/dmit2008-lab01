/* 
           
			  
*/

import { getToDoData } from "./lib/firebase/api";

async function appInit() {
	const toDos = await getToDoData();
	console.log(toDos);
	console.log('app init');
}

appInit();
