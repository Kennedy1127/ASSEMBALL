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

  const getSubCollection = async () => {
    try {
    } catch (err) {
      console.error("Something went wrong!");
      // console.error(err);
    }
  };

  return { getUser, getDocument, getDocuments, getSubCollection };
};

export default getData;
