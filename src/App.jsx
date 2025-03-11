import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";
import LoaderPage from "./pages/LoaderPage";

function App() {
  return (
    <div className="bg-background text-white">
      <Toaster />
      <Routes>
        <Route
          index
          element={
            <LoaderPage>
              <Homepage />
            </LoaderPage>
          }
        />
        <Route
          path="project/:id"
          index
          element={
            <LoaderPage>
              <CaseStudy />
            </LoaderPage>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
