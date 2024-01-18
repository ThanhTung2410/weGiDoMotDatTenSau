import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Form from "../pages/Form";
import { CollectionList } from "../components/Collections/CollectionList";
import { LandingPage } from "../components/LandingPage";

export default function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="collections" element={<CollectionList />}>
          <Route path="add" element={<Form />} />
        </Route>
        <Route path="collections/:id" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
