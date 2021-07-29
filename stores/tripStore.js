import { makeAutoObservable } from "mobx";

import instance from "./instance";

class TripStore {
  trips = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchtrip = async () => {
    try {
      let response = await instance.get("/trips");
      this.trips = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchtrip();

export default tripStore;
