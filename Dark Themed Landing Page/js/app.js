// $(document).ready(function() {});
AOS.init();

signOut=()=>{
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}