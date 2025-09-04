import { useAuth } from "@/provider/auth-context";
import type { Workspace } from "@/types";
import { Button } from "../ui/button";
import { Bell, PlusCircle } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router";
import WorkspaceAvatar from "../workspace/WorkspaceAvatar";

interface HeaderProps {
  onWorkspaceSelected: (workspace: Workspace) => void;
  selectedWorkSpace: Workspace | null;
  onCreateWorkspace: () => void;
}
const Header = ({
  onWorkspaceSelected,
  selectedWorkSpace,
  onCreateWorkspace,
}: HeaderProps) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const { workspaces } = useLoaderData() as { workspaces: Workspace[] };

  const isOnWorkspacePage = useLocation().pathname.includes("/workspace");
  const handleOnClick = (workspace: Workspace) => {
    onWorkspaceSelected(workspace);
    const location = window.location;

    if (isOnWorkspacePage) {
      navigate(`/workspaces/${workspace._id}`);
    } else {
      const basePath = location.pathname;
      navigate(`${basePath}?workspaceId=${workspace._id}`);
    }
  };
  return (
    <div className='bg-background sticky top-0 z-40 border-b'>
      <div className='flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8 py-4'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"}>
              {selectedWorkSpace ? (
                <>
                  {selectedWorkSpace.color && (
                    <WorkspaceAvatar
                      color={selectedWorkSpace.color}
                      name={selectedWorkSpace.name}
                    />
                  )}
                  <span className='font-medium'>{selectedWorkSpace?.name}</span>
                </>
              ) : (
                <span className='font-medium'>Select Workspace</span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {workspaces.length > 0 ? (
                workspaces.map((ws) => (
                  <DropdownMenuItem
                    key={ws?._id}
                    onClick={() => handleOnClick(ws)}
                  >
                    {ws.color && (
                      <WorkspaceAvatar color={ws.color} name={ws.name} />
                    )}
                    <span className='ml-2'>{ws?.name}</span>
                  </DropdownMenuItem>
                ))
              ) : (
                <DropdownMenuItem disabled>
                  No workspaces available
                </DropdownMenuItem>
              )}
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={onCreateWorkspace}>
                <PlusCircle className='mr-2 w-4 h-4' />
                Create Workspace
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='icon'>
            <Bell />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <Avatar>
                  <AvatarImage src={user?.profilePicture} alt={user?.name} />
                  <AvatarFallback className='bg-primary text-primary-foreground'>
                    {user?.name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to='/user/profile'>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout}>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;