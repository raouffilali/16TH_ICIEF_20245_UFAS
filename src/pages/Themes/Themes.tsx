import { Bodytexture } from "@/assets";

const themes = [
  {
    title: "Theme 01: History and Evolution of The Islamic Finance Industry",
    points: [
      {
        subheading: "Establishment Phase:",
        details: [
          "Beginning of the concept and emergence of the first Islamic banks.",
          "Challenges faced by the industry in its early years.",
          "Role of scholars and thinkers in shaping the theoretical framework.",
        ],
      },
      {
        subheading: "Geographical Expansion:",
        details: [
          "Industry Spread In The Islamic World.",
          "Entry Into Western Markets And East Asian Economies.",
          "Partnerships With Conventional Financial Institutions.",
        ],
      },
      {
        subheading: "Financial Crises:",
        details: [
          "Impact of global financial crises on the industry.",
          "Industry resilience in facing economic and political challenges.",
        ],
      },
    ],
  },
  {
    title: "Theme 02: Regulatory Frameworks and Sharia Governance",
    points: [
      {
        subheading: "Legislative Development:",
        details: [
          "Laws governing The Islamic Finance Industry in different countries.",
          "Role of supporting international institutions, such as the Accounting and Auditing Organization for Islamic Financial Institutions (AAOIFI) and the Islamic Financial Services Board (IFSB), in the development and standardization of The Islamic Finance Industry.",
        ],
      },
      {
        subheading: "Sharia Governance:",
        details: [
          "Importance of Sharia boards in ensuring compliance.",
          "Challenges in standardizing Sharia rulings across schools of thought.",
          "-	The relationship between Sharia principles and conventional financial regulatory systems.",
        ],
      },
      {
        subheading: "Role of Central Banks:",
        details: [
          "Strategies for supporting and regulating The Islamic Finance Industry.",
          "-	Challenges faced by central banks in achieving balance between flexibility and control.",
        ],
      },
    ],
  },
  {
    title:
      "Theme 03: Islamic Financial Products between Tradition and Innovation",
    points: [
      {
        subheading: "Evolution of Financial Contracts:",
        details: [
          'Progression from "Murabaha" & "Mudarabah" to "Sukuk" & "Ijarah".',
          "Adaptation of Islamic financial contracts to modern market requirements.",
        ],
      },
      {
        subheading: "Product Innovation:",
        details: [
          "Islamic Sukuk as a global investment instrument.",
          "Islamic microfinance and its role in enhancing financial inclusion.",
          "Impact of financial technology (FINTECH) on product development.",
        ],
      },
      {
        subheading: "Challenges and Opportunities:",
        details: [
          "Competition with conventional financial products.",
          "Responding to the needs of youth and sustainability-oriented consumers.",
        ],
      },
    ],
  },
  {
    title:
      "Theme 04: Islamic Financial Industry in the Era of the 4.0 Industrial Revolution",
    points: [
      {
        subheading: "Financial Technology (Fintech):",
        details: [
          "The role of digitization in industry restructuring.",
          "Blockchain applications and artificial intelligence in Islamic banking.",
          "Technical and regulatory challenges.",
        ],
      },
      {
        subheading: "Digital Islamic Banks:",
        details: [
          "The experience of digital Islamic banks in promoting financial inclusion.",
          "Industry prospects in light of digital transformation.",
        ],
      },
      {
        subheading: "Opportunities in Emerging Markets:",
        details: [
          "Strengthening partnerships with non-Islamic markets.",
          "Strategies for attracting international investments to foster industry growth.",
        ],
      },
    ],
  },
  {
    title: "Theme 05: Islamic Financial Industry and Sustainable Development",
    points: [
      {
        subheading:
          "Role of Islamic Finance in Achieving Sustainable Development:",
        details: [
          "Contribution to Sustainable Development Goals (SDGs).",
          "Ethical and social financing instruments (e.g., Takaful and Waqf).",
        ],
      },
      {
        subheading: "Ethical Finance and Social Responsibility:",
        details: [
          "Integration of Sustainability Standards (ESG) into Islamic Financial Products.",
          "Importance of Corporate Social Responsibility in Islamic Financial Institutions.",
        ],
      },
      {
        subheading:
          "Industry Future in Light of Environmental and Economic Transitions:",
        details: [
          "Facing environmental challenges such as climate change.",
          "Role of the industry in supporting the green economy and sustainable practices.",
        ],
      },
    ],
  },
  {
    title: "Theme 06: Islamic Financial Industry and Entrepreneurship",
    points: [
      {
        subheading: "Islamic Finance as a Supporter of Entrepreneurship:",
        details: [
          "Islamic financing Products such as Mudarabah and Musharakah support startups.",
          "Role of Islamic investment funds and microfinance in fostering entrepreneurial growth.",
        ],
      },
      {
        subheading: "Islamic Fintech and Entrepreneurship:",
        details: [
          "Sharia-compliant crowdfunding platforms.",
          "Fintech applications for enhancing entrepreneurial support and innovation.",
        ],
      },
      {
        subheading: "Ethical Finance and Social Entrepreneurship:",
        details: [
          "Role of Waqf and Takaful in supporting social entrepreneurship.",
          "Case studies of sustainable entrepreneurial projects supported by Islamic financial institutions.",
        ],
      },
    ],
  },
  {
    title: "Theme 07: Future Challenges and Development Prospects",
    points: [
      {
        subheading: "Institutional and Regulatory Challenges:",
        details: [
          "Harmonizing standards across institutions and countries.",
          "Management of financial and economic crises.",
        ],
      },
      {
        subheading: "Future Opportunities:",
        details: [
          "Market expansion and innovative product development.",
          "Enhanced integration between Islamic and conventional banks.",
        ],
      },
      {
        subheading: "Future Projections:",
        details: [
          "The position of the Islamic financial industry after fifty years of practices.",
          "Continuity of the Islamic financial industry in innovation and sustainability.",
        ],
      },
    ],
  },
  // Add remaining themes here...
];

const Themes = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-10 px-8">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-25 blur-[0.5px] z-0"
        src={Bodytexture}
        alt="Texture"
      />
      <div className="max-w-[1000px] mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-uni-green2 via-uni-green2-light to-uni-green2 bg-clip-text text-transparent z-10 animate-slidein100">
          Conference Themes
        </h1>
        <p className="text-lg text-center mb-12 text-gray-600 animate-fadeInLeft">
          Explore the key themes shaping The Islamic Finance Industry on its
          50th anniversary.
        </p>

        {/* Themes */}
        <div className="space-y-12 flex flex-col items-center animate-appear">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 w-full max-w-5xl space-y-8 shadow-[0_0_20px_10px_rgba(15,90,8,0.1)] animate-fadeInLeft z-10 transition-all ease-in-out duration-300 transform hover:scale-75"
            >
              {/* Theme Title */}
              <h2 className="text-2xl font-bold bg-gradient-to-r from-uni-green2 via-uni-green2-light to-uni-green2 bg-clip-text text-transparent mb-4">
                {theme.title}
              </h2>

              {/* Theme Points */}
              {theme.points.map((point, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {point.subheading}
                  </h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    {point.details.map((detail, detailIdx) => (
                      <li key={detailIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themes;
