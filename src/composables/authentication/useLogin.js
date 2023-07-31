import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

const useLogin = () => {
  const error = ref(null);
  const isPending = ref(false);

  const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (!res) throw new Error("Could not connect to the server.");

      console.log(res);
    } catch (err) {
      console.error("Something went wrong!");
      // console.error(err);
    }
  };

  return { error, isPending, login };
};

export default useLogin;
