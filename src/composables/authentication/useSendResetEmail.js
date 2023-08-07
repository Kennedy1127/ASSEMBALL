import { auth } from "@/firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
import { ref } from "vue";

const useSendResetEmail = () => {
  const sendEmailError = ref(null);
  const sendResetEmail = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      sendEmailError.value = err.message;
      // console.error("Something went wrong!");
      console.error(err);
    }
  };

  return { sendResetEmail, sendEmailError };
};

export default useSendResetEmail;
