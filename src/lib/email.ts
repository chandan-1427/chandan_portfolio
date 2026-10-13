import { PROFILE } from "@/data/profile";

const SUBJECT = "Reaching out from your portfolio";
const BODY =
  "Hi Chandan,\n\n" +
  "[Write your message here]\n\n" +
  "Thanks!\n" +
  "[Your name]\n";

// Gmail compose rather than mailto:, which does nothing for visitors without a default mail app
export const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1" +
  `&to=${encodeURIComponent(PROFILE.email)}` +
  `&su=${encodeURIComponent(SUBJECT)}` +
  `&body=${encodeURIComponent(BODY)}`;
