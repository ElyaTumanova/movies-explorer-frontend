// export function checkResponse(res) {
//   console.log (res)
//   if (res.ok) {
//     return res.json();
//   }
//   // return Promise.reject(`Ошибка ${res.status}`);
//   // return Promise.reject(res.json());
//   return res.json().then((e)=>console.log(Object.values(e).toString()));
//   // return res.json();
// }

// export function checkResponse(res) {
//   console.log(res); // если всё хорошо, получили ответ
//   return res.json();
// }

