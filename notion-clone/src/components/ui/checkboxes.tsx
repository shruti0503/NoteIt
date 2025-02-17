import React from "react";

interface Props {
  show: boolean;
}

const Checkboxes: React.FC<Props> = ({ show }) => {
  return (
    <div className="w-10 h-10 border-4 border-black rounded-sm flex justify-center items-center">
      {show && (
        <>
          <div className="h-4 w-1 border-2 border-green-600 rounded-sm relative bottom-1 top-[0px] rotate-2 right-1"></div>
          <div className="h-10 w-1 border-2 border-green-600 rotate-45 rounded-sm relative bottom-2 left-1"></div>
        </>
      )}
    </div>
  );
};

export default Checkboxes;
