import React from 'react';
import { Instagram ,Facebook, LinkedinIcon, YoutubeIcon} from 'lucide-react';

// Social media links array
const socials = [
  { icon: <Facebook />, path: 'https://github.com/jacoubtech' },
  { icon: <Instagram />, path: 'https://github.com/jacoubtech' },
  { icon: <LinkedinIcon />, path: 'https://github.com/jacoubtech' },
  { icon: <YoutubeIcon />, path: 'https://github.com/jacoubtech' },

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
          className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-[#0f5a08] transition-all duration-500"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
