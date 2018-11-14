import firebase from 'firebase/app';
import 'firebase/auth';
import {storeInstance} from "../../../redux";
import { firebaseLogin, firebaseLogOut } from "./actions";


class Firebase {
    private static firebaseInstance: Firebase = null;

    static getInstance() {
        if (!this.firebaseInstance) {
            this.firebaseInstance = new Firebase();
        }
        return this.firebaseInstance;
    }

    private constructor() {
        const firebaseConfig = {
            apiKey: 'AIzaSyCEBbYC-Z6BINUVAgYn-h9V2w7fke9UwfQ',
            authDomain: 'factory-dev.firebaseapp.com',
            databaseURL: 'https://factory-dev.firebaseio.com',
            projectId: 'factory-dev',
            storageBucket: 'factory-dev.appspot.com',
            messagingSenderId: '181863708134',
        };
        if (process['browser']) {
            firebase.initializeApp(firebaseConfig);
        } else {
            if (firebase.apps.length === 0) {
                firebase.initializeApp(firebaseConfig);
            }
        }
        this.authState();
    }

    get auth() {
        return firebase.auth();
    }

    private authState() {
        this.auth.onAuthStateChanged(user => {
            if (user) {
                storeInstance.dispatch(firebaseLogin(user))
            } else {
                storeInstance.dispatch(firebaseLogOut())
            }
        });
    }
}

export default Firebase;
