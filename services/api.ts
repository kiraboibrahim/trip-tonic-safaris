/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";


export interface BookingData {
    destination: string;
    depart_date: string; // YYYY-MM-DD
    return_date: string; // YYYY-MM-DD
    duration: number | string;
}

export interface RegistrationData {
    name: string;
    email: string;
    destination: string;
}

const api = axios.create({
    baseURL: "https://triptonicsafaris-api.onrender.com/api/",
    timeout: 15000,
    headers: { "Content-Type": "application/json" },
});


api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: any) => {
        console.error("API Error:", error);
        return Promise.reject(error);
    }
);

export const submitBooking = (data: BookingData) => api.post("bookings/", data);
export const submitSignup = (data: RegistrationData) => api.post("leads/special-offer/", data);
export const submitNewsletter = (data: any) => api.post("leads/newsletter/", data);
export const submitContactForm = (data: any) => api.post("contact/", data);

export default api;
