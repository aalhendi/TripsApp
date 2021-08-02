/* Import */
import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProfileStore {
  profile = null;
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }

  setProfile = async (profileId) => {
    try {
      res = await instance.get(`/profiles/${profileId}`);
      this.profile = res.data;
    } catch (error) {
      console.error(error);
    }
    this.loading = false;
  };

  updateProfile = async (updatedProfile) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile) {
        formData.append(key, updatedProfile[key]);
      }
      const res = await instance.put(`/profiles/${profileId}`, formData);
      for (const key in res.data) {
        this.profile[key] = res.data[key];
      }
    } catch (error) {
      console.error(error);
    }
  };
}

const profileStore = new ProfileStore();
export default profileStore;
