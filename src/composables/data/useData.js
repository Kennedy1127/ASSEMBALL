import { db } from "@/firebase/config";
import { doc, setDoc, updateDoc, collection } from "firebase/firestore";
import { ref } from "vue";
import useStorage from "@/composables/data/useStorage";

const { setPics } = useStorage();

const useData = () => {
  const setDataError = ref(null);

  const setData = async (target, data, pics = null) => {
    setDataError.value = null;
    try {
      const docRef = data.id
        ? doc(db, target, data.id)
        : doc(collection(db, target));

      data.id = docRef.id;

      if (pics) {
        const urls = await setPics(`images/${target}/${docRef.id}`, pics);
        data.pics = [];
        urls.forEach((url) => data.pics.push(url));
      }

      await setDoc(docRef, data);
      return docRef.id;
    } catch (err) {
      console.error("Something went wrong!");
      setDataError.value = err.message;
      console.error(err);
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
      console.error(err);
    }
  };

  const updateData = async (target, id, data = {}) => {
    // try {
    //   const dataRef = doc(db, target, id);
    //   const res = await updateDoc(dataRef, data);
    //   return res;
    // } catch (err) {
    //   console.error("Something went wrong!");
    //   setDataError.value = err.message;
    //   console.error(err);
    // }
  };

  const updateDataSubCollection = async (target, data) => {
    // try {
    //   const dataRef = doc(db, target, id);
    //   const res = await updateDoc(dataRef, data);
    //   return res;
    // } catch (err) {
    //   console.error("Something went wrong!");
    //   setDataError.value = err.message;
    //   console.error(err);
    // }
  };

  return {
    setDataError,
    setData,
    setDataSubCollection,
    updateData,
    updateDataSubCollection,
  };
};

export default useData;
