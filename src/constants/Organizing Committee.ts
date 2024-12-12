import { Abdulkarim, Asutay, Beik, Belouafi, Boudjellal, Bourakba, Bulut, Chachi, Gharbi, Hafiz, Haneef, Hassan, Ibrahim, Khan, Omar, Senouci, Tahir } from "@/assets";

export type organizingcommittee = {
  id: number;
  name: string;
  description?: string;
  image?: string; // Optional field for the image URL
};

export const organizingcommittees: organizingcommittee[] = [
  {
    id: 1,
    name: "Prof. Dr. Tariqullah Khan",
    description: "Istanbul Zaim University, Turkey.",
    image: Khan,
  },
  {
    id: 2,
    name: "Prof. Dr. Mohammad Kabir Hassan",
    description: "University of New Orleans, USA.",
    image: Hassan,
  },
  {
    id: 3,
    name: "Prof. Dr. Sayyid Tahir",
    description: "International Islamic University Islamabad, Pakistan.",
    image: Tahir,
  },
  {
    id: 4,
    name: "Prof. Dr. Mansorh Ibrahim",
    description: "INCEIF University, USA.",
    image: Ibrahim,
  },
  {
    id: 5,
    name: "Prof. Dr. Mustafa Omar",
    description: "International Islamic University Malaysia, Malaysia.",
    image: Omar,
  },
  {
    id: 6,
    name: "Prof. Dr. Aslam Haneef",
    description: "International Islamic University, Malaysia.",
    image: Haneef,
  },
  {
    id: 7,
    name: "Prof. Dr. Mehmet Asutay",
    description: "Durham University, England.",
    image: Asutay,
  },
  {
    id: 8,
    name: "Prof. Dr. Abderrahmane Senouci",
    description: "High Islamic Council, Algeria.",
    image: Senouci,
  },
  {
    id: 9,
    name: "Prof. Dr. Ahmed Belouafi",
    description: "King Abdulaziz University, Saudi Arabia.",
    image: Belouafi,
  },
  {
    id: 10,
    name: "Prof. Dr. Fadul Abdulkarim",
    description: "King Abdulaziz University, Saudi Arabia.",
    image: Abdulkarim,
  },
  {
    id: 11,
    name: "Prof. Dr. Abdelhalim Gharbi",
    description: "Imam Mohammad Ibn Saud Islamic University, Saudi Arabia.",
    image: Gharbi,
  },
];
