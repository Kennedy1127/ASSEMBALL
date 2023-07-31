import { db } from "@/firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { ref } from "vue";

const useData = () => {
  const error = ref(null);
  const isPending = ref(false);

  const setData = async (target, data) => {
    try {
      const dataRef = doc(db, target, data.id);
      await setDoc(dataRef, data);
    } catch (err) {
      console.error("Something went wrong!");
      // console.error(err);
    }
  };

  return { error, isPending, setData };
};

export default useData;
