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

  const getCollection = async () => {
    try {
      const docsRef = collection(
        db,
        "MEMBERS",
        auth.currentUser.uid,
        "TEMPLATES"
      );
      const res = await getDocs(docsRef);
      // console.log(res);
      // console.log(res.docs[0].data());
      // return res.data();
    } catch (err) {
      console.error("Something went wrong!");
      console.error(err);
    }
  };

  return { getUser, getCollection };
};

export default getData;
