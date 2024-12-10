import { Dean, MalRec, Recteur } from "@/assets";

export type highcommittee = {
  id: number;
  name: string;
  description?: string;
  image?: string; // Optional field for the image URL
};


export const highcommittees: highcommittee[] = [
  {
    id: 1,
    name: "Prof Dr. El-Hadi Latrache",
    description: "Rector of Setif 1 University _ Ferhat Abbas",
    image: Recteur,
  },
  {
    id: 2,
    name: "Prof Dr. Mohd Azmi Omar",
    description:
      "President & Chief Executive Officer INCEIF University, Malaysia & President of International Association for Islamic Economics ",
    image: MalRec,
  },
  {
    id: 3,
    name: "Prof Dr. Chaouki Bourakba",
    description:
      "Dean of the Faculty of Economics, Commerce, and Management Sciences",
    image: Dean,
  },
];
