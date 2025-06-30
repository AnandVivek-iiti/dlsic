import React, { useState, useEffect } from "react";
import { FaUser, FaPhone, FaEnvelope, FaEdit } from "react-icons/fa";
import image from "../../assets/saraswati.png";

const StudentProfile = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/profile', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  }
});

        const data = await res.json();
        if (res.ok) {
          setProfile(data);
          setEditedProfile(data);
        } else {
          alert(data.message || "Failed to load profile");
        }
      } catch (error) {
        console.error(error);
        alert("Error fetching profile");
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       const res = await fetch('/api/profile', {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("token")}`
  },
  body: JSON.stringify(editedProfile),
});

console.log("Token:", localStorage.getItem("token"));

      const data = await res.json();
      if (res.ok) {
        alert(data.message || "Profile updated");
        setProfile(editedProfile);
        setIsEditing(false);
      } else {
        alert(data.message || "Update failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating profile");
    }
  };

  if (!profile) {
    return <div className="text-center mt-10 text-gray-600">Loading profile...</div>;
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto mt-6">
        <div className="flex flex-col md:flex-row items-center w-full">
          <div className="mb-4 md:mb-0 md:mr-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
              {profile.profileImage ? (
                <img src={profile.profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <img src={image} alt="Placeholder" className="w-full h-full object-cover" />
              )}
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl font-bold text-gray-800">{profile.username}</h2>
            <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-600 mt-1 space-y-1 md:space-y-0 md:space-x-4">
              <span className="flex items-center">
                <FaEnvelope className="mr-1" /> {profile.email}
              </span>
              <span className="flex items-center">
                <FaPhone className="mr-1" /> {profile.phone}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsEditing(true)}
          className="mt-4 md:mt-0 text-blue-600 hover:text-blue-800 transition flex items-center gap-1 text-sm"
        >
          <FaEdit /> Edit
        </button>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="username"
                value={editedProfile.username || ""}
                onChange={handleChange}
                placeholder="Username"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="email"
                name="email"
                value={editedProfile.email || ""}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="tel"
                name="phone"
                value={editedProfile.phone || ""}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                name="profileImage"
                value={editedProfile.profileImage || ""}
                onChange={handleChange}
                placeholder="Profile Image URL (optional)"
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
