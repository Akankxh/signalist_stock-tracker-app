'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {LogOut} from "lucide-react";
import NavItems from "@/components/NavItems";

const UserDropdown = () => {
  
  const router = useRouter();
  const handleSignOut = async () => {
        
        router.push("/sign-in");
  }

  const user = {
    name: "John Doe",
    email: "john.doe@example.com"
  };

  return (
    <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center gap-2 hover:bg-gray-800 rounded-md p-1 outline-none">
        <Avatar className="h-8 w-8">
            <AvatarImage src="..." />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name[0]}
            </AvatarFallback>
        </Avatar>
        <div className="hidden md:flex flex-col items-start">
            <span className="text-sm font-medium text-gray-400">
                {user.name}
            </span>
        </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="z-50 w-56 bg-gray-900 border-gray-700 text-gray-400">
    <DropdownMenuGroup>
        <DropdownMenuLabel>
            <div className="flex items-center gap-3 py-2">
                <Avatar className="h-10 w-10">
                    <AvatarImage src="..." />
                    <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                        {user.name[0]}
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-200">{user.name}</span>
                    <span className="text-xs text-gray-400 font-normal">{user.email}</span>
                </div>
            </div>
        </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-gray-700"/>
        <DropdownMenuItem 
            onClick={handleSignOut} 
            className="text-gray-100 font-medium focus:bg-gray-800 focus:text-yellow-500 transition-colors cursor-pointer"
        >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
        </DropdownMenuItem>
        <DropdownMenuSeparator className="sm:block hidden bg-gray-700"/>
        <nav className="sm:hidden">
            <NavItems />
        </nav>
    </DropdownMenuContent>
</DropdownMenu>
  )
}

export default UserDropdown