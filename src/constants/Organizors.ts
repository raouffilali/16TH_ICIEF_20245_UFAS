import { Eco, IAFIE } from "@/assets";

type Organizer = {
  id: number;
  name: string;
  image?: string; // Optional field for the image URL
};

export const organizers: Organizer[] = [
  {
    id: 1,
    name: "Faculty of Economics, Commerce, and Management Sciences",
    image: Eco,
  },
  {
    id: 2,
    name: "International Association for Islamic Economics",
    image: IAFIE,
  },
];
