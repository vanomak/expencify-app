import * as firebase from 'firebase';
// import moment from "moment/moment";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const db = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, db as default};

// db.ref().set({});

// const expences = [
//     {
//         description: 'Gum',
//         note: '',
//         amount: 770,
//         createdAt: moment(0).valueOf()
//     },
//     {
//         description: 'Rent',
//         note: '',
//         amount: 100,
//         createdAt: moment(0).subtract(2, 'days').valueOf()
//     },
//     {
//         description: 'Credit card',
//         note: '',
//         amount: 10000,
//         createdAt: moment(0).add(2, 'days').valueOf()
//     }
// ];

// expences.map((el) => {
//     db.ref('expences').push(el);
// });

// db.ref().on('value', (snap) => {
//     const val = snap.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });
//
// db.ref('expences')
//     .once('value')
//     .then((snapshot) => {
//         const expences = [];
//         snapshot.forEach((child) => {
//             expences.push({
//                 id: child.key,
//                 ...child.val()
//             })
//         });
//         console.log(expences)
//     })
//     .catch(() => {
//         console.log('fetch failed');
//     });

// db.ref('expences')
//     .on('value', (snapshot) => {
//         const expences = [];
//         snapshot.forEach((child) => {
//             expences.push({
//                 id: child.key,
//                 ...child.val()
//             })
//         });
//         console.log(expences)
//     });

// db.ref('expences').on('child_changed', (snap) => {
//     console.log(snap.key, snap.val());
// });

// const notes = [
//     {
//         id: 12,
//         title: 'First',
//         body: 'First body'
//     },
//     {
//         id: 12,
//         title: 'First',
//         body: 'First body'
//     }
// ];
// db.ref().set({
//     notes: notes
// }).then(() => {
//     console.log('Initial set done');
// }).catch(() => {
//     console.log('Initial set failed');
// });
//
// db.ref().set({
//     name: 'Ivan Makarov',
//     age: 39,
//     stressLevel: 6,
//     job: {
//         title:'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Khabarovsk',
//         country: 'Russia'
//     }
// }).then(() => {
//     console.log('Initial set done');
// }).catch(() => {
//     console.log('Initial set failed');
// });

// db.ref().set('This is a string');
// db.ref('age').set(27);
// db.ref('location/city').set('Moscow');
// db.ref('attributes').set({
//     height: 184,
//     weight: 55
// }).then(() => {
//     console.log('attributes set done');
// }).catch(() => {
//     console.log('attributes set failed');
// });;

// db.ref('isSingle').remove()
//     .then(() => {
//        console.log('removed');
//     }).catch(() => {
//        console.log('remove failed');
//     });

// db.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });