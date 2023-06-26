import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


// Config
const firebaseConfig = {
    apiKey: "AIzaSyDMTDS08fzZdCNqOn54UFeeyO15S3svACo",
    authDomain: "tech-store-db.firebaseapp.com",
    projectId: "tech-store-db",
    storageBucket: "tech-store-db.appspot.com",
    messagingSenderId: "143087083110",
    appId: "1:143087083110:web:ba9d3784b9327ac0cd97a7"
}


// firebaseApp
const firebaseApp = initializeApp(firebaseConfig)


// Provider
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })


// Auth
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)


// Email user
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}


// Database
export const db = getFirestore()


// Doc
export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return

    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    // console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName, 
                email,
                createdAt,
                ...additionalInfo,
            })
        } catch (e) {
            console.log('Error creating the user:', e.message)
        }
    }

    return userDocRef
}