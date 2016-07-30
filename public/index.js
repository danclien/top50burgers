// Login if not already logged in
// List of burgers with checklist
// Save when item is checked/unchecked


// Initialize Firebase
var config = {
  apiKey: "AIzaSyBYfCsMtPApH2AWLZ8cRt2qJOpcPdPGvKQ",
  authDomain: "texas-monthly-top-50-burgers.firebaseapp.com",
  databaseURL: "https://texas-monthly-top-50-burgers.firebaseio.com",
  storageBucket: "texas-monthly-top-50-burgers.appspot.com",
};
firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();
var user = firebase.auth().currentUser;


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log("User", user);


    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/burgers/').once('value').then(function(snapshot) {
      console.log(snapshot.val());
      //var username = snapshot.val().username;
      // ...
    });

  } else {
    console.log("Not signed in!")
    // No user is signed in.
    //
  }
});

if (user) {
  // User is signed in.
} else {
  // No user is signed in.
}
//https://texas-monthly-top-50-burgers.firebaseio.com/

firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
  console.log(user);
}).catch(function(error) {
  console.log("A");
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

function login() {
  firebase.auth().signInWithRedirect(provider);
}
