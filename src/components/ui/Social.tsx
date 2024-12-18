import { Instagram ,FacebookIcon, LinkedinIcon, YoutubeIcon, } from 'lucide-react';
import { BsTwitterX } from "react-icons/bs";


// Social media links array
const socials = [
  {
    icon: <FacebookIcon />,
    path: "https://www.facebook.com/share/189t34RopD/",
  },
  {
    icon: <Instagram />,
    path: "https://www.instagram.com/icief16setif/",
  },
  {
    icon: <LinkedinIcon />,
    path: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQE68IP-oZdEwQAAAZO74oGgdyksK7KyNBD-ptl95C7QswDKMyiiIvz6nXQMo51-pUXc4FM_2CWJ0NfMjMMQkennzppyWQWaRw1bdPOOhqn5RTkcjWDzjZzjgf7W_T8WTLzYBjE=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fic-ief-12b12833a%2F",
  },
  {
    icon: <YoutubeIcon />,
    path: "https://youtube.com/@icief16",
  },
  {
    icon: <BsTwitterX />,
    path: "https://x.com/icief16",
  },
];

const Social = () => {
  return (
    <div className="flex gap-6">
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white transition-all duration-200 ease-in-out transform hover:scale-110 flex justify-center items-center text-uni-green2 text-base "
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
