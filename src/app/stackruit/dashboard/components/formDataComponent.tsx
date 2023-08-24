"use client";
import React from "react";

const Form = (props: any) => {
  const { onSave, onCancel, editMode, prevVal, checked, setChecked } = props;
  return (
    <>
      <div className="flex flex-col border border-indigo-600 rounded-md py-4 px-8 mb-4 bg-slate-50 2xl:w-[60rem] md:w-screen">
        {editMode && (
          <div className="text-left">
            <div className="flex">
              <p>Previous Title : </p>
              <p className="text-xl">{prevVal?.name}</p>
            </div>
            <div className="flex mb-2">
              <p>Previous Description : </p>
              <p className="text-xl">{prevVal?.description}</p>
            </div>
            <div className="flex mb-2">
              <p>Previous Completion : </p>
              <p className="text-xl">{prevVal?.completed === 'true' ? 'completed' : 'not completed'}</p>
            </div>
          </div>
        )}
        <div className="flex justify-between">
          <form id="dashboardForm" className="flex" onSubmit={onSave}>
            <input
              type="text"
              placeholder="Enter title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="Enter description"
              className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <div className="ml-4">
              <p className="text-xl capitalize">{"Completed"}</p>
              <input
                type="checkbox"
                onChange={() => setChecked(!checked)}
                checked={checked}
                value={checked}
                className="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
              />
            </div>
          </form>

          <div>
            <button
              form="dashboardForm"
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {editMode ? "Update" : "Save"}
            </button>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-4"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
