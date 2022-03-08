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
      <h1>History</h1>
      {hisData &&
        hisData.map((item) => (
          <div>
            <h1>{item.hostName}</h1>
            <h1>{item.date}</h1>
          </div>
        ))}
    </div>
  );
};

export default History;
