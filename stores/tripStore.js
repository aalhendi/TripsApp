/* Imports*/
import { makeAutoObservable } from "mobx";
import instance from "./instance";
import {useState} from "react";

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
       await instance.put(`/trips/${updatedTrip.tripId}`);
      const tripUpdate = this.trips.find((trip) => trip.id === updatedTrip.tripId);
      // for{

      // }

    } catch (error) {
      console.log("\n\n\nCATCH ERROR\n\n\n")
      console.error(error);
    }
  };
};

const tripStore = new TripStore();
tripStore.fetchtrips();

export default tripStore;
