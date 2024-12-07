import { HIC, IAFIE, Logo2 } from "@/assets";

export type Organizer = {
  id: number;
  name: string;
  description?: string;
  image?: string; // Optional field for the image URL
};

export const organizers: Organizer[] = [
  {
    id: 1,
    name: "Faculty of Economic, Commerce, and Management Sciences",
    description: "Setif 1 University - Ferhat Abass",
    image: Logo2
  },
  {
    id: 2,
    name: "International Association for Islamic Economics",
    description: "Setif 1 University - Ferhat Abass",
    image: IAFIE,
  },
  {
    id: 3,
    name: "High Islamic Council",
    description: "Setif 1 University - Ferhat Abass",
    image: HIC,
  },
  
];
