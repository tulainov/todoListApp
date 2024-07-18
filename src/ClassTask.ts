import {Task} from "./Task";

export class ClassTask implements Task {

    id: string;
    taskName: string;
    description: string;
    completed: boolean;
    doneTasks: Task[];
    undoneTasks: Task[];
    allTasks: Task[];


    constructor (id: string, taskName: string,
              description: string) {
        this.id = id;
        this.taskName = taskName;
        this.description = description;
        this.completed = false;
        this.doneTasks = [];
        this.undoneTasks = [];
        this.allTasks = [];
    }


    addNew(task: Task): void {
        this.allTasks.push(task);
        this.undoneTasks.push(task);
    }



}