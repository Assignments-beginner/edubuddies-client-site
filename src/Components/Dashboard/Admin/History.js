import React, { useEffect, useState } from "react";
import initializeFirebase from "../../../Firebase/firebase.init";
import {
  doc,
  onSnapshot,
  getFirestore,
  initializeFirestore,
  collection,
  getDocs,
} from "firebase/firestore";

initializeFirebase();

const History = () => {
  const [hisData, setHisData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const colRef = collection(db, "history");

    onSnapshot(colRef, (doc) => {
      let logdData = [];
      doc.forEach((i) => {
        // doc.data() is never undefined for query doc snapshots
        logdData.push(i.data());
      });
      logdData.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      setHisData(logdData);
    });
  }, []);

  //   const fireBaeData = async () => {
  //     const querySnapshot = await getDocs(collection(db, "history"));
  //     let logdData = [];
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       logdData.push(doc.data());
  //     });
  //     // setHisData(logdData);
  //   };

  console.log(hisData);
  return (
    <div>
      <h1 className="text-4xl">Live History</h1>
      <div>
        <table className="min-w-full divide-y divide-red-300 border border-red-300">
          <thead className="bg-gray-800">
            <tr>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                IP Address
              </th>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                Name
              </th>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                Email
              </th>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                Date
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
              hisData.map((item) => (
                <tr>
                  <td className="whitespace-nowrap text-gray-600 border border-red-300">
                    {item?.ipAddress}
                  </td>
                  <td className="whitespace-nowrap text-gray-600 border border-red-300">
                    {item?.data?.name}
                  </td>
                  <td className="whitespace-nowrap text-gray-600 border border-red-300">
                    {item?.data?.email}
                  </td>
                  <td className="whitespace-nowrap text-gray-600 border border-red-300">
                    {item?.date}
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
