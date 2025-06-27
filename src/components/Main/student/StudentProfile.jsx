import React, { useState } from "react";
import { getMediaUrl } from "./mediaUtils";
import { FaUser, FaGraduationCap, FaIdCard, FaEdit } from "react-icons/fa";

const StudentProfile = ({ profile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  if (!profile) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would update the parent or backend.
    setIsEditing(false);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto mt-6">
        <div className="flex flex-col md:flex-row items-center w-full">
          {/* Profile Image */}
          <div className="mb-4 md:mb-0 md:mr-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-[#1360AB] text-2xl overflow-hidden">
              {profile.profileImage ? (
                <img
                  src={getMediaUrl(profile.profileImage)}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <FaUser />
              )}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl font-bold text-gray-800">{editedProfile.name}</h2>
            <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-600 mt-1 space-y-1 md:space-y-0 md:space-x-4">
              <span className="flex items-center justify-center md:justify-start">
                <FaIdCard className="mr-1" /> {editedProfile.rollNumber}
              </span>
              <span className="flex items-center justify-center md:justify-start">
                <FaGraduationCap className="mr-1" /> {editedProfile.degree}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-4 md:mt-0 flex space-x-2">
            <div className="bg-blue-50 px-3 py-1 rounded-full text-xs text-[#1360AB]">
              {editedProfile.year} Year
            </div>
            <div className="bg-green-50 px-3 py-1 rounded-full text-xs text-green-600">
              {editedProfile.hostelName}
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <button
          onClick={() => setIsEditing(true)}
          className="mt-4 md:mt-0 text-blue-600 hover:text-blue-800 transition flex items-center gap-1 text-sm"
        >
          <FaEdit /> Edit
        </button>
      </div>

      {/* Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={editedProfile.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                name="rollNumber"
                value={editedProfile.rollNumber}
                onChange={handleChange}
                placeholder="Roll Number"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                name="degree"
                value={editedProfile.degree}
                onChange={handleChange}
                placeholder="Degree"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                name="year"
                value={editedProfile.year}
                onChange={handleChange}
                placeholder="Year"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                name="hostelName"
                value={editedProfile.hostelName}
                onChange={handleChange}
                placeholder="Hostel Name"
                className="w-full border rounded px-3 py-2"
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentProfile;
