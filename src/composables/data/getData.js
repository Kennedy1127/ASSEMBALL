import { auth, db } from "@/firebase/config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getCountFromServer,
} from "firebase/firestore";

const getData = () => {
  const getUser = async () => {
    try {
      const docRef = doc(db, "MEMBERS", auth.currentUser.uid);
      const res = await getDoc(docRef);

      return res.data();
    } catch (err) {
      console.error("Something went wrong!");
      console.error(err);
    }
  };

  const getDocument = async (target, id, condition = null) => {
    try {
      const docRef = doc(db, target, id);
      const res = await getDoc(docRef);

      return res.data();
    } catch (err) {
      console.error("Something went wrong!");
      console.error(err);
    }
  };

  const getDocuments = async (target, condition = null) => {
    try {
      const colRef = collection(db, target);
      const res = await getDocs(colRef);

      return res.docs.map((doc) => doc.data());
    } catch (err) {
      console.error("Something went wrong!");
      console.error(err);
    }
  };

  const getSubCollectionDocument = async (target) => {
    try {
      const docRef = doc(
        db,
        target.collectionName,
        target.documentId,
        target.subCollectionName,
        target.subDocumentId
      );
      const res = await getDoc(docRef);

      return res.data();
    } catch (err) {
      console.error("Something went wrong!");
      console.error(err);
    }
  };

  const getSubCollectionDocuments = async (target) => {
    try {
      const docRef = collection(
        db,
        target.collectionName,
        target.documentId,
        target.subCollectionName
      );
      const res = await getDocs(docRef);

      return res.docs.map((doc) => doc.data());
    } catch (err) {
      console.error("Something went wrong!");
      console.error(err);
    }
  };

  const getCollectionCount = async (target) => {
    try {
      const colRef = collection(db, target);
      const res = await getCountFromServer(colRef);
      return res.data().count;
    } catch (err) {
      console.error("Something went wrong!");
      console.error(err);
    }
  };

  return {
    getUser,
    getDocument,
    getDocuments,
    getSubCollectionDocument,
    getSubCollectionDocuments,
    getCollectionCount,
  };
};

export default getData;
