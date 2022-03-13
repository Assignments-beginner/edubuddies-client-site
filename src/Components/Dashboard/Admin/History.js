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
      dispatch(addHistoryData(logData));
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
    <div>
      <h1 className="text-4xl">Live History {hisData.length}</h1>
      <div>
        <table className="min-w-full divide-y divide-red-300 border border-red-300">
          <thead className="bg-gray-800">
            <tr>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                IP Address
              </th>
              {/* <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                Name
              </th>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                Email
              </th> */}
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                Date
              </th>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                Time
              </th>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                Method
              </th>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                Original URL
              </th>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                Host Name
              </th>
            </tr>
          </thead>
          <tbody className="bg-whwhitespace-nowrap text-gray-600 border border-red-300">
            {hisData &&
              hisData.slice(0, 30).map((item) => (
                <tr>
                  <td className="whitespace-nowrap text-gray-600 border border-red-300">
                    {item?.ipAddress}
                  </td>
                  {/* <td className="whitespace-nowrap text-gray-600 border border-red-300">
                    {item?.data?.name}
                  </td>
                  <td className="whitespace-nowrap text-gray-600 border border-red-300">
                    {item?.data?.email}
                  </td> */}
                  <td className="whitespace-nowrap text-gray-600 border border-red-300">
                    {item?.date}
                  </td>
                  <td className="whitespace-nowrap text-gray-600 border border-red-300">
                    {item?.time}
                  </td>
                  <td className="whitespace-nowrap text-gray-600 border border-red-300">
                    {item?.method}
                  </td>
                  <td className="whitespace-nowrap text-gray-600 border border-red-300">
                    {item?.originalURL}
                  </td>
                  <td className="whitespace-nowrap text-gray-600 border border-red-300">
                    {item?.hostName}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
