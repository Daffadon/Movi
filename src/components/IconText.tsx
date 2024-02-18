import React from "react";

interface EditProps {
  text: string;
  icon: JSX.Element;
}

const IconText: React.FC<EditProps> = ({ text, icon }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-xl">{icon}</div>
      <p>{text}</p>
    </div>
  );
};

export default IconText;
