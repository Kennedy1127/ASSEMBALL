import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBlob,
  listAll,
} from "firebase/storage";

// const getAll = async () => {
//   const storage = getStorage();
//   const storageRef = ref(storage, "images/PRODUCTS/4akPJqmt2vrCo5kyVEDJ/");
//   const res = await listAll(storageRef);
//   console.log(res.items);

//   res.items.forEach(async (el) => {
//     const test = await getDownloadURL(el);
//     console.log(test);
//   });
// };
// getAll();

const useStorage = () => {
  const storage = getStorage();

  const setPics = async (path, files, filename) => {
    try {
      for (let i = 0; i < files.length; i++) {
        let route = `${path}/${filename}-${i + 1}`;
        await uploadPic(route, files[i]);
      }
    } catch (err) {
      console.error("Somethings went wrong!");
      console.error(err);
    }
  };

  const uploadPic = async (path, file) => {
    try {
      const storageRef = ref(storage, path);
      await uploadBytes(storageRef, file);
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

    const urls = [];

    for (let i = 0; i < res.items.length; i++) {
      const pic = await getDownloadURL(res.items[i]);
      urls.push(pic);
    }

    // res.items.forEach(async (el) => {
    //   const pic = await getDownloadURL(el);
    //   console.log(pic);

    //   urls.push(pic);
    // });

    return urls;
  };

  return { setPics, getPics, getPicsLink, getAllPics, uploadPic };
};

export default useStorage;
