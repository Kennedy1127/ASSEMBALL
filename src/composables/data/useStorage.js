import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const useStorage = () => {
  const storage = getStorage();

  const setPics = async (path, files) => {
    try {
      const urls = [];

      for (let i = 0; i < files.length; i++) {
        const lastSlash = files[i].type.lastIndexOf("/");
        const type = files[i].type.slice(lastSlash + 1);
        const route = `${path}/product-${i + 1}.${type}`;

        const url = await uploadPic(route, files[i]);
        urls.push(url);
      }
      return urls;
    } catch (err) {
      console.error("Somethings went wrong!");
      console.error(err);
    }
  };

  const uploadPic = async (path, file) => {
    try {
      const storageRef = ref(storage, path);
      const res = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(res.ref);

      return url;
    } catch (err) {
      console.error("Somethings went wrong!");
      console.error(err);
    }
  };

  return { setPics };
};

export default useStorage;
