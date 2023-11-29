import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ClockIcon,
  CreditCardIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "@/context";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;

  return (
    <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${fixedNavbar
        ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
        : "px-0 py-1"
        }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex items-center gap-1 justify-end">
        <IconButton
          variant="text"
          color="blue-gray"
          className="grid xl:hidden"
          onClick={() => setOpenSidenav(dispatch, !openSidenav)}
        >
          <Bars3Icon strokeWidth={3} className="h-7 w-7 text-blue-gray-500" />
        </IconButton>
        <Link to="/auth/sign-in">
          <Button
            variant="text"
            color="blue-gray"
            className="hidden items-center gap-1 px-4 py-2 xl:flex text-md"
            size="lg"
          >
            <UserCircleIcon className="h-7 w-7 text-blue-gray-500" />
            Sign In
          </Button>
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
          >
            <UserCircleIcon className="h-7 w-7 text-blue-gray-500" />
          </IconButton>
        </Link>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
