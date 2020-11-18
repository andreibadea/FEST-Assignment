// AOS.init();

var mainApp = {};

(function() {
  var uid = null;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      uid = user.uid;
      // console.log(uid);
    } else {
      uid = null;
      window.location.replace("/Dark Themed Landing Page/index.html");
    }
  });
})()



function signOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      window.location.replace("/Dark Themed Landing Page/index.html");
      }).catch(function(error) {
        // An error happened.
      });
}