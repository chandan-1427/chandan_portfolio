import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => twMerge(inputs.filter(Boolean));