import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBSCgStdsGcbGHHhNqwiHXZTdF5vfdN6P4',
  authDomain: 'crown-clothing-db-850a2.firebaseapp.com',
  projectId: 'crown-clothing-db-850a2',
  storageBucket: 'crown-clothing-db-850a2.appspot.com',
  messagingSenderId: '834723752691',
  appId: '1:834723752691:web:889538b3ba8f3620a0e586',
  measurementId: 'G-23QSVWJCCR',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  return userRef;
};

// Unused, should this function be on the front end?
// Used to batch post shop collections to firestore db
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      // encodeURI will remove spaces and illegal JavaScript characters
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const getUserCart = async (cartItemsByIdAndQuantity) => {
  try {
    const collectionRef = firestore.collection('collections');
    const snapShot = await collectionRef.get();

    const collectionsDataArray = snapShot.docs.reduce(
      (acc, doc) => [...acc, ...doc.data().items],
      []
    );

    return cartItemsByIdAndQuantity.map((cartItem) => {
      return {
        quantity: cartItem.quantity,
        ...collectionsDataArray.find(
          (collectionItem) => cartItem.id === collectionItem.id
        ),
      };
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateFirestoreCart = async (userId, cartItems) => {
  const cartItemsByIdAndQuantity = cartItems.map((cartItem) => ({
    id: cartItem.id,
    quantity: cartItem.quantity,
  }));

  try {
    const userRef = firestore.doc(`users/${userId}`);
    await userRef.update({
      cartItems: cartItemsByIdAndQuantity,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export default firebase;
