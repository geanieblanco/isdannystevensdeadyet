import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Dashboard, Authentication, Landing } from './pages';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} >
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/auth' element={<Authentication/>} />
    </Routes>
  </BrowserRouter>
);
