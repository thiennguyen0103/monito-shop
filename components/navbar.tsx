import { headerNavigation } from "@/constants/navigation";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="hidden items-center justify-center gap-12 md:flex">
      {headerNavigation.map((navigation) => (
        <Link
          href={navigation.path}
          key={navigation.id}
          className="font-semibold text-primary"
        >
          {navigation.title}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
