import Image from "next/image";
import { FC, ReactNode } from "react";
import { Volume2 } from "lucide-react";

interface SidebarIconProps {
  image?: string;
  onClick: () => void;
  name: string;
  speakerIcon?: boolean;
  unreadMessage?: number;
  icon?: ReactNode;
}

const SidebarIcon: FC<SidebarIconProps> = ({
  image,
  onClick,
  name,
  speakerIcon,
  unreadMessage,
  icon,
}) => {
  return (
    <div className="relative h-14 w-14 group mx-auto ">
      <div className=" absolute bg-white h-4 w-1 group-hover:w-2 -left-3 top-[50%] translate-y-[-50%] rounded-r-[4px] group-hover:h-8 translate-all duration-300"></div>
      <div className="sidebar-icon  overflow-hidden  ">
        {icon && !image && <>{icon}</>}
        {image && (
          <Image
            src={image}
            alt={name}
            objectFit="cover"
            layout="fill"
            className="overflow-hidden"
          />
        )}
      </div>
      <span className="sidebar-tooltip group-hover:scale-100">{name}</span>

      {speakerIcon && (
        <div className="absolute   top-[2px] -right-[2px] text-white bg-gray-800 rounded-full p-[2px]  ">
          <Volume2 size={14} />
        </div>
      )}
      {unreadMessage && (
        <div className="absolute h-5 w-5  bottom-0 -right-1 text-white bg-red-600 rounded-full p-1 text-center text-xs font-semibold">
          {unreadMessage}
        </div>
      )}
    </div>
  );
};

export default SidebarIcon;
