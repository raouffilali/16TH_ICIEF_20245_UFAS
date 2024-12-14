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
    name: "Prof Dr. Mohamed El-Hadi Latrache",
    description: "Rector of Setif 1 University _ Ferhat Abbas",
    image: Recteur,
  },
  {
    id: 2,
    name: "Prof Dr. Mohd Azmi Omar",
    description:
      "President of International Association for Islamic Economics & President & Chief Executive Officer INCEIF University, Malaysia ",
    image: MalRec,
  },
  {
    id: 3,
    name: "Prof Dr. Chaouki Bourakba",
    description:
      "Dean of the Faculty of Economics, Commerce, and Management Sciences, Setif 1 University _ Ferhat Abbas, Algeria.",
    image: Dean,
  },
];
