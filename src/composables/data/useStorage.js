import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBlob,
  listAll,
} from "firebase/storage";

const useStorage = () => {
  const storage = getStorage();

  const setPics = async (path, files, filename) => {//(路徑,傳入檔案,檔案名稱)
    try {
      for (let i = 0; i < files.length; i++) {
        let route = `${path}/${filename}-${i + 1}`;//route=路徑/檔案名稱-數字
      const url =  await uploadPic(route, files[i]);
      urls.push(url)
      }
    } catch (err) {
      console.error("Somethings went wrong!");
      console.error(err);
    }
  };

  const uploadPic = async (path, file) => {
    try {
      const storageRef = ref(storage, path);//storageRef=路徑
      const res= await uploadBytes(storageRef, file);
      const url = await getDownloadURL(res.ref)

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

  const getPicsLink = async (count, path, filename) => {
    try {
      const pics = [];
      for (let i = 0; i < count; i++) {
        const storageRef = ref(storage, path + `/${filename}-${i + 1}`);
        const res = await getDownloadURL(storageRef);
        pics.push(res);
      }

      return pics;
    } catch (err) {
      console.error("Somethings went wrong!");
      console.error(err);
    }
  };

  const getAllPics = async (path) => {
    const storage = getStorage();
    const storageRef = ref(storage, path);
    const res = await listAll(storageRef);

    res.items.forEach(async (el) => {
      const test = await getDownloadURL(el);
      console.log(test);
    });
  };

  return { setPics, getPics, getPicsLink, getAllPics, uploadPic };
};

export default useStorage;
