import React from 'react';
import { CameraIcon ,Facebook} from 'lucide-react';

// Social media links array
const socials = [
  { icon: <Facebook />, path: 'https://github.com/jacoubtech' },
//   { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/fortas-n-158717109/' },
//   { icon: <FaYoutube />, path: 'https://www.youtube.com/@designup8141' },
//   { icon: <FaInstagram />, path: 'https://www.instagram.com/e.parker8520/profilecard/?igsh=bmFkY2FweGlsa3Uz' },
//   { icon: <FaFacebook />, path: 'https://www.facebook.com/profile.php?id=100091212901350' }
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
          className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
