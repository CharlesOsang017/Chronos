import type { SubTask } from "@/types";
import { Checkbox } from "../ui/checkbox";
import { sub } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  useAddSubTaskMutation,
  useUpdateSubTaskMutation,
} from "@/hooks/use-task";
import { toast } from "sonner";

const SubTaskDetails = ({
  subTasks,
  taskId,
}: {
  subTasks: SubTask[];
  taskId: string;
}) => {
  const [newSubTask, setNewSubTask] = useState("");
  const { mutate: addSubTask, isPending } = useAddSubTaskMutation();
  const { mutate: updateSubTask, isPending: isUpdating } =
    useUpdateSubTaskMutation();
  const handleToggleTask = (subTaskId: string, checked: boolean) => {
    updateSubTask(
      { taskId, subTaskId, completed: checked },
      {
        onSuccess: () => {
          toast.success("Sub Task updated successfully");
        },
        onError: (error: any) => {
          const errorMessage = error?.response?.data?.message;
          toast.error(errorMessage || "Something went wrong");
        },
      }
    );
  };
  const handleAddSubTask = () => {
    addSubTask(
      { taskId, title: newSubTask },
      {
        onSuccess: () => {
          setNewSubTask("");
          toast.success("Sub Task added successfully");
        },
        onError: (error: any) => {
          const errorMessage = error?.response?.data?.message;
          toast.error(errorMessage || "Something went wrong");
        },
      }
    );
  };

  console.log("subTasks", subTasks);
  return (
    <div>
      <h3 className='text-sm font-medium text-muted-foreground mb-0'>
        Sub Tasks
      </h3>
      <div className='space-y-2 mb-4'>
        {subTasks.length > 0 ? (
          subTasks.map((subTask) => (
            <div key={subTask._id} className='flex items-center space-x-2'>
              <Checkbox
                id={subTask._id}
                checked={subTask.completed}
                onCheckedChange={(checked) =>
                  handleToggleTask(subTask._id, !!checked)
                }
              />
              <label
                className={cn(
                  "text-sm",
                  subTask.completed ? "line-through text-muted-foreground" : ""
                )}
              >
                {subTask.title}
              </label>
            </div>
          ))
        ) : (
          <div className='text-sm text-muted-foreground'>No subtasks found</div>
        )}
      </div>
      <div className='flex'>
        <Input
          placeholder='Add a sub task'
          value={newSubTask}
          onChange={(e) => setNewSubTask(e.target.value)}
          className='mr-1'
          disabled={isPending || isUpdating}
        />
        <Button disabled={isPending || isUpdating} onClick={handleAddSubTask}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default SubTaskDetails;
