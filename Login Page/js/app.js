// $(document).ready(function() {});
AOS.init();


googleSignIn=()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {

      window.location.replace("/Portfolio Page/index.html");

      }).catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
      });
}



twitterSignIn=()=>{
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {


        // If it works redirect to the next page!!
        window.location.replace("/Portfolio Page/index.html");



      }).catch(function(error) {
        // Handle Errors here.


        // var errorCode = error.code;
        // var errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
      });
}


facebookSignIn=()=>{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {


      window.location.replace("/Portfolio Page/index.html");
      // If it works redirect to the next page!!



      }).catch(function(error) {
        // Handle Errors here.


        // var errorCode = error.code;
        // var errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
      });
}


signUp=()=>{

    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    if(email == "" || password == "") {
        document.getElementById('alert').style.display = "initial";
    } else {
        document.getElementById('alert').style.display = "none";
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => {
            window.location.replace("/Portfolio Page/index.html");
          })
          .catch((error) => {
            document.getElementById('alert').style.display = "initial";

            // var errorCode = error.code;
            // var errorMessage = error.message;
            // // ..
          });
            
    }
    

    
}

signIn=()=>{
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    if(email == "" || password == "") {
        document.getElementById('alert').style.display = "initial";
    } else {
        document.getElementById('alert').style.display = "none";

        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((user) => {
            window.location.replace("/Portfolio Page/index.html");
          })
          .catch((error) => {
            document.getElementById('alert').style.display = "initial";
            // var errorCode = error.code;
            // var errorMessage = error.message;
          });
    }

    
}

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


signOut=()=>{
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}

document.getElementById('signInOrUp').addEventListener('click', signInOrUp);

function signInOrUp(){ 
  if(this.innerHTML == 'Sign Up') {
    this.innerHTML = 'Sign In';
    document.getElementById('accountCreate').innerHTML = "Create Account";
    document.getElementById('mainButton').innerHTML = "Sign Up";
    document.getElementById('mainButton').setAttribute('onclick','signUp()');

  } else {
    this.innerHTML = 'Sign Up';
    document.getElementById('accountCreate').innerHTML = "Login To Your Account";
    document.getElementById('mainButton').innerHTML = "Sign In";
    document.getElementById('mainButton').setAttribute('onclick','signIn()');
  }
  
 }