//Loading Firebase Package
var firebase = require("firebase");

/**
* Update your Firebase Project
* Credentials and Firebase Database
* URL
*/
firebase.initializeApp({
  serviceAccount: "<path to Firebase Credentials Json File>",
  databaseURL: "<Firebase Database URL>"
});

/**
* Loading Firebase Database and refering 
* to user_data Object from the Database
*/
var db = firebase.database();
var ref = db.ref("/user_data");

/**
* Setting Data Object Value
*/
ref.set([
{
	id:20,
	name:"Jane Doe",
	email:"jane@doe.com",
	website:"https://jane.foo.bar"
},
{
	id:21,
	name:"John doe",
	email:"john@doe.com",
	website:"https://foo.bar"
}
]);

/**
* Pushing New Value
* in the Database Object
*/
ref.push({
	id:22,
	name:"Jane Doe",
	email:"jane@doe.com",
	website:"https://jane.foo.bar"
});

/**
* Reading Value from
* Firebase Data Object
*/
ref.once("value", function(snapshot) {
  var data = snapshot.val();
  console.log(data);
});