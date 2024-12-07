import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import JobPage from "./Pages/JobPage";
import NotFoundPage from "./Pages/NotFoundPage";
import JobsPage, { jobLoader } from "./Pages/JobsPage";
import AddJobPage from "./Pages/AddJobPage";
import EditJobPage from "./Pages/EditJobPage";

const App = () => {
  //ADD NEW JOB
  const addJob = async (newJob) => {
    const response = await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // DELETE JOB
  const deleteJob = async (id) => {
    const response = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  //UPDATE JOB
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/jobs/:id"
          element={<JobsPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
      </Route>
    )
  );

  return <RouterProvider router={Router} />;
};

export default App;
