import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        </Route>
      
      </Route>
    
  )
);

const App = () => {
  return (
    <div className="w-full bg-[#070624] min-h-[100vh]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;