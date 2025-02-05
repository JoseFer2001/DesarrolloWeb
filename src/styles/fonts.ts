import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export { poppins };
