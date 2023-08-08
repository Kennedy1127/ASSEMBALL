import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBlob,
  updateMetadata,
} from "firebase/storage";

const useStorage = () => {
  const storage = getStorage();

  const setPics = async (path, files) => {
    try {
      const urls = [];

      for (let i = 0; i < files.length; i++) {
        // const lastSlash = files[i].type.lastIndexOf("/");
        // const type = files[i].type.slice(lastSlash + 1);
        let route = "";

        if (files.length === 4) route = `${path}/product-${i + 1}`;

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

  const updatePics = async (path, files, filename) => {
    try {
      const urls = [];

      for (let i = 0; i < files.length; i++) {
        const route = `${path}/${filename}-${i + 1}`;
        const url = await updatePic(route, files[i]);
        // urls.push(url);
      }

      // return urls;
    } catch (err) {
      console.error("Somethings went wrong!");
      console.error(err);
    }
  };

  const updatePic = async (path, file) => {
    try {
      console.log(file);
      const storageRef = ref(storage, path);
      const res = await updateMetadata(storageRef, file);
      const url = await getDownloadURL(res.ref);
      console.log(url);

      return url;
    } catch (err) {
      console.error("Somethings went wrong!");
      console.error(err);
    }
  };

  const getPics = async (count, path, filename) => {
    try {
      const pics = [];
      for (let i = 0; i < count; i++) {
        const storageRef = ref(storage, path + `/${filename}-${i + 1}`);
        const res = await getBlob(storageRef);
        pics.push(res);
      }

      return pics;
    } catch (err) {
      console.error("Somethings went wrong!");
      console.error(err);
    }
  };

  return { setPics, getPics, updatePics };
};

export default useStorage;
