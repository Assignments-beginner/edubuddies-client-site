import React, { useEffect, useState } from "react";
import initializeFirebase from "../../../Firebase/firebase.init";
import {
  doc,
  onSnapshot,
  getFirestore,
  initializeFirestore,
  collection,
  getDocs,
  orderBy,
} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { addHistoryData } from "../../../Redux/edubuddySlice";

initializeFirebase();

const History = () => {
  const [hisData, setHisData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const db = getFirestore();
    const colRef = collection(db, "history");
    orderBy("timestamp");

    onSnapshot(colRef, (doc) => {
      let logData = [];

      doc.forEach((i) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(i.data());
        logData.push(i.data());
      });

      logData.sort(function(a, b) {
        return b.now - a.now;
      });
      setHisData(logData);
    });
  }, []);
  console.log(hisData);
  //   const fireBaeData = async () => {
  //     const querySnapshot = await getDocs(collection(db, "history"));
  //     let logdData = [];
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       logdData.push(doc.data());
  //     });
  //     // setHisData(logdData);
  //   };
  console.log(new Date());

  return (
    <div className="container mx-auto px-4 md:px-9">
      <div className="mb-8 mt-4">
        <h3 className="text-3xl font-semibold text-center text-red-500">
          Live History {hisData.length}
        </h3>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"></div>

          <div className="shadow overflow-hidden border-b border-red-200 sm:rounded-lg mx-auto tables">
            <table className="min-w-full divide-y divide-red-200">
              <thead className="bg-black font-bold">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider"
                  >
                    IP Address
                  </th>
                  {/* <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                Name
              </th>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                Email
              </th> */}
                  <th
                    scope="col"
                    className="px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Method
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Original URL
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center border-r-2 text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Host Name
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-red-200">
                {hisData &&
                  hisData.slice(0, 30).map((item) => (
                    <tr>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        {item?.ipAddress}
                      </td>
                      {/* <td className="whitespace-nowrap text-gray-600 border border-red-300">
                    {item?.data?.name}
                  </td>
                  <td className="whitespace-nowrap text-gray-600 border border-red-300">
                    {item?.data?.email}
                  </td> */}
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        {item?.date}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        {item?.time}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        {item?.method}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        {item?.originalURL}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        {item?.hostName}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
