/* Import */
import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProfileStore {
  profile = null;
  profiles = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }

  fetchAll = async () => {
    try {
      res = await instance.get("/profiles");
      this.profiles = res.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  setProfile = async (profileId) => {
    try {
      this.profile = this.profiles.find((profile) => profile.id === profileId);
    } catch (error) {
      console.error(error);
    }
  };

  updateProfile = async (updatedProfile) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile) {
        formData.append(key, updatedProfile[key]);
      }
      const res = await instance.put(`/profiles/${this.profile.id}`, formData);
      for (const key in res.data) {
        this.profile[key] = res.data[key];
      }
    } catch (error) {
      console.error(error);
    }
  };
}

const profileStore = new ProfileStore();
profileStore.fetchAll();
export default profileStore;
