import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = firebase.initializeApp({
	apiKey: 'AIzaSyCgkFKNREZK_nUxpmNt2qJg1dOrxacC5Ks',
	authDomain: 'todoist-ca23e.firebaseapp.com',
	databaseURL: 'https://todoist-ca23e.firebaseio.com',
	projectId: 'todoist-ca23e',
	storageBucket: 'todoist-ca23e.appspot.com',
	messagingSenderId: '970407871691',
	appId: '1:970407871691:web:94876d63b679b7de43474e',
	measurementId: 'G-GC078BMQL1',
});
export { firebaseConfig as firebase };
