import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import useData from "@/composables/data/useData";
import useSignout from "@/composables/authentication/useSignout";
import { ref } from "vue";

const { setData, setDataSubCollection } = useData();
const { signout } = useSignout();

const useSignup = () => {
  const signupError = ref(null);

  const signup = async (signupData) => {
    signupError.value = null;

    try {
      const { email, password } = signupData;

      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (!res) throw new Error("Could not connect to the server.");

      updateProfile(auth.currentUser, {
        displayName: signupData.username,
      });

      const userData = {
        id: auth.currentUser.uid,
        firstname: signupData.firstname,
        lastname: signupData.lastname,
        username: signupData.username,
        email: signupData.email,
        exp: 0,
        area: "台灣",
        icon: null,
        team_id: null,
        access: true,
        violations: 0,
      };

      const templatesTarget = {
        collectionName: "MEMBERS",
        documentId: auth.currentUser.uid,
        subCollectionName: "TEMPLATES",
      };

      const notificationsTarget = {
        collectionName: "MEMBERS",
        documentId: auth.currentUser.uid,
        subCollectionName: "NOTIFICATIONS",
      };

      await setData("MEMBERS", userData);
      await setDataSubCollection(templatesTarget, {
        text: "預設模板",
        status: true,
      });
      await setDataSubCollection(notificationsTarget, {});

      await signout();
    } catch (err) {
      console.error("Something went wrong!");
      signupError.value = err.message;
      // console.error(err);
    }
  };

  return { signupError, signup };
};

export default useSignup;
