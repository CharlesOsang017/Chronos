import type {
  ProjectStatusData,
  StatsCardProps,
  TaskPriorityData,
  TaskTrendsData,
  workspaceProductivityData,
} from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ChartBarBig, ChartLine, ChartPie } from "lucide-react";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";

interface StatisticsChartsProps {
  stats: StatsCardProps;
  taskTrendsData: TaskTrendsData[];
  projectStatusData: ProjectStatusData[];
  taskPriorityData: TaskPriorityData[];
  workspaceProductivityData: workspaceProductivityData[];
}

const StatisticsCharts = ({
  stats,
  taskTrendsData,
  projectStatusData,
  taskPriorityData,
  workspaceProductivityData,
}: StatisticsChartsProps) => {
  console.log("taskTrendsData", taskTrendsData);
  console.log("projectStatusData", projectStatusData); // Added for debugging

  return (
    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8'>
      <Card className='lg:col-span-2'>
        <CardHeader className='flex flex-row items-center justify-between pb-2'>
          <div className='space-y-0.5'>
            <CardTitle className='text-base font-medium'>Task Trends</CardTitle>
            <CardDescription>Daily task status changes</CardDescription>
          </div>
          <ChartLine className='size-5 text-muted-foreground' />
        </CardHeader>
        <CardContent className='w-full'>
          <div className='min-w-[350px]'>
            <ChartContainer
              className='h-[250px]'
              config={{
                completed: { color: "#10b981" },
                inProgress: { color: "#f59e0b" },
                todo: { color: "#3b82f6" },
              }}
            >
              <LineChart data={taskTrendsData}>
                <XAxis
                  dataKey={"name"}
                  stroke='#888888'
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke='#888888'
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <CartesianGrid strokeDasharray={"3 3"} vertical={false} />
                <ChartTooltip />
                <Line
                  type='monotone'
                  dataKey={"completed"}
                  stroke='#10b981'
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type='monotone'
                  dataKey={"inProgress"}
                  stroke='#3b82f6'
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type='monotone'
                  dataKey={"todo"}
                  stroke='#6b7280'
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <ChartLegend content={<ChartLegendContent />} />
              </LineChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
      {/* project status */}
      <Card>
        <CardHeader className='flex flex-row items-center justify-between pb-2'>
          <div className='space-y-0.5'>
            <CardTitle className='text-base font-medium'>
              Project Status
            </CardTitle>
            <CardDescription>Projects status breakdown</CardDescription>
          </div>
          <ChartPie className='size-5 text-muted-foreground' />
        </CardHeader>
        <CardContent className='overflow-x-auto md:overflow-x-hidden '>
          <div className='flex justify-center items-center'>
            <ChartContainer
              className='w-[300px] h-[300px]'
              config={{
                Completed: { color: "#10b981" },
                "In Progress": { color: "#3b82f6" },
                Planning: { color: "#f59e0b" },
              }}
            >
              <PieChart>
                <Pie
                  data={projectStatusData}
                  cx='50%'
                  cy='50%'
                  dataKey='value'
                  nameKey='name'
                  innerRadius={40}
                  outerRadius={70}
                  paddingAngle={1}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  labelLine={false}
                >
                  {projectStatusData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip />
                <ChartLegend content={<ChartLegendContent />} />
              </PieChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
      {/* Task priority */}
      <Card>
        <CardHeader className='flex flex-row items-center justify-between pb-2'>
          <div className='space-y-0 5'>
            <CardTitle className='text-base font-medium'>
              Task Priority
            </CardTitle>
            <CardDescription>Task priority breakdown</CardDescription>
          </div>
        </CardHeader>

        <CardContent className='itesm-start overflow-x-auto md:overflow-x-hidden'>
          <div className='min-w-[350px]'>
            <ChartContainer
              className='h-[300px]'
              config={{
                High: { color: "#f59e0b" },
                Medium: { color: "#3b82f6" },
                Low: { color: "#10b981" },
              }}
            >
              <PieChart>
                <Pie
                  data={taskPriorityData}
                  cx='50%'
                  cy='50%'
                  dataKey='value'
                  nameKey='name'
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={1}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  labelLine={false}
                >
                  {taskPriorityData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip />
                <ChartLegend content={<ChartLegendContent />} />
              </PieChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
      {/* Workspace productivity */}

      <Card className='lg:col-span-2'>
        <CardHeader className='flex flex-row items-center justify-between pb-2'>
          <div className='space-y-0 5'>
            <CardTitle className='text-base font-medium'>
              Workspace Productivity
            </CardTitle>
            <CardDescription>Task Completion by project</CardDescription>
          </div>
          <ChartBarBig className='h-5 w-5 text-muted-foreground' />
        </CardHeader>
        <CardContent className='w-full overflow-x-auto md:overflow-x-hidden'>
          <div className='min-w-[400px]'>
            <ChartContainer
              className='h-[300px]'
              config={{
                completed: { color: "#3b82f6" },
                total: { color: "red" },
              }}
            >
              <BarChart
                data={workspaceProductivityData}
                barGap={0}
                barSize={20}
              >
                <XAxis
                  dataKey={"name"}
                  stroke='#888888'
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke='#888888'
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <CartesianGrid vertical={false} strokeDasharray='3 3' />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey='total'
                  fill='#000'
                  radius={[4, 4, 0, 0]}
                  name={"Total Tasks"}
                />
                <Bar
                  dataKey='completed'
                  fill='#3b82f6'
                  radius={[4, 4, 0, 0]}
                  name={"Completed Tasks"}
                />
                <ChartLegend content={<ChartLegendContent />} />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatisticsCharts;
