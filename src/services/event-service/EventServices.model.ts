import { Payment } from "@/views/events/create/CreateEventFormComponent.model";

export interface CreateEvent {
  title: string;
  type: string;
  description: string;
  location: string;
  attendees: number;
  tripDate: string;
  banner: string;
  returnTrip: boolean;
  returnDate: string | null;
  payment: Payment;
}
