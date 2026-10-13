import { PROFILE } from "@/data/profile";

const SUBJECT = "Reaching out from your portfolio";
// Bracketed parts are placeholders, so visitors can see at a glance what to replace
const BODY =
  "Hi Chandan,\n\n" +
  "[Write your message here]\n\n" +
  "Thanks!\n" +
  "[Your name]\n";

// Opens Gmail's compose window with the address, subject and a starter message filled in
export const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1" +
  `&to=${encodeURIComponent(PROFILE.email)}` +
  `&su=${encodeURIComponent(SUBJECT)}` +
  `&body=${encodeURIComponent(BODY)}`;
