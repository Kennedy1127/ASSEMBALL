import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";

const useSignout = () => {
  const signout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Something went wrong!");
      // console.error(err);
    }
  };

  return { signout };
};

export default useSignout;
