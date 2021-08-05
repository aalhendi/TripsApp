/* Import */
import { makeAutoObservable, runInAction } from "mobx";
import instance from "./instance";

class ProfileStore {
  profiles = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }

  fetchAll = async () => {
    try {
      res = await instance.get("/profiles");
      runInAction(() => (this.profiles = res.data));
      runInAction(() => (this.loading = false));
    } catch (error) {
      console.log(error);
    }
  };

  updateProfile = async (updatedProfile) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile) {
        formData.append(key, updatedProfile[key]);
      }
      const profile = this.profiles.find(
        (profile) => profile.id === updatedProfile.userId
      );
      const res = await instance.put(
        `/profiles/${updatedProfile.userId}`,
        formData
      );
      for (const key in profile) {
        runInAction(() => (profile[key] = res.data[key]));
      }
    } catch (error) {
      console.error(error);
    }
  };
}

const profileStore = new ProfileStore();
profileStore.fetchAll();
export default profileStore;
