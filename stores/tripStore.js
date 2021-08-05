/* Imports*/
import { makeAutoObservable, runInAction } from "mobx";
import instance from "./instance";

class TripStore {
  trips = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchtrips = async () => {
    try {
      const response = await instance.get("/trips");
      runInAction(() => (this.trips = response.data));
      runInAction(() => (this.loading = false));
    } catch (error) {
      console.error(error);
    }
  };

  createTrip = async (newTrip) => {
    try {
      const formData = new FormData();
      for (const key in newTrip) formData.append(key, newTrip[key]);
      const res = await instance.post("/trips", formData);
      runInAction(() => this.trips.push(res.data));
    } catch (error) {
      console.error(error);
    }
  };

  deleteTrip = async (tripId) => {
    try {
      await instance.delete(`/trips/${tripId}`);
      runInAction(
        () => (this.trips = this.trips.filter((trip) => trip.id !== tripId))
      );
    } catch (error) {
      console.error(error);
    }
  };

  updateTrip = async (updatedTrip) => {
    try {
      const formData = new FormData();
      for (const key in updatedTrip) {
        formData.append(key, updatedTrip[key]);
      }
      const res = await instance.put(`/trips/${updatedTrip.id}`, formData);
      const myTrip = this.trips.find((myTrip) => myTrip.id === res.data.id);
      for (const key in myTrip) {
        runInAction(() => (myTrip[key] = res.data[key]));
      }
    } catch (error) {
      console.error(error);
    }
  };
}
const tripStore = new TripStore();
tripStore.fetchtrips();

export default tripStore;
