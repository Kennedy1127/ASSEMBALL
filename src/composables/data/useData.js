import { db } from "@/firebase/config";
import { doc, setDoc, updateDoc } from "firebase/firestore";

const useData = () => {
  const setData = async (target, data) => {
    try {
      const dataRef = doc(db, target, data.id);
      await setDoc(dataRef, data);
    } catch (err) {
      console.error("Something went wrong!");
      // console.error(err);
    }
  };

  const updateData = async (target, data) => {
    try {
      const dataRef = doc(db, target, data.id);
      await updateDoc(dataRef, data);
    } catch (err) {
      console.error("Something went wrong!");
      // console.error(err);
    }
  };

  return { setData, updateData };
};

export default useData;
