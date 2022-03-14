// pollyfill
import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccessresponse, error);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE',
  });

  return fetch(request).then(onSuccessresponse, error);
}

function onSuccessresponse(response) {
  return response.json();
}

function error() {
  throw error;
}
