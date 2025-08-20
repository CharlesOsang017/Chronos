import type { CreateProjectFormData } from "@/components/project/CreateProjectDialog"
import { fetchData, postData } from "@/lib/fetch-util"
import { queryClient } from "@/provider/react-query-provider"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const useCreateProjectMutation = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: { projectData: CreateProjectFormData; workspaceId: string }) => postData(`/projects/${data.workspaceId}/create-project`, data.projectData),
        onSuccess: (data: any) => {
            queryClient.invalidateQueries({ queryKey: ['workspace', data.workspace] })
        }
    })
}

export const useProjectQuery = (projectId: string)=>{
    return useQuery({
        queryKey: ['project', projectId],
        queryFn:  () => fetchData(`/projects/${projectId}/tasks`),
    })

}