import { getStorage, ref, uploadBytes } from "firebase/storage";

const useStorage = () => {
  const storage = getStorage();

  const setPic = async (path, file) => {
    try {
      console.log(path);
      console.log(file);
      console.log(typeof file);
      const storageRef = ref(storage, path);
      const res = await uploadBytes(storageRef, file);
      console.log(res);
    } catch (err) {
      console.error("Somethings went wrong!");
      console.error(err);
    }
  };

  return { setPic };
};

export default useStorage;
