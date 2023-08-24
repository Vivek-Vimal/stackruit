import React from "react";

const Header = (props: any) => {
  const { addForm, editMode } = props;

  return (
    <div className="text-center my-4 2xl:w-[60rem] md:w-screen">
      <h1 className="text-4xl mb-2">Dashboard</h1>
      <h4 className="text-xl">List of Task</h4>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right"
        onClick={addForm}
        disabled={editMode}
      >
        Add
      </button>
    </div>
  );
};

export default Header;
