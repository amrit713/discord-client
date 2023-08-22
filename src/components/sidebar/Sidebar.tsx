import { FC } from "react";
import SidebarIcon from "./SidebarIcon";
import { Plus, Disc } from "lucide-react";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="fixed top-0 px-3  bg-[#282b30] h-[100vh] space-y-4">
      <SidebarIcon
        unreadMessage={4}
        image="https://images.unsplash.com/photo-1682685797898-6d7587974771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        name="Discover"
        onClick={() => {}}
        icon={<Disc />}
      />

      <SidebarIcon
        image="https://images.unsplash.com/photo-1682685797898-6d7587974771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        name="Discover"
        onClick={() => {}}
        icon={<Disc />}
      />
      <SidebarIcon
        unreadMessage={1}
        image="https://images.unsplash.com/photo-1682685797898-6d7587974771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        name="Discover"
        onClick={() => {}}
        icon={<Disc />}
      />
      <SidebarIcon
        image="https://images.unsplash.com/photo-1682685797898-6d7587974771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        name="Discover"
        onClick={() => {}}
        speakerIcon
      />

      <SidebarIcon name="Add Server" onClick={() => {}} icon={<Plus />} />

      <SidebarIcon name="Add Server" onClick={() => {}} icon={<Disc />} />
    </div>
  );
};

export default Sidebar;
