var app_fireBase = {};
(function(){
    var firebaseConfig = {
        apiKey: "AIzaSyDJhz38cfXmkRsC4GXBcwUSTaJTQyLQBxg",
        authDomain: "fest-assignment.firebaseapp.com",
        databaseURL: "https://fest-assignment.firebaseio.com",
        projectId: "fest-assignment",
        storageBucket: "fest-assignment.appspot.com",
        messagingSenderId: "112395416138",
        appId: "1:112395416138:web:d73dd337a044612e162cb3"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      app_fireBase = firebase;
})()