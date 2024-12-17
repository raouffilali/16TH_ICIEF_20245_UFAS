import {
  AbdelhalimGar,
  Abdulkarim,
  Asutay,
  Belouafi,
  Bulut,
  speaker_5,
  Haneef,
  Hassan,
  nasser,
  SaydSelAli,
  senouci,
  fares_djafri,
  layachi_fedad,
  miloudZenkri,
  slimaneNasser,
  abderahimassati,
  younesSwalhi,
  saidBouheraoua,
} from "@/assets";

export type scientificcommittee = {
  id: number;
  name: string;
  description?: string;
  image?: string; // Optional field for the image URL
};

export const scientificcommittees: scientificcommittee[] = [
  {
    id: 1,
    name: "Prof Dr. Mehmet Bulut",
    description: "Istanbul Sabahattin Zaim University, Turkey.",
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
    image: speaker_5,
  },
  {
    id: 6,
    name: "Prof. Dr. Abderrahmane Senouci",
    description: "High Islamic Council, Algeria.",
    image: senouci,
  },
  {
    id: 7,
    name: "Dr. Nasser Hideur",
    description: "General director of Alsalam Bank, Algeria",
    image: nasser,
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
  {
    id: 12,
    name: "Dr. layachi FEDDAD",
    description:
      "Member of the Fatwa and Shariah Supervisory Board, Alsalem Bank, Algeria",
    image: layachi_fedad,
  },
  {
    id: 13,
    name: "Pr. Dr. Younes Soualhi",
    description:
      "Senior Researcher at the International Shari’ah Research Academy for Islamic Finance (ISRA) and the Head of Islamic Banking Unit.",
    image: younesSwalhi,
  },
  {
    id: 14,
    name: "Pr. Dr. Saiid Bouhraoua",
    description:
      "  Director of Research Development and Innovation at International Shariah Research Academy for Islamic Finance (ISRA) INCEIF University",
    image: saidBouheraoua,
  },
  {
    id: 15,
    name: "Pr. Dr. Slimane Nasser",
    description: "Kasdi Merbah University, Ouaragla, Algeria.",
    image: slimaneNasser,
  },
  {
    id: 16,
    name: "Pr. Dr. Abdurahim Saati",
    description:
      " Islamic Economics Institute, King Abdulaziz University · KSA",
    image: abderahimassati,
  },
  {
    id: 17,
    name: "Pr. Dr. Miloud Zenkri",
    description:
      " Mohamed El Bachir El Ibrahimi University , Faculty of Economics, Bordj Bou Arreridj, Algeria",
    image: miloudZenkri,
  },
  {
    id: 18,
    name: "Dr. Fares Djaafri",
    description:
      "Senior Researcher at ISRA Research Management Centre, INCEIF University, Malysia",
    image: fares_djafri,
  },

];
