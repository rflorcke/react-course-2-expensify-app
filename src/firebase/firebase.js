import * as firebase from "firebase";
import { setTimeout } from "timers";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").push({
//     description: "Rent",
//     note: "",
//     amount: 160000,
//     createdAt: 1532986396487
// });

// database.ref("expenses")
//     .once("value")
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     })
//     .catch((e) => {
//         console.log("error: ", e);
//     });

// const subscription = database.ref("expenses").on("value", (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log("expenses array:", expenses);
// }, (e) => {
//     console.log("There was an error: ", e);
// });

// const firebaseNotes = {
//     notes: {
//         sdfoi: {
//             title: "First Note!",
//             body: "This is my note"
//         },
//         sadsadoi: {
//             title: "Another Note!",
//             body: "This is my other note"
//         }
//     }
// }

// const notes = [{
//     id: 12,
//     title: "First Note!",
//     body: "This is my note"
// },{
//     id: "761ase",
//     title: "Another Note!",
//     body: "This is my other note"
// }];

// database.ref("notes").set(notes);

// const subscription = database.ref().on("value", (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company} in ${data.location.city}`);
// }, (e) => {
//     console.log("Something went wrong: ", e);
// });

// const onValueChange = database.ref().on("value", (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log("Error with data fetching", e);
// });

// setTimeout(() => {
//     database.ref("age").set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref("age").set(33);
// }, 10500);

// database.ref("location")
//     .once("value")
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {

//     });

// database.ref().set({
//     name: "Ryan Florcke",
//     age: 38,
//     stressLevel: 6,
//     job: {
//         title: "Software Developer",
//         company: "Lixar"
//     },
//     location: {
//         city: "Ottawa",
//         country: "Canada"
//     }
// }).then(() => {
//     console.log("Data is saved!");
// }).catch((error) => {
//     console.log("this failed.", error);
// });

// database.ref().update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Hull"
// });

// database.ref().remove().then(() => {
//     console.log("data removed");
// }).catch((error) => {
//     console.log("failed to remove data");
// });