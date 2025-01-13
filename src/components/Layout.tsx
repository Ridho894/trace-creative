import cx from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";
import { BiMenu } from "react-icons/bi";
import { IoIosClose as CloseIcon } from "react-icons/io";

import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface LayoutProps {
  children: React.ReactNode;
}

const menus = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About Us",
    path: "/about-us",
  },
  {
    id: 3,
    name: "Products",
    path: "/products",
  },
  {
    id: 4,
    name: "Clients",
    path: "/clients",
  },
  {
    id: 5,
    name: "Contact Us",
    path: "/contact-us",
  },
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const firstPath = router.pathname.split("/")[1];
  console.log(firstPath, "firstPath");

  const [sidenavOpen, setSidenavOpen] = useState<boolean>(false);

  const sidenavRef = useOnclickOutside(
    () => {
      setSidenavOpen(false);
    },
    {
      disabled: !sidenavOpen,
    }
  );

  return (
    <section className={cx("", poppins.className)}>
      <header className="w-full fixed bg-opacity-80 top-0 z-10 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img src="/logo.png" alt="Logo" className="object-contain h-20" />
          {/* DESKTOP */}
          <div className="hidden items-center space-x-8 xl:flex">
            {menus.map((menu, i) => (
              <div key={i}>
                <Link
                  href={menu.path}
                  passHref
                  className="text-sub2 cursor-pointer"
                >
                  {menu.name}
                </Link>
              </div>
            ))}
          </div>
          {/* MOBILE */}
          <div className="block xl:hidden pr-4">
            <button onClick={() => setSidenavOpen(true)}>
              <BiMenu className="w-6 h-6" />
            </button>
          </div>
          <div
            className={cx("fixed inset-0 z-10 bg-black/30", {
              visible: sidenavOpen,
              invisible: !sidenavOpen,
            })}
          >
            <div
              ref={sidenavRef}
              className={cx(
                "absolute right-0 h-screen w-[85%] max-w-[360px] bg-white transition-all duration-150 ease-in-out",
                {
                  "translate-x-full": !sidenavOpen,
                }
              )}
            >
              <div className="space-y-4 p-6 pb-4">
                <div className="flex justify-between">
                  <div>
                    <Link href={"/"} passHref className="flex cursor-pointer">
                      <img
                        src={"/logo.png"}
                        className="mx-auto h-9"
                        alt="DXT 360"
                      />
                    </Link>
                  </div>
                  <div>
                    <button
                      className="p-2"
                      onClick={() => setSidenavOpen(false)}
                    >
                      <CloseIcon className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="space-y-2 p-4 pr-0">
                  {menus.map((menu) => {
                    const active = firstPath === menu.path.split("/")[1];
                    return (
                      <Link
                        onClick={() => setSidenavOpen(false)}
                        key={menu.path}
                        href={menu.path}
                        className={cx(
                          "flex items-center gap-2 rounded-l-full p-3 px-5 text-left text-sub2 font-medium text-base-600",
                          {
                            "bg-gray-400 !text-white": active,
                          }
                        )}
                      >
                        <span>{menu.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}
    </section>
  );
};
