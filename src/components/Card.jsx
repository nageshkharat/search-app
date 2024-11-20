import React from "react";
import DialogBox from "./DialogBox";

const Card = ({ user }) => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <div className="border rounded-lg p-6 bg-white shadow-md transform transition hover:scale-105">
  <img
    src="Ellipse 2.png"
    alt="User"
    className="w-16 h-16 rounded-full mx-auto"
  />
  <h3 className="text-xl font-semibold text-center mt-4">
    {user.firstName} {user.lastName}
  </h3>
  <p className="text-sm text-gray-500 text-center mt-2">{user.address}</p>
  <div className="text-center mt-4">
    <button
      onClick={() => setIsDialogOpen(true)}
      className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
    >
      Fetch Details
    </button>
  </div>
  {isDialogOpen && (
    <DialogBox user={user} onClose={() => setIsDialogOpen(false)} />
  )}
</div>

  );
};

export default Card;
