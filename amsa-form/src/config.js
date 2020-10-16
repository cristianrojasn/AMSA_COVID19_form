let apiFire = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DATA_BASE_URL,
    projectId: process.env.VUE_APP_PORJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
    //measurementId: process.env.VUE_APP_MESAUREMENT_ID,
  };
  
  export default apiFire;