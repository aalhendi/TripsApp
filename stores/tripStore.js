/* Imports*/
import { makeAutoObservable } from "mobx";
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
      this.trips = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  deleteTrip = async (tripId) => {
    try {
      await instance.delete(`/trips/${tripId}`);
      this.trips = this.trips.filter((trip) => trip.id !== tripId);
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
      const myTrip = this.trips.find((myTrip)=> myTrip.id === res.data.id);
      for (const key in myTrip) {
        myTrip[key] = res.data[key];
      }

    } catch (error) {
      console.error(error);
    }
  };
};
const tripStore = new TripStore();
tripStore.fetchtrips();

export default tripStore;
