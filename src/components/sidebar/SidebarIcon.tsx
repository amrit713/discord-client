import Image from "next/image";
import { FC, ReactNode } from "react";
import { Volume2 } from "lucide-react";
import Link from "next/link";
import Avatar from "../ui/Avatar";

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
    <Link
      href="/"
      className="group relative z-10 h-12 w-12 bg-foreground bg-cover transition-all hover:shadow-xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-[1px] rounded-[15px] mx-auto mb-2 flex items-center justify-center text-white sidebar-icon"
    >
      <div className="absolute -left-4 w-[9px]  scale-0 rounded-lg bg-white transition-all group-hover:scale-100 bottom-1 top-1" />
      {unreadMessage && (
        <div className=" absolute -bottom-1 -right-1 align-bottom transition-all min-w-[28px] text-center rounded-full p-[2px]  text-[10px] font-bold border-4  border-gray-950 bg-red-500 text-white scale-100 opacity-100 pointer-events-none z-10">
          {unreadMessage >= 99 ? "99+" : unreadMessage}
        </div>
      )}

      {speakerIcon && (
        <div className="absolute -top-1 -right-1 align-bottom transition-all text-center rounded-full p-[2px] text-[11px]  font-bold border-4  border-gray-950  text-white scale-100 opacity-100 bg-gray-600 pointer-events-none z-10">
          <Volume2 size={14} />
        </div>
      )}

      {image && <Avatar src={image} />}
      {icon && !image && <Avatar className="bg-gray-700">{icon}</Avatar>}

      <span className=" absolute  w-auto p-2 m-2 min-w-max left-20 rounded-md shadow-md text-white bg-gray-800 text-xs font-bold transition-all duration-200 scale-0 origin-center group-hover:scale-100">
        {" "}
        {name}
      </span>
    </Link>
  );
};

export default SidebarIcon;
