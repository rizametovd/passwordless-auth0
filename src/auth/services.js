import auth0 from 'auth0-js';

export const webAuth = new auth0.WebAuth({
  domain: 'dev-pnutpjaaj07goxbn.us.auth0.com',
  clientID: 'eEXiyGpzfHeeKiD2TzUIYY8NJu5Rfs5V',
  responseType: 'token id_token',
  redirectUri: 'http://localhost:3000',
});

export const login = (email) => {
  webAuth.passwordlessStart(
    {
      connection: 'email',
      send: 'link',
      email: email,
    },
    function (err, res) {
      console.log('res:', res);
    }
  );
};
