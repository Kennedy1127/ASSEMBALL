import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import useData from "@/composables/data/useData";
import useSignout from "@/composables/authentication/useSignout";

const { setData } = useData();
const { signout } = useSignout();

const useSignup = () => {
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
        notifications: [],
        access: true,
        violations: 0,
      };

      await setData("MEMBERS", data);
      await signout();
    } catch (err) {
      console.error("Something went wrong!");
      // console.error(err);
    }
  };

  return { signup };
};

export default useSignup;
