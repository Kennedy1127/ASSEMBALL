import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

const useSignin = () => {
  const error = ref(null);
  const signin = async ({ email, password }) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (!res) throw new Error("Could not connect to the server.");
    } catch (err) {
      console.error("Something went wrong!");
      error.value = err.message;
      // console.error(err);
    }
  };

  return { error, signin };
};

export default useSignin;
