"use client";

import { Menu } from "lucide-react";


import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import useGetWindowWidth from "@/hooks/useGetWindowWidth";
import SidebarContent from "../sidebar/SidebarContent";
import { useAppContext } from "@/contexts/App";

export default function NavMenuToggle() {
  const windowWidth = useGetWindowWidth();
  const { toggleSidebar } = useAppContext();

  if (!windowWidth) return null;

  if (windowWidth >= 1024) {
    return (
      <Button variant="ghost" size="icon" onClick={toggleSidebar}>
        <Menu />
      </Button>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-full !max-w-sidebar bg-popover p-0"
      >
        <SidebarContent />
      </SheetContent>
    </Sheet>
  );
}
