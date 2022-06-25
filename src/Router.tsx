import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { NotFound } from "./pages/NotFound";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
      <Route path="*" element={<NotFound />} />

      {/* <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate replace to="/404" />} /> */}
    </Routes>
  )
}