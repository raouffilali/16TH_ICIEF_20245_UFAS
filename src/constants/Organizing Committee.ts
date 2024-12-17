import {
  Ainouss,
  Anissa,
  Farouq,
  Guemazi,
  Ouassaa,
  Rafik,
  Zineb,
} from "@/assets";

export type organizingcommittee = {
  id: number;
  name: string;
  description?: string;
  image?: string; // Optional field for the image URL
};

export const organizingcommittees: organizingcommittee[] = [
  {
    id: 1,
    name: "Dr. Bensalem Farouq",
    description: "Setif 1 University _ Ferhat Abbas, Algeria.",
    image: Farouq,
  },
  {
    id: 2,
    name: "Dr. Bouguaa Zineb",
    description: "Setif 1 University _ Ferhat Abbas, Algeria.",
    image: Zineb,
  },
  {
    id: 3,
    name: "Dr. Harfouche Anissa",
    description: "Setif 1 University _ Ferhat Abbas, Algeria.",
    image: Anissa,
  },
  {
    id: 4,
    name: "Dr. Khelfi Rafik",
    description: "Setif 1 University _ Ferhat Abbas, Algeria.",
    image: Rafik,
  },
  {
    id: 5,
    name: "Dr. Riadh Ainouss",
    description: "Setif 1 University _ Ferhat Abbas, Algeria.",
    image: Ainouss,
  },
  {
    id: 6,
    name: "Dr. Hamza Ouassaa",
    description: "Setif 1 University _ Ferhat Abbas, Algeria.",
    image: Ouassaa,
  },
  {
    id: 7,
    name: "Dr. Noudjoum Guemazi",
    description: "Setif 1 University _ Ferhat Abbas, Algeria.",
    image: Guemazi,
  },
];
