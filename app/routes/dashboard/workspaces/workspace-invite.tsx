import { Loader } from "@/components/Loader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WorkspaceAvatar from "@/components/workspace/WorkspaceAvatar";
import {
  useAcceptGeneralInviteMutation,
  useAcceptInviteByTokenMutation,
  useGetWorkspaceDetailsQuery,
} from "@/hooks/use-workspace";
import type { Workspace } from "@/types";
import { useNavigate, useParams, useSearchParams } from "react-router";
import { toast } from "sonner";

const WorkspaceInvite = () => {
  const { workspaceId } = useParams();
  const [searchParams] = useSearchParams();

  const token = searchParams.get("tk");

  const navigate = useNavigate();

  const { data: workspace, isLoading } = useGetWorkspaceDetailsQuery(
    workspaceId!
  ) as { data: Workspace; isLoading: boolean };

  const { mutate: acceptInviteByToken, isPending: acceptInviteByTokenLoading } =
    useAcceptInviteByTokenMutation();
  const { mutate: acceptGeneralInvite, isPending: acceptGeneralInviteLoading } =
    useAcceptGeneralInviteMutation();
  if (!workspaceId) {
    return <div>Workspace not found</div>;
  }
  console.log(
    "workspaceId",
    workspaceId,
    "token",
    token,
    "workspace",
    workspace
  );
  if (isLoading) {
    return (
      <div className='flex w-full h-screen items-center justify-center'>
        <Loader />
      </div>
    );
  }

  const handleAcceptInvite = () => {
    if (!workspaceId) return;

    if (token) {
      acceptInviteByToken(token, {
        onSuccess: () => {
          toast.success("Invitation accepted successfully");
          navigate(`/workspaces/${workspaceId}`);
        },
        onError: (error: any) => {
          const errorMessage =
            error?.response?.data?.message || "something went wrong";
          console.log(errorMessage);
        },
      });
    } else {
      acceptGeneralInvite(workspaceId, {
        onSuccess: () => {
          toast.success("Invitation accepted successfully");
          navigate(`/workspaces/${workspaceId}`);
        },
        onError: (error: any) => {
          const errorMessage =
            error?.response?.data?.message || "something went wrong";
          console.log(errorMessage);
        },
      });
    }
  };

  const handleDeclineInvite = () => {
    toast.info("Invitation declined successfully");
    navigate("/workspaces");
  };

  if (!workspace) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Card className='max-w-md'>
          <CardHeader>
            <CardTitle>Invalid Invitations</CardTitle>
            <CardDescription>
              This workspace invitation is invalid or has expired
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate("/workspaces")} className='w-full'>
              Go to workspaces
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <Card className='max-w-md w-full'>
        <CardHeader>
          <div className='flex items-center gap-3 mb-2'>
            <WorkspaceAvatar name={workspace.name} color={workspace.color} />
            <CardTitle>{workspace.name}</CardTitle>
          </div>
          <CardDescription>
            You have been invited to join the "<strong>{workspace.name}</strong>
            " workspace.
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          {workspace.description && (
            <p className='text-sm text-muted-foreground'>
              {workspace.description}
            </p>
          )}
          <div className='flex gap-3'>
            <Button
              variant='default'
              className='flex-1'
              onClick={handleAcceptInvite}
              disabled={
                acceptInviteByTokenLoading || acceptGeneralInviteLoading
              }
            >
              {acceptInviteByTokenLoading || acceptGeneralInviteLoading
                ? "Joining"
                : "Accept Invitation"}
            </Button>
            <Button
              variant='outline'
              className='flex-1'
              onClick={handleDeclineInvite}
              disabled={
                acceptInviteByTokenLoading || acceptGeneralInviteLoading
              }
            >
              Decline
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkspaceInvite;
