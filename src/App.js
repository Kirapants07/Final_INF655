import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import TaskListPage from './components/pages/TaskListPage';
import { TaskProvider } from "./components/context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasklist" element= {<TaskListPage />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;