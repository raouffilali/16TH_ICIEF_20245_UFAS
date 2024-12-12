import { Beik, Boudjellal, Bourakba, Bulut, Chachi, Hafiz } from "@/assets";

export type steeringcommittee = {
  id: number;
  name: string;
  description?: string;
  image?: string; // Optional field for the image URL
};

export const steeringcommittees : steeringcommittee[] = [
 {
    id: 1,
    name: "Prof Dr. Chaouki Bourakba",
    description: "Dean of the Faculty of Economics, Commerce, and Management Sciences, Setif 1 University _ Ferhat Abbas, Algeria.",
    image: Bourakba,
  },
  {
    id: 2,
    name: "Prof Dr. Omar Zuhair Hafiz",
    description: "President at Hafiz Financial Consulting, Saudi Arabia.",
    image: Hafiz,
  },
  {
    id: 3,
    name: "Prof Dr. Abdelkader Chachi",
    description: "Professor at Istanbul Sabahattin Zaim University, Istanbul, Turkey.",
    image: Chachi,
  },
  {
    id: 4,
    name: "Prof Dr. Irfan Syauqi Beik",
    description: "Dean of the Faculty of Economics and Management, IPB University, Indonesia.",
    image: Beik,
  },
  {
    id: 5,
    name: "Prof Dr. Mehmet Bulut",
    description: "President of Istanbul Sabahattin Zaim University, Turkey.",
    image: Bulut,
  },
  {
    id: 6,
    name: "Prof. Dr. Mohamed Boudjellal",
    description: "High Islamic Council, Algeria.",
    image: Boudjellal,
  },
]
