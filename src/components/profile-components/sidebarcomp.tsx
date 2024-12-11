import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Home, Inbox, User, ArrowBigDown, LogOutIcon } from "lucide-react";
// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
    isActive: true,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
    isActive: false,
  },
  {
    title: "Profile",
    url: "#",
    icon: User,
    isActive: false,
  },
  {
    title: "Matches",
    url: "#",
    icon: ArrowBigDown,
    isActive: false,
  },
  {
    title: "Log-Out",
    url: "#",
    icon: LogOutIcon,
    isActive: false,
  },
];
function SidebarComp() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 space-x-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-semibold">Keerthan Kumar C</h2>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <h2 className="text-2xl font-semibold">SwipeMIT</h2>
      </SidebarFooter>
    </Sidebar>
  );
}

export default SidebarComp;
