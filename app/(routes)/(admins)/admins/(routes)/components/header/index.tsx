"use client";

import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";
import useGetMountStatus from "@/hooks/useGetMountStatus";
import ThemeToggle from "./ThemeToggle";
import NavMenuToggle from "./NavMenuToggle";
import Notifications from "./Notifications";
import Profile from "./Profile";

export default function Header() {
  const mounted = useGetMountStatus();

  return (
    <header className="sticky top-0 left-0 w-full bg-popover py-4 shadow-sm z-40">
      <Container>
        <div className="flex justify-between">
          {mounted ? (
            <NavMenuToggle />
          ) : (
            <Skeleton className="size-10 rounded-full" />
          )}

          <div className="flex items-center gap-x-2 ml-auto">
            {mounted ? (
              <ThemeToggle />
            ) : (
              <Skeleton className="size-10 rounded-full" />
            )}

            <Notifications />
            <Profile />
          </div>
        </div>
      </Container>
    </header>
  );
}
