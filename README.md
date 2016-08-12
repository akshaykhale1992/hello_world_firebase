# Hello World Firebase Realtime Database
The **Firebase Realtime Database** is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. When you build cross-platform apps with our iOS, Android, and JavaScript SDKs, all of your clients share one Realtime Database instance and automatically receive updates with the newest data.

### System Requirements
- [Node JS]

### How to run the Project
- First Go to [Firebase Console] and Create New Project.
- After Creating the project, in project click on *settings icon* besides project Name in left sidebar and *select Permissions*.
- On Permissions Page Click on *Service accounts* in left sidebar then click on *Create Service Account*
- In the popup window enter your service account name and choose Account Role and select *Furnish a new private key* and after that select *JSON* and click *Create*(Leave Enable Google App Domain-wide Delegation Unchecked).
- When you click create it will download a JSON file with your Account Credentials, just save the file Anywhere in your System.
- Next step is to Create a Database in your Firebase Console for which Go to [Firebase Console] and click on Database in left-sidebar. After that just create a new Database Object with Name *user_data* with some dummy value.
- Now your Firebase Database project is setup now simply clone this repository or download it as zip in any directory in your system.
- After downloading this repository just change *<path to Firebase Credentials Json File>* with the JSON Credentials file URL(For starters just copy the credentials file in Same folder and in index.js file just add the credentials File Name).
- Next step is to change the *<Firebase Database URL>* in index.js with actual Firebase Database URL, you will be able to find this URL in [Firebase Console] in Database Tab, The URL will be like *https://<some-text>.firebaseio.com/*.
- The final step is to do
```
npm install firebase
```
After Executing above command NPM will install necessary packages required for Firebase.
- Finally to run and test project execute
```
node index.js
```
### What the project actually does?
The project loads the Data from cloud based Firebase Database.
The project also demonstrates how to Write and Read data from a Firebase Data Object.

[Firebase Console]: https://console.firebase.google.com/
[Node JS]: https://nodejs.org/en/