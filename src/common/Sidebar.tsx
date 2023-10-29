"use client";
import { LogoTextWhite } from "@/assets";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="fixed left-0 top-0 h-screen z-100 w-64 py-6 px-5 text-white bg-black/80">
      <nav className="flex flex-col justify-center items-center">
        <Image src={LogoTextWhite} className="mb-8" alt="" />
        <ul className="space-y-4 w-full">
          <li
            className={cn(
              "transition-all duration-300 text-lg hover:text-black font-medium cursor-pointer hover:bg-primary text-center py-2.5 rounded-x",
              {
                "bg-primary text-black": pathname === "/admin/showcase",
              }
            )}
          >
            <Link href="/admin/showcase">Showcase</Link>
          </li>

          <li
            className={cn(
              "transition-all duration-300 text-lg hover:text-black font-medium cursor-pointer hover:bg-primary text-center py-2.5 rounded-x",
              {
                "bg-primary text-black": pathname?.includes("/admin/projects"),
              }
            )}
          >
            <Link href="/admin/projects">Projects</Link>
          </li>
          <li
            className={cn(
              "transition-all duration-300 text-lg hover:text-black font-medium cursor-pointer hover:bg-primary text-center py-2.5 rounded-x",
              {
                "bg-primary text-black": pathname?.includes("/admin/blog"),
              }
            )}
          >
            <Link href="/admin/blog">Blogs</Link>
          </li>

          <li
            className={cn(
              "transition-all duration-300 text-lg hover:text-black font-medium cursor-pointer hover:bg-primary text-center py-2.5 rounded-x",
              {
                "bg-primary text-black": pathname === "/admin/about",
              }
            )}
          >
            <Link href="#">About</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
