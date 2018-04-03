'use strict';

export const fetchCurrentUser = async () => {
  const myInit = { 
    method: 'GET',
    credentials: 'include'
  };
  let response = await fetch('http://localhost:5150/current_user', myInit);
  response =  await response;
  if (response.status === 204) {
    return false;
  }
  return response.json();
}

export const doLoginGoogle = async () => {
  const myInit = { 
    method: 'GET',
    mode: "no-cors",
    credentials: 'include'
  };
  await fetch('http://localhost:5150/auth/google', myInit);
  return;
}

export const doLogoutGoogle = async () => {
  const myInit = { 
    method: 'GET',
    credentials: 'include'
  };
  await fetch('http://localhost:5150/logout', myInit);
  return;
}
