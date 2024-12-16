import {
  AbdelhalimGar,
  Abdulkarim,
  Asutay,
  Belouafi,
  Boudjellal,
  Bulut,
  Haidar,
  Haneef,
  Hassan,
  SaydSelAli,
  Senouci,
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
    name: "Prof Dr. Mehmet Bulut",
    description: "President of Istanbul Sabahattin Zaim University, Turkey.",
    image: Bulut,
  },
  {
    id: 2,
    name: "Prof. Dr. Mohammad Kabir Hassan",
    description: "University of New Orleans, USA.",
    image: Hassan,
  },
  {
    id: 3,
    name: "Prof. Dr. Aslam Haneef",
    description: "International Islamic University, Malaysia.",
    image: Haneef,
  },
  {
    id: 4,
    name: "Prof. Dr. Mehmet Asutay",
    description: "Durham University, England.",
    image: Asutay,
  },
  {
    id: 5,
    name: "Prof. Dr. Mohamed Boudjellal",
    description: "High Islamic Council, Algeria.",
    image: Boudjellal,
  },
  {
    id: 6,
    name: "Prof. Dr. Abderrahmane Senouci",
    description: "High Islamic Council, Algeria.",
    image: Senouci,
  },
  {
    id: 7,
    name: "Dr. Nacer Haidar",
    description: "director of Alsalam Bank, Algeria",
    image: Haidar,
  },
  {
    id: 8,
    name: "Prof. Dr. Ahmed Belouafi",
    description: "King Abdulaziz University, Saudi Arabia.",
    image: Belouafi,
  },
  {
    id: 9,
    name: "Prof. Dr. Fadul Abdulkarim",
    description: "King Abdulaziz University, Saudi Arabia.",
    image: Abdulkarim,
  },
  {
    id: 10,
    name: "Prof. Dr. Abdelhalim Gharbi",
    description: "Imam Mohammad Ibn Saud Islamic University, Saudi Arabia.",
    image: AbdelhalimGar,
  },
  {
    id: 11,
    name: "Dr. Salman Sayed Ali",
    description: "Former ISDBI Senior Researcher.",
    image: SaydSelAli,
  },
];
