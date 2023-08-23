"use client";

import Image from "next/image";
import { FC, ReactNode } from "react";

interface AvatarProps {
  src?: string;
  children?: ReactNode;
  className?: string;
}

const Avatar: FC<AvatarProps> = ({ src, children, className }) => {
  return (
    <div
      className={`flex items-center justify-center relative rounded-[99px] h-[48px] w-[48px] overflow-hidden group-hover:rounded-xl transition-all duration-200 ease-in-out text-green-600 group-hover:text-white group-hover:bg-green-600 ${className}`}
    >
      {src && (
        <Image src={src} alt={"avatar image"} objectFit="cover" layout="fill" />
      )}

      {children}
    </div>
  );
};

export default Avatar;
