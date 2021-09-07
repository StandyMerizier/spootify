export default {
  api: {
      authUrl: 'https://accounts.spotify.com/authorize?client_id=<CLIENT_ID>&response_type=token&redirect_uri=http:%2F%2Flocalhost:3000',
      baseUrl: 'https://api.spotify.com/v1',
      // authUrl: 'https://accounts.spotify.com/api/token',
      clientId: '',
      clientSecret: '',
      scopes: [
        "user-read-currently-playing",
        "user-read-playback-state",
      ]
  }
}
