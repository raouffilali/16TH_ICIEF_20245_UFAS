import { EcoOrg, HIC, IAFIE, IEI } from "@/assets";

export type Organizer = {
  id: number;
  name: string;
  image?: string; // Optional field for the image URL
};

export const organizers: Organizer[] = [
  {
    id: 1,
    name: "Faculty of Economics, Commerce, and Management Sciences",
    image: EcoOrg,
  },
  {
    id: 2,
    name: "International Association for Islamic Economics",
    image: IAFIE,
  },
  {
    id: 3,
    name: "High Islamic Council",
    image: HIC,
  },
  {
    id: 4,
    name: "Islamic Econimics Institute",
    image: IEI,
  },
];
