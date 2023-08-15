import { auth } from "@/firebase/config";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { ref } from "vue";

const useSignin = () => {
  const signinError = ref(null);
  const signin = async ({ email, password }) => {
    //登入時先把錯誤清空(第二次登入時)
    signinError.value = null;
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (!res) throw new Error("Could not connect to the server.");
    } catch (err) {
      console.error("Something went wrong!");
      signinError.value = err.message;
      // console.error(err);
    }
  };

  const signinWithGoogle = async () => {
    const providerGoogle = new GoogleAuthProvider();
    await signInWithPopup(auth, providerGoogle);
  };

  return { signinError, signin, signinWithGoogle };
};

export default useSignin;
