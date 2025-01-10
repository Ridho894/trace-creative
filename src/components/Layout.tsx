import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";

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
  return (
    <section className={cx("", poppins.className)}>
      <header className="w-full fixed bg-opacity-80 top-0 z-10 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img src="/logo.png" alt="Logo" className="object-contain h-20" />
          <div className="flex items-center space-x-8">
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
        </div>
      </header>
      {children}
    </section>
  );
};
