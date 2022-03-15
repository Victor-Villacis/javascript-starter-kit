export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:8081/' : '/';
}

//get parameter name from url
//from stackoverflow - https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript'
//this allows us to togglle between mock and prod api in the url.
//example: http://localhost:8081/?useMockApi=true
function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&'); // eslint-disable-line no-useless-escape
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
