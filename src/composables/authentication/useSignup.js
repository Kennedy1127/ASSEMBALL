import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref } from "vue";
import useData from "@/composables/data/useData";

const { setData } = useData();

const useSignup = () => {
  const error = ref(null);
  const isPending = ref(false);

  const signup = async (signupData) => {
    try {
      const { email, password } = signupData;

      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (!res) throw new Error("Could not connect to the server.");

      updateProfile(auth.currentUser, {
        displayName: signupData.username,
      });

      const data = {
        id: auth.currentUser.uid,
        firstname: signupData.firstname,
        lastname: signupData.lastname,
        username: signupData.username,
        email: signupData.email,
        exp: 0,
        area: "台灣",
        icon: null,
        team_id: null,
        templates: [
          {
            template_status: true,
            template_text: "預設模板",
          },
        ],
        access: true,
        violations: 0,
      };
      await setData("MEMBERS", data);
    } catch (err) {
      console.error("Something went wrong!");
      // console.error(err);
    }
  };

  return { error, isPending, signup };
};

export default useSignup;
