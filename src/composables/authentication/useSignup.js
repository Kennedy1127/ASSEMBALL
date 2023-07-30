import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

const useSignup = () => {
  const error = ref(null);
  const isPending = ref(false);

  const signup = async (email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (!res) throw new Error("Could not connect to the server.");

      console.log(res);
    } catch (err) {
      console.error("Something went wrong!");
    }
  };

  return { error, isPending, signup };
};

export default useSignup;
