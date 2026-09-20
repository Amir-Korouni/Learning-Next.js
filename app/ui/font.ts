import { Lustria, Playfair_Display } from "next/font/google";
import { Lusitana } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export const lusitana = Lusitana({ subsets: ["latin"], weight: ["400"] });
