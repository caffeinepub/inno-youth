import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    name: string;
    isRead: boolean;
    email: string;
    message: string;
    timestamp: Time;
}
export type Time = bigint;
export interface backendInterface {
    deleteSubmission(timestamp: Time): Promise<void>;
    getAllSubmissions(): Promise<Array<ContactSubmission>>;
    getUnreadSubmissions(): Promise<Array<ContactSubmission>>;
    markAsRead(timestamp: Time): Promise<void>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
}
