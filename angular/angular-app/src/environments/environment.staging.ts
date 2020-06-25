export const environment = {
  production: true,
  // TODO: replace with domain or IP address
  apiUrl: 'http://<YOUR-DOMAIN-OR-IP-ADDRESS>/api',
  auth: {
    clientID: 'wPX5dnX2tatdjT3RHjaVRXjdERpfO3Kh',
    domain: 'dev-b9oeg39l.eu.auth0.com',
    audience: 'http://djangoangularapi',
    auth0RedirectUri: 'http://<YOUR-DOMAIN-OR-IP-ADDRESS>/callback',
    auth0ReturnTo: 'http://<YOUR-DOMAIN-OR-IP-ADDRESS>',
    scope: 'openid profile'
  }
};
