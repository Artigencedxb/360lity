"use client";
import { LogoTextWhite } from "@/assets";
import { useAuth } from "@/store/use-auth";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  const clickHandler = () => {
    logout();
    router.push("/");
  };
  return (
    <aside className="fixed left-0 top-0 h-screen z-100 w-64 py-6 px-5 flex flex-col text-white bg-black/80">
      <nav className="flex flex-col justify-center items-center">
        <Image src={LogoTextWhite} className="mb-8" alt="" />
        <ul className="w-full">
        <Link href="/admin/showcase">
          <li
            className={cn(
              "mb-4 transition-all duration-300 text-lg hover:text-black font-medium cursor-pointer hover:bg-primary text-center py-2.5 rounded-x",
              {
                "bg-primary text-black": pathname === "/admin/showcase",
              }
            )}
          >
            Showcase
          </li>
          </Link>
          <Link href="/admin/projects">
          <li
            className={cn(
              "mb-4 transition-all duration-300 text-lg hover:text-black font-medium cursor-pointer hover:bg-primary text-center py-2.5 rounded-x",
              {
                "bg-primary text-black": pathname?.includes("/admin/projects"),
              }
            )}
          >
           Projects
          </li>
          </Link>
             <Link href="/admin/blog">
          <li
            className={cn(
              "mb-4 transition-all duration-300 text-lg hover:text-black font-medium cursor-pointer hover:bg-primary text-center py-2.5 rounded-x",
              {
                "bg-primary text-black": pathname?.includes("/admin/blog"),
              }
            )}
          >
         Blogs
          </li>
          </Link>
          <Link href="/admin/about-us">
          <li
            className={cn(
              "mb-4 transition-all duration-300 text-lg hover:text-black font-medium cursor-pointer hover:bg-primary text-center py-2.5 rounded-x",
              {
                "bg-primary text-black": pathname === "/admin/about-us",
              }
            )}
          >
            About
          </li>
          </Link>
          <Link href="/admin/contactus">
          <li
            className={cn(
              "mb-4 transition-all duration-300 text-lg hover:text-black font-medium cursor-pointer hover:bg-primary text-center py-2.5 rounded-x",
              {
                "bg-primary text-black": pathname === "/admin/contactus",
              }
            )}
          >
           Contact
          </li>
          </Link>
        </ul>
      </nav>
      <div className="flex justify-center w-full mt-auto">
        <button
          onClick={clickHandler}
          className="flex items-center ml-12 mx-auto gap-2 w-full"
        >
          Sign out <ArrowLeftOnRectangleIcon className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
