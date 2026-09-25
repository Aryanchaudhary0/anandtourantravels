import { business } from "@/config/business";

export function whatsappUrl(message: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function bookingMessage(destination?: string, vehicle?: string) {
  const details = [destination && `Destination: ${destination}`, vehicle && `Vehicle: ${vehicle}`].filter(Boolean);
  return `Hello ${business.name}, I would like to book a taxi.${details.length ? `\n${details.join("\n")}` : ""}\nPlease share availability and the final fare.`;
}
