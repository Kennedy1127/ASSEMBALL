import { auth, db } from "@/firebase/config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getCountFromServer,
  where,
  query,
  orderBy,
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

  const getDocument = async (target, id) => {
    try {
      const docRef = doc(db, target, id);
      const res = await getDoc(docRef);
      return res.data();
    } catch (err) {
      console.error("Something went wrong!");
      console.error(err);
    }
  };

  const getDocuments = async (target, conditions = []) => {
    try {
      const docRef = collection(db, target);
      const q = query(
        docRef,
        ...conditions.map((condition) =>
          where(condition[0], condition[1], condition[2])
        )
      );
      const res = await getDocs(q);
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

  const getSubCollectionDocuments = async (
    target,
    conditions = [],
    orders = []
  ) => {
    try {
      const docRef = collection(
        db,
        target.collectionName,
        target.documentId,
        target.subCollectionName
      );

      const q = query(
        docRef,
        ...conditions.map((condition) => {
          return where(condition[0], condition[1], condition[2]);
        }),
        ...orders.map((order) => orderBy(order))
      );

      const res = await getDocs(q);
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
