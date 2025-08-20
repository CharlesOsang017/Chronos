import Header from "@/components/layout/Header";
import SidebarComponent from "@/components/layout/SidebarComponent";
import { Loader } from "@/components/Loader";
import { Button } from "@/components/ui/button";
import CreateWorkspace from "@/components/workspace/CreateWorkspace";
import { fetchData } from "@/lib/fetch-util";
import { useAuth } from "@/provider/auth-context";
import type { Workspace } from "@/types";
import { useState } from "react";
import { Navigate, Outlet } from "react-router";

export const clientLoader = async () => {
  try {
    const [workspaces] = await Promise.all([fetchData("/workspaces")]);
    return { workspaces };
  } catch (error) {
    console.log(error);
  }
};
const DashboarLayout = () => {
  const [isCreatingWorkspace, setIsCreatingWorkspace] = useState(false);
  const [currentWorkspace, setCurrentWorkspace] = useState<Workspace | null>(
    null
  );
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <Loader />;
  }
  if (!isAuthenticated) {
    return <Navigate to='/sign-in' />;
  }

  const handleWorkspaceSelected = (workspace: Workspace) => {
    setCurrentWorkspace(workspace);
  };
  return (
    <div className='flex h-screen w-full'>
      <SidebarComponent currentWorkspace={currentWorkspace} />
      <div className='flex flex-1 flex-col h-full'>
        <Header
          onWorkspaceSelected={handleWorkspaceSelected}
          selectedWorkSpace={currentWorkspace}
          onCreateWorkspace={() => setIsCreatingWorkspace(true)}
        />
        <main className='flex-1 overflow-y-auto h-full w-full'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-0 md:py-8 w-full h-full'>
            <Outlet />
          </div>
        </main>
      </div>
      <CreateWorkspace
        isCreatingWorkspace={isCreatingWorkspace}
        setIsCreatingWorkspace={setIsCreatingWorkspace}
      />
    </div>
  );
};

export default DashboarLayout;
