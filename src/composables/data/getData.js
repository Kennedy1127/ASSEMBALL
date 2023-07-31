import { auth, db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";

const getData = () => {
  const getUser = async () => {
    try {
      const userRef = doc(db, "MEMBERS", auth.currentUser.uid);
      const res = await getDoc(userRef);
      return res.data();
    } catch (err) {
      console.error("Something went wrong!");
      // console.error(err);
    }
  };

  return { getUser };
};

export default getData;
