import { useState } from "react";
import { TaskItem } from "./components/TaskItem";
import { TaskControls } from "./components/TaskControls";
import { AddTaskButton } from "./components/AddTaskButton";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Lav Header Component" },
    { id: 2, text: "Opsæt stylesheet" },
    { id: 3, text: "Fix npm errors" },
  ]);

  const addTask = () => {
    const taskName = prompt("Enter task name:");
    
    if (taskName && taskName.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskName.trim(),
      };
      
      setTasks([...tasks, newTask]);
    }
  };

  const removeTask = (taskId: number) => {
    const remainingTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(remainingTasks);
  };

  const moveTaskLeft = (currentIndex: number) => {
    if (currentIndex === 0) {
      return;
    }

    const newTasks = [...tasks];
    
    const taskToMove = newTasks[currentIndex];
    const taskBefore = newTasks[currentIndex - 1];
    
    newTasks[currentIndex - 1] = taskToMove;
    newTasks[currentIndex] = taskBefore;
    
    setTasks(newTasks);
  };

  const moveTaskRight = (currentIndex: number) => {
    if (currentIndex === tasks.length - 1) {
      return;
    }

    const newTasks = [...tasks];
    
    const taskToMove = newTasks[currentIndex];
    const taskAfter = newTasks[currentIndex + 1];
    
    newTasks[currentIndex] = taskAfter;
    newTasks[currentIndex + 1] = taskToMove;
    
    setTasks(newTasks);
  };

  return (
    <>
      <main className="md:hidden min-h-screen bg-todo-yellow flex flex-col p-8">
        <header className="flex items-center justify-center mb-12">
          <h1 className="font-indie text-[40px] text-todo-dark underline decoration-2 underline-offset-4">
            TO DO
          </h1>
        </header>

        <section className="flex-1">
          <ul className="space-y-8 list-none">
            {tasks.map((task, index) => (
              <li key={task.id} className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <TaskItem text={task.text} isDesktop={false} />
                </div>
                <TaskControls
                  onMoveLeft={() => moveTaskLeft(index)}
                  onRemove={() => removeTask(task.id)}
                  onMoveRight={() => moveTaskRight(index)}
                  isDesktop={false}
                />
              </li>
            ))}
          </ul>
        </section>

        <nav className="mt-12 flex items-center justify-center gap-2">
          <AddTaskButton onClick={addTask} showAsArrow={false} />
        </nav>
      </main>

      <main className="hidden md:flex min-h-screen bg-gradient-to-b from-[#A4CDE3] to-[#1A1F22] items-center justify-center p-8">
        <article className="w-[543px] min-h-[759px] bg-todo-yellow p-12 relative">
          <header className="flex items-start justify-between mb-16">
            <h1 className="font-indie text-[64px] leading-none text-todo-dark underline decoration-2 underline-offset-4">
              TO DO
            </h1>
            <AddTaskButton onClick={addTask} showAsArrow={true} />
          </header>

          <section className="flex gap-8">
            <ul className="flex-1 space-y-8 list-none">
              {tasks.map((task) => (
                <li key={task.id}>
                  <TaskItem text={task.text} isDesktop={true} />
                </li>
              ))}
            </ul>

            <div className="w-px bg-black self-stretch" aria-hidden="true"></div>

            <nav className="flex flex-col gap-8">
              {tasks.map((task, index) => (
                <TaskControls
                  key={task.id}
                  onMoveLeft={() => moveTaskLeft(index)}
                  onRemove={() => removeTask(task.id)}
                  onMoveRight={() => moveTaskRight(index)}
                  isDesktop={true}
                />
              ))}
            </nav>
          </section>

          <nav className="absolute bottom-12 right-12 flex items-center gap-2">
            <AddTaskButton onClick={addTask} showAsArrow={false} />
          </nav>
        </article>
      </main>
    </>
  );
}

export default App;
