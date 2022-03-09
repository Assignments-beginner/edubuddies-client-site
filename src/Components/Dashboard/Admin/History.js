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
        <table className="border-collapse border border-slate-400 ...">
          <thead>
            <tr>
              <th className="border border-slate-300 ...">IP Address</th>
              <th className="border border-slate-300 ...">Name</th>
              <th className="border border-slate-300 ...">Email</th>
              <th className="border border-slate-300 ...">Date</th>
              <th className="border border-slate-300 ...">Method</th>
              <th className="border border-slate-300 ...">Original URL</th>
              <th className="border border-slate-300 ...">Host Name</th>
            </tr>
          </thead>
          <tbody>
            {hisData &&
              hisData.map((item) => (
                <tr>
                  <td className="border border-slate-300 ...">
                    {item?.ipAddress}
                  </td>
                  <td className="border border-slate-300 ...">
                    {item?.data?.name}
                  </td>
                  <td className="border border-slate-300 ...">
                    {item?.data?.email}
                  </td>
                  <td className="border border-slate-300 ...">{item?.date}</td>
                  <td className="border border-slate-300 ...">
                    {item?.method}
                  </td>
                  <td className="border border-slate-300 ...">
                    {item?.originalURL}
                  </td>
                  <td className="border border-slate-300 ...">
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
