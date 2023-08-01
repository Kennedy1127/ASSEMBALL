import { auth, db } from "@/firebase/config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const getData = () => {
  const getUser = async () => {
    try {
      const docRef = doc(db, "MEMBERS", auth.currentUser.uid);
      const res = await getDoc(docRef);

      return res.data();
    } catch (err) {
      console.error("Something went wrong!");
      // console.error(err);
    }
  };

  const getDocument = async (target, id) => {
    try {
      const docRef = doc(db, target, id);
      const res = await getDoc(docRef);

      return res.data();
    } catch (err) {
      console.error("Something went wrong!");
      // console.error(err);
    }
  };

  const getDocuments = async (target) => {
    try {
      const docRef = collection(db, target);
      const res = await getDocs(docRef);

      return res.docs.map((doc) => doc.data());
    } catch (err) {
      console.error("Something went wrong!");
      // console.error(err);
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
      // console.error(err);
    }
  };

  return {
    getUser,
    getDocument,
    getDocuments,
    getSubCollectionDocument,
    getSubCollectionDocuments,
  };
};

export default getData;
