import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';


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


// Collection and doc
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })

    await batch.commit()
    console.log('done')
}
export const getCategoriesAndDocuments = async () => {
        const collectionRef = collection(db, 'categories')
        const q = query(collectionRef)
        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map((docSnapshot) => docSnapshot.data())

        // const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        //     const {title, items} = docSnapshot.data()
        //     acc[title.toLowerCase()] = items
        //     return acc
        // }, {})
        // return categoryMap
}

// Doc
export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return

    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)

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


// Sign Out
export const signOutUser = async () => await signOut(auth)


// State Listener
export const onAuthStateChangedListener = (cb) => onAuthStateChanged(auth, cb)