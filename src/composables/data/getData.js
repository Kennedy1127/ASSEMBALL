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
import useData from "@/composables/data/useData";

const { setData } = useData();

const getData = () => {
  const getUser = async () => {
    try {
      const docRef = doc(db, "MEMBERS", auth.currentUser.uid);
      const res = await getDoc(docRef);
      if (!res.data()) {
        const userData = {
          id: auth.currentUser.uid,
          firstname: "使用者",
          lastname: "第三方登入",
          username: auth.currentUser.displayName,
          email: auth.currentUser.email,
          exp: 0,
          area: "台灣",
          pic: null,
          team_id: null,
          access: true,
          violations: 0,
        };

        await setData("MEMBERS", userData);
        return userData;
      }

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
    orders = [],
    desc = false
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
        desc === true
          ? [...orders.map((order) => orderBy(order, "desc"))][0]
          : [...orders.map((order) => orderBy(order))][0]
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
