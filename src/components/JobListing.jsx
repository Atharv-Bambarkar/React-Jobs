import React from "react";
import { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  const [show, setShow] = useState(false);

  let description = job.description;
  if (!show && description.length > 100) {
    description = description.substring(0, 100) + "...";
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{job.type}</div>
            <h3 className="text-xl font-bold">{job.title}</h3>
          </div>

          <div className="mb-5">{description}</div>
          <button
            onClick={() => setShow(!show)}
            className="text-cyan-500 mb-5 hover:text-cyan-600"
          >
            {show ? "Read Less" : "Read More"}
          </button>

          <h3 className="text-cyan-500 mb-2">{job.salary} / Year</h3>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <SlLocationPin className="inline mr-1 mb-1" />
              {job.location}
            </div>
            <Link
              to={`/jobs/${job.id}`}
              className="h-[36px] bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListing;
