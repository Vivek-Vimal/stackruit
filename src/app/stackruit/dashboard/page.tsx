"use client";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { globalDB } from "@/app/page";
import ViewDataComponent from "./components/viewDataComponent";
import Form from "./components/formDataComponent";
import Header from "./components/header";

export interface singleData {
  id?: string;
  name?: string;
  description?: string;
  completed?: boolean;
}

export type eachData = Array<singleData>;

const Dashboard = () => {
  const [data, setData] = useState<eachData>([]);
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const [change, setChange] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [prevVal, setPrevVal] = useState<string | singleData>({});
  const [checked, setChecked] = useState<boolean>(false);

  const ref = collection(globalDB, "Tasks");

  const addForm = () => {
    setFormVisible(() => true);
  };

  const onSave = (saveProp: any) => {
    saveProp.preventDefault();
    console.log(saveProp?.target[2]?.value)
    const commonObj = {
      name: saveProp?.target[0]?.value,
      description: saveProp?.target[1]?.value,
      completed: saveProp?.target[2]?.value,
    };
    const commonFun = () => {
      saveProp?.target.reset();
      setFormVisible(() => false);
      setChange(() => !change);
    };
    if (
      saveProp?.target[0]?.value === "" ||
      saveProp?.target[1]?.value === ""
    ) {
      alert("Please fill all the fields");
    } else if (editMode) {
      const delRef: any = doc(globalDB, "Tasks", prevVal?.id);
      updateDoc(delRef, commonObj).then(() => {
        setEditMode(() => false);
        commonFun();
      });
    } else {
      addDoc(ref, commonObj)
        .then(() => {
          commonFun();
        })
        .catch((error) => {
          console.log("ERROR", error);
        });
    }
  };

  const onCancel = () => {
    setEditMode(() => false);
    setFormVisible(() => false);
  };

  const onDelete = (deleteProp: any) => {
    const delRef: any = doc(globalDB, "Tasks", deleteProp);
    deleteDoc(delRef).then(() => {
      setChange(() => !change);
    });
  };

  const onEdit = (editProp: any) => {
    setEditMode(() => true);
    setFormVisible(() => true);
    setPrevVal(editProp);
  };

  useEffect(() => {
    getDocs(ref)
      .then((props: any) => {
        let dashBoardData: any = props?.docs;
        let arr: eachData = [];
        setData(() => []);
        setData((prev) => {
          dashBoardData?.map((item: { id: any; data: any }) =>
            arr?.push({ ...item?.data(), id: item?.id })
          );
          return [...arr, ...prev];
        });
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  }, [change]);

  useEffect( () => {
    console.log(checked,'vfv');
  },[checked] )

  const headerProp = {
    addForm,
    editMode,
  };

  const formProp = {
    onSave,
    onCancel,
    editMode,
    prevVal,
    checked,
    setChecked,
  };

  const viewProp = {
    onDelete,
    onEdit,
    editMode,
  };

  return (
    <section className="flex flex-col h-screen p-8 items-center">
      <Header {...headerProp} />
      {formVisible && <Form {...formProp} />}
      {data && data?.length > 0 ? (
        data?.map((item) => (
          <ViewDataComponent
            id={item?.id}
            name={item?.name}
            description={item?.description}
            completed={item?.completed}
            key={item?.id}
            {...viewProp}
          />
        ))
      ) : (
        <p className="text-center mt-20">No Task, Add task to view</p>
      )}
    </section>
  );
};

export default Dashboard;
