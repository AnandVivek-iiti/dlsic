import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import image from "../../assets/image.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const backendURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
const StudentProfile = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`${backendURL}/api/auth/profile`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          setProfile(data);
          setEditedProfile(data);
        } else {
          alert(data.message || "Failed to load profile");
        }
      } catch (err) {
        console.error(err);
        alert("Error fetching profile");
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  const addSubject = () => {
    const subjects = editedProfile.subjects || [];
    setEditedProfile({
      ...editedProfile,
      subjects: [...subjects, { name: "", marks: "" }],
    });
  };

  const addActivity = () => {
    const activities = editedProfile.extraCurriculars || [];
    setEditedProfile({
      ...editedProfile,
      extraCurriculars: [...activities, ""],
    });
  };

  const updateSubject = (index, key, value) => {
    const updatedSubjects = [...editedProfile.subjects];
    updatedSubjects[index][key] = value;
    setEditedProfile({ ...editedProfile, subjects: updatedSubjects });
  };

  const updateActivity = (index, value) => {
    const updated = [...editedProfile.extraCurriculars];
    updated[index] = value;
    setEditedProfile({ ...editedProfile, extraCurriculars: updated });
  };

  const removeSubject = (index) => {
    const updated = [...editedProfile.subjects];
    updated.splice(index, 1);
    setEditedProfile({ ...editedProfile, subjects: updated });
  };

  const removeActivity = (index) => {
    const updated = [...editedProfile.extraCurriculars];
    updated.splice(index, 1);
    setEditedProfile({ ...editedProfile, extraCurriculars: updated });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${backendURL}/api/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(editedProfile),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message || "Profile updated!");

        setProfile(editedProfile);
        setIsEditing(false);
      } else {
        toast.error(data.message || "Update failed!");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating profile");
    }
  };
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(`${backendURL}/api/upload`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        const imageUrl = `${backendURL}${data.filePath}`;
        setEditedProfile({ ...editedProfile, profileImage: imageUrl });
      } else {
        toast.error("Upload failed");
      }
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("Upload failed");
    }
  };

  if (!profile)
    return (
      <div className="text-center mt-10 text-gray-600">Loading profile...</div>
    );
const user = JSON.parse(localStorage.getItem("personinfo"));
const role = user?.role;

  const colors = [
    "from-green-100 to-green-50 border-green-300 text-green-700",
    "from-yellow-100 to-yellow-50 border-yellow-300 text-yellow-700",
    "from-blue-100 to-blue-50 border-blue-300 text-blue-700",
    "from-pink-100 to-pink-50 border-pink-300 text-pink-700",
    "from-purple-100 to-purple-50 border-purple-300 text-purple-700",
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-slate-100 to-purple-50 py-10 rounded-xl shadow-inner">
      <div className="max-w-6xl mx-auto px-4">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 text-center mb-10 relative"
        >
          <img
            src={profile.profileImage || image}
            alt="Student"
            className="w-28 h-28 mx-auto rounded-full border-4 border-indigo-300 shadow-lg mb-4 object-cover"
          />
          <h2 className="text-3xl font-bold text-indigo-700">
            {profile.username}
          </h2>
          <p className="text-gray-600 mt-1 text-sm">{profile.email}</p>
          <p className="text-gray-600 text-sm">Phone: {profile.phone}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="absolute top-5 right-5 text-blue-600 hover:text-blue-800 text-sm"
          >
            ✏️ Edit
          </button>
        </motion.div>

        {/* Edit Modal */}
        {isEditing && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-[90%] max-w-xl shadow-xl overflow-y-auto max-h-[90vh] space-y-4">
              <h3 className="text-2xl font-semibold text-center text-indigo-800">
                Edit Profile
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                {/* Image Upload */}
                <div className="flex flex-col items-center">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <img
                      src={editedProfile.profileImage || image}
                      alt="Preview"
                      className="w-24 h-24 object-cover rounded-full border-4 border-indigo-300 shadow mb-2 hover:opacity-80"
                    />
                  </label>
                  <span className="text-gray-500 text-xs">
                    Click image to upload
                  </span>
                </div>

                <input
                  name="username"
                  value={editedProfile.username || ""}
                  onChange={handleChange}
                  placeholder="Username"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <input
                  name="email"
                  value={editedProfile.email || ""}
                  onChange={handleChange}
                  placeholder="Email"
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <input
                  name="phone"
                  value={editedProfile.phone || ""}
                  onChange={handleChange}
                  placeholder="Phone"
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <input
                  name="percentage"
                  value={editedProfile.percentage || ""}
                  onChange={handleChange}
                  placeholder="Percentage"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <input
                  name="attendance"
                  value={editedProfile.attendance || ""}
                  onChange={handleChange}
                  placeholder="Attendance"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <textarea
                  name="remarks"
                  value={editedProfile.remarks || ""}
                  onChange={handleChange}
                  placeholder="Remarks"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                />

                <div>
                  <h4 className="font-semibold mt-4">Subjects</h4>
                  {editedProfile.subjects?.map((subject, index) => (
                    <div key={index} className="flex gap-2 mt-2">
                      <input
                        type="text"
                        value={subject.name}
                        onChange={(e) =>
                          updateSubject(index, "name", e.target.value)
                        }
                        placeholder="Subject"
                        className="flex-1 border rounded px-2 py-1"
                      />
                      <input
                        type="number"
                        value={subject.marks}
                        onChange={(e) =>
                          updateSubject(index, "marks", e.target.value)
                        }
                        placeholder="Marks"
                        className="w-20 border rounded px-2 py-1"
                      />
                      <button
                        type="button"
                        onClick={() => removeSubject(index)}
                        className="text-red-500"
                      >
                        ✖
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addSubject}
                    className="text-blue-500 mt-2"
                  >
                    + Add Subject
                  </button>
                </div>

                <div>
                  <h4 className="font-semibold mt-4">Extra Curriculars</h4>
                  {editedProfile.extraCurriculars?.map((activity, index) => (
                    <div key={index} className="flex gap-2 mt-2">
                      <input
                        type="text"
                        value={activity}
                        onChange={(e) => updateActivity(index, e.target.value)}
                        placeholder="Activity"
                        className="flex-1 border rounded px-2 py-1"
                      />
                      <button
                        type="button"
                        onClick={() => removeActivity(index)}
                        className="text-red-500"
                      >
                        ✖
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addActivity}
                    className="text-blue-500 mt-2"
                  >
                    + Add Activity
                  </button>
                </div>

                <div className="flex justify-end gap-2 mt-4">
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

        {/* Subjects Display */}
        {profile.subjects?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12"
          >
            {profile.subjects.map((subject, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${
                  colors[index % colors.length]
                } border rounded-xl p-6 shadow-md hover:shadow-lg transition`}
              >
                <h3 className="text-lg font-semibold mb-1">{subject.name}</h3>
                <p className="text-sm">
                  Marks: <span className="font-bold">{subject.marks}</span>
                </p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Performance Summary */}
        {(profile.percentage || profile.attendance || profile.remarks) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg mb-12"
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-800">
              📊 Performance Summary
            </h3>
            <ul className="text-gray-700 space-y-2 text-sm md:text-base">
              {profile.percentage && (
                <li>
                  <strong>Percentage:</strong> {profile.percentage}
                </li>
              )}
              {profile.attendance && (
                <li>
                  <strong>Attendance:</strong> {profile.attendance}
                </li>
              )}
              {profile.remarks && (
                <li>
                  <strong>Remarks:</strong> {profile.remarks}
                </li>
              )}
            </ul>
          </motion.div>
        )}

        {/* Extra Curricular */}
        {profile.extraCurriculars?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg mb-12"
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-800">
              🎯 Extra-Curricular Achievements
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm md:text-base">
              {profile.extraCurriculars.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Download Report */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <p className="mb-2 text-gray-600 text-sm md:text-base font-medium">
            👉 Download your Report Card
          </p>
          <div className="flex justify-center">
            <a
              href="/downloads/report-card.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold text-sm rounded-full bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:ring-2 hover:ring-purple-400"
            >
              📥 Download Report Card
            </a>
          </div>
        </motion.div>

        <ToastContainer position="bottom-center" autoClose={3000} />
      </div>
    </section>
  );
};

export default StudentProfile;
