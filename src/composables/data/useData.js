import { db } from "@/firebase/config";
import { doc, setDoc, updateDoc, collection } from "firebase/firestore";
import { ref } from "vue";

const useData = () => {
  const setDataError = ref(null);

  const setData = async (target, data) => {
    setDataError.value = null;
    try {
      const docRef = doc(db, target, data.id ? data.id : null);
      data.id = docRef.id;
      await setDoc(docRef, data);
    } catch (err) {
      console.error("Something went wrong!");
      setDataError.value = err.message;
      // console.error(err);
    }
  };

  const setDataSubCollection = async (target, data) => {
    setDataError.value = null;

    try {
      const colRef = collection(
        db,
        target.collectionName,
        target.documentId,
        target.subCollectionName
      );
      const docRef = doc(colRef);
      data.id = docRef.id;
      await setDoc(docRef, data);
    } catch (err) {
      console.error("Something went wrong!");
      setDataError.value = err.message;
      // console.error(err);
    }
  };

  const updateData = async (target, id, data = {}) => {
    try {
      const dataRef = doc(db, target, id);
      const res = await updateDoc(dataRef, data);

      return res;
    } catch (err) {
      console.error("Something went wrong!");
      setDataError.value = err.message;
      // console.error(err);
    }
  };

  return { setDataError, setData, updateData, setDataSubCollection };
};

export default useData;
