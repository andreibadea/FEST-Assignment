// $(document).ready(function() {});
AOS.init();


googleSignIn=()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {


        // If it works redirect to the next page!!



      }).catch(function(error) {
        // Handle Errors here.


        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
}



twitterSignIn=()=>{
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {


        // If it works redirect to the next page!!



      }).catch(function(error) {
        // Handle Errors here.


        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
}


facebookSignIn=()=>{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {


        // If it works redirect to the next page!!



      }).catch(function(error) {
        // Handle Errors here.


        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
}


signUp=()=>{

    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    if(email == "" || password == "") {
        document.getElementById('alert').style.display = "initial";
    } else {
        document.getElementById('alert').style.display = "none";
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            
            document.getElementById('alert').style.display = "initial";

            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
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

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            
            document.getElementById('alert').style.display = "initial";

            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
          });
    }

    
}


signOut=()=>{
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}