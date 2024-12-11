import { Instagram ,Facebook, LinkedinIcon, YoutubeIcon} from 'lucide-react';

// Social media links array
const socials = [
  {
    icon: <Facebook />,
    path: "https://www.facebook.com/profile.php?id=100095074632230",
  },
  {
    icon: <Instagram />,
    path: "https://www.instagram.com/universite_ferhat_abbas_setif/",
  },
  {
    icon: <LinkedinIcon />,
    path: "https://www.linkedin.com/school/universite-ferhat-abbas-setif/posts/?feedView=all",
  },
  {
    icon: <YoutubeIcon />,
    path: "https://www.youtube.com/@-ferhatabbasuniversitysetif1dz",
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
          className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-[#0f5a08] transition-all duration-500"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
