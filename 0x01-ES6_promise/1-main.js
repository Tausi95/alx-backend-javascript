// 1-main.js

import getFullResponseFromAPI from './1-promise.js';

console.log(getFullResponseFromAPI(true));  // Promise { { status: 200, body: 'Success' } }
console.log(getFullResponseFromAPI(false)); // Promise { <rejected> Error: The fake API is not working currently }

