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

  updateTrip = async (tripId) => {
    try {
      await instance.put(`/trips/${tripId}`);
      this.trips = this.trips.find((trip) => trip.id === +tripId);
    } catch (error) {
      console.error(error);
    }

  }
}

const tripStore = new TripStore();
tripStore.fetchtrips();

export default tripStore;
