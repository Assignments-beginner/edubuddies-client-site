import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TeachersProfile = () => {
  const { teacherId } = useParams();
  const [singleTeacher, setSingleTeacher] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/singleTeacher/${teacherId}`)
      .then((res) => res.json())
      .then((data) => setSingleTeacher(data));
  }, []);

  return (
    <div className=" container mx-auto mt-4">
      <div className="flex flex-row">
        <div className="basis-1/4 text-left border">
          <img src={singleTeacher?.image} alt="Teachers" />
          <div className="flex justify-between px-5 py-2 bg-gray-200">
            <h4 className="text-xl">{singleTeacher?.name}</h4>
            <h4>{singleTeacher?.designation}</h4>
          </div>
          <div className="pl-5 shadow-md">
            <h4>Email: {singleTeacher?.email}</h4>
            <h4>Phone: {singleTeacher?.phone}</h4>
            <h4>Age: {singleTeacher?.age}</h4>
            <h4>Gender: {singleTeacher?.gender}</h4>
            <h4>
              Address: {singleTeacher?.address?.street},
              {singleTeacher?.address?.city},{singleTeacher?.address?.zipcode}
            </h4>
            <h4>{singleTeacher?.country}</h4>
          </div>
        </div>
        <div className="basis-3/4 ml-10 border shadow-md">
          <h4 className="text-left text-2xl p-5 font-semibold">
            About Of
            <span className="text-red-500 text-3xl">
              {" "}
              {singleTeacher?.name}
            </span>
          </h4>
          <hr />
          <div className="pl-5 pt-2 text-left">
            <p className="text-gray-500 mb-6">{singleTeacher?.about}</p>
            <h2 className="text-2xl">Skills</h2>
            <h4 className="my-6">
              {singleTeacher?.Experties?.map((expert, key) => (
                <span
                  className="mr-4 bg-gray-300 py-2 px-4 rounded-md"
                  key={key}
                >
                  {expert}
                </span>
              ))}
            </h4>
            <h2 className="text-2xl">Language</h2>
            <h4 className="my-6">
              {singleTeacher?.language?.map((lang, key) => (
                <span
                  className="mr-4 bg-gray-300 py-2 px-4 rounded-md"
                  key={key}
                >
                  {lang}
                </span>
              ))}
            </h4>
            <h2 className="text-xl mb-">
              Experience: {singleTeacher?.experinece} Years
            </h2>
            <h2 className="text-xl">
              Operation Done: {singleTeacher?.operationDone}
            </h2>
            <h2 className="text-xl">Join Date: 10-February-2020</h2>
            <h2 className="text-xl mb-4">Job Type: {singleTeacher?.type}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersProfile;
