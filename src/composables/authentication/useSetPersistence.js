import { auth } from "@/firebase/config";
import { setPersistence, browserSessionPersistence } from "firebase/auth";
import { ref } from "vue";

const useSetPersistence = () => {
  const error = ref(null);

  const changePersistence = async () => {
    try {
      await setPersistence(auth, browserSessionPersistence);
    } catch (err) {
      console.error("Something went wrong!");
      // console.error(err);
    }
  };

  return { error, changePersistence };
};

export default useSetPersistence;
