import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
import { writable } from 'svelte/store';

export const isLogged = writable(false)

const emptyAuth = {
  "accessToken": "",
  "userId": ""
}

export function logOut() {
  localStorage.setItem("auth", JSON.stringify(emptyAuth));
  isLogged.set(false)
  return true
}

export function getUserId() {
  const auth = localStorage.getItem("auth")
  if (auth) {
    return JSON.parse(auth)["userId"]
  }
  return null
}

export function getTokenFromLocalStorage() {
  const auth = localStorage.getItem("auth")
  if (auth) {
    return JSON.parse(auth)["accessToken"]
  }
  return null
}

export async function isLoggedIn() {
  if (!getTokenFromLocalStorage()) {
    return false
  }

  try {
    const resp = await fetch(
      PUBLIC_BACKEND_BASE_URL + '/auth',// 
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getTokenFromLocalStorage()
        },
      }
    );

    const res = await resp.json()
    if (resp.status == 200) {

      localStorage.setItem("auth", JSON.stringify({
        "accessToken": res.accessToken,
        "userId": res.record.id
      }));

      isLogged.set(true);
      return true
    }

    return false
  } catch {
    return false
  }
}

//Check credential 
export async function authenticateUser(email, password) {
    const resp = await fetch(
      PUBLIC_BACKEND_BASE_URL + '/auth',
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      }
    );
    const res = await resp.json();
    if (resp.status === 200) {
      localStorage.setItem("auth", JSON.stringify({
          'accessToken': res.accessToken,
          'userId': res.userId,
  
      }));
      //isLogged.login;
      isLogged.set(true);
      return {
          success: true,
          res: res
      }
    }
    return {
      success: false,
      res: res
    }
  }


// export async function authenticateUser(email, password) {
//   const resp = await fetch(
//     PUBLIC_BACKEND_BASE_URL + '/auth',
//     {
//       method: 'POST',
//       mode: 'cors',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         identity: email,
//         password
//       })
//     }
//   );

//   const res = await resp.json();
//   console.log(res.status)

//   if (resp.status == 200) {
//     localStorage.setItem("auth", JSON.stringify({
//       "accessToken": res.accessToken,
//       "userId": res.record.id
//     }));

//     isLogged.set(true); 
//     return {
//       success: true,
//       res: res
//     }
//   }

//   return {
//     success: false,
//     res: res
//   }
// }