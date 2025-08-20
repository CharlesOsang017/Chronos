export interface User {
    _id: string,
    email: string,
    name: string,
    createdAt: Date,
    isEmailVerified: boolean;
    updatedAt: Date,
    profilePicture?: string;
}

export interface Workspace {
    _id: string,
    name: string,
    description?: string,
    owner: User | string,
    color: string,
    members: {
        user: User;
        role: "admin" | "member" | 'owner' | "viewer",
        joinedAt: Date;
    }[],
    createdAt: Date;
    updatedAt: Date;
}

export enum ProjectStatus {
    PLANNING = "Planning",
    IN_PROGRESS = "In Progress",
    ON_HOLD = "On Hold",
    COMPLETED = "Completed",
    CANCELLED = "Cancelled",
}

export interface Project {
    _id: string,
    title: string,
    description?: string,
    workspace: Workspace,
    status: ProjectStatus,
    startDate: Date,
    dueDate: Date,
    progress: number,
    tasks: Task[],
    createdAt: Date,
    updatedAt: Date;
    isArchived: boolean;
    members: {
        user: User;
        role: "admin" | "member" | 'owner' | "viewer",
    }[],
}


export interface SubTask {
    _id: string,
    title: string,
    completed: boolean,
    createdAt: Date,

}
export type TaskStatus = "To Do" | "In Progress" | "Done";
export type TaskPriority = "Low" | "Medium" | "High";

export interface Task {
    _id: string,
    title: string,
    description?: string,
    project: Project,
    status: TaskStatus,
    priority: TaskPriority,
    assignee: User[] | string,
    assignees: User[],
    createdBy: User | string,
    watchers?: User[],
    dueDate: Date,
    subtask?: SubTask[],
    attachments?: Attachment[],
    isArchived: boolean,
    createdAt: Date,
    updatedAt: Date;
}

export interface Attachment {
    _id: string,
    fileName: string,
    fileUrl: string,
    fileType: string,
    fileSize: number,
    uploadedBy: string,
    uploadedAt: Date,
}

export interface MemberProps {
    [x: string]: any;
    _id: string,
    user: User,
    role: "admin" | "member" | 'owner' | "viewer",
    joinedAt: Date
}

export enum ProjectMemberRole {
    MANAGER = 'manager',
    CONTRIBUTOR = 'contributor',
    VIEWER = 'viewer'
}

export type ResourceType =
    | "Task"
    | "Project"
    | "Workspace"
    | "Comment"
    | "User"

export type ActionType =
    | "created_task"
    | "updated_task"
    | "created_subtask"
    | "updated_subtask"
    | "completed_task"
    | "created_project"
    | "updated_project"
    | "completed_project"
    | "created_workspace"
    | "updated_workspace"
    | "added_comment"
    | "added_member"
    | "removed_member"
    | "joined_workspace"
    | "added_attachment"


export interface Activity {
    _id: string,
    user: User,
    action: ActionType;
    resourceType: ResourceType;
    resourceId: string;
    details: any;
    createdAt: Date,
}

export interface CommentReaction {
    emoji: string,
    user: User;
}

export interface Comment {
    _id: string,
    text: string,
    author: User,
    createdAt: Date,
    reactions?: CommentReaction[],
    attachments?: {
        fileName: string,
        fileUrl: string,
        fileType?: string,
        fileSize?: number,
    }
}

export interface StatsCardProps {
    totalProjects: number;
    totalTasks: number;
    totalProjectInProgress: number;
    totalTaskCompleted: number;
    totalTaskTodo: number;
    totalTaskInProgress: number;
}

export interface TaskTrendsData {
    name: string;
    completed: number;
    inProgress: number;
    todo: number;
}

export interface TaskPriorityData {
    name: string;
    value: number;
    color: string;
}

export interface ProjectStatusData {
    name: string;
    value: number;
    color: string;
}

export interface workspaceProductivityData {
    name: string;
    completed: number;
    total: number
}