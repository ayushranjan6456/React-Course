import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/http";

function App() {
  const [tasks, setTasks] = useState([]);

  //using usehttp custom hook and destructuring the object the aliasing the 3rd result as fetchTasks

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (tasks) => {
      const loadedTasks = [];

      for (const taskKey in tasks) {
        loadedTasks.push({ id: taskKey, text: tasks[taskKey].text });
      }

      setTasks(loadedTasks);
    };
    fetchTasks(
      {
        url: "https://react-http-9a06a-default-rtdb.firebaseio.com/tasks.json",
        method: "GET",
      },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
