import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Users from "./components/User/Users";
import { TaskProvider } from "./components/context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id/:name" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;