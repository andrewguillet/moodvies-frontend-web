import {
  Cloud,
  Github,
  Laptop,
  LifeBuoy,
  LogOut,
  History,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logout } from "../../reducers/user";
export function Setting() {
  const router = useRouter();

  function handleHistory() {
    router.push(`/profile/history`);
  }
  function handleInformations() {
    router.push(`/profile/informations`);
  }
  function handlePlatforms() {
    router.push(`/profile/platforms`);
  }

  const dispatch = useDispatch();

  function gotoHomePage() {
    dispatch(logout());
    router.push(`/`);
  }

  return (
    <DropdownMenu className="">
      <DropdownMenuTrigger asChild>
        <Button variant="settingButton">Settings</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => handleInformations()}>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleHistory()}>
            <History className="mr-2 h-4 w-4" />
            <span>History</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handlePlatforms()}>
            <Laptop className="mr-2 h-4 w-4" />
            <span>Plateforms</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Cloud className="mr-2 h-4 w-4" />
          <span>IA</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => gotoHomePage()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
