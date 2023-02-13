import React from "react";
import { Route, Routes } from "react-router-dom";
import { BookLayout } from "./BookLayout";
import { Books } from "./Books";
import { NewBook } from "./NewBook";

export const BookRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<Books />} />
          <Route path=":id" element={<Books />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </div>
  );
};
