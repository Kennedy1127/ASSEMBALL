import { auth } from "@/firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";

const useSendResetEmail = () => {
  const sendResetEmail = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      // console.error("Something went wrong!");
      console.error(err);
    }
  };

  return { sendResetEmail };
};

export default useSendResetEmail;
