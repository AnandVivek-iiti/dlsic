import { motion } from "framer-motion";
import React, { useState, useEffect, useMemo } from "react";
import image from "../../assets/image.png";
import { ErrorBoundary } from "react-error-boundary";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import U from "../../assets/user.png";
import ThemeToggle from "../ThemeSwitcher";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import LoadingSpinner from "../../Loading";
const backendURL = import.meta.env.VITE_BACKEND_URL;
const StudentProfile = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  // const token = useMemo(() => localStorage.getItem("token"), []);

  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(null);
  const [isGuestView, setIsGuestView] = useState(false);
  const [loading, setLoading] = useState(true);
  const isGuest = !localStorage.getItem("token");

  const dummyProfile = {
    username: "Anand Vivek",
    email: "anandvivek@iitindore.ac.in",
    phone: "9876543210",
    profileImage: U,
    percentage: "95%",
    attendance: "87%",
    remarks: "Login to access advanced features and academic analytics.",
    subjects: [
      {
        name: { subjectName: "Physics" },
        marks: { marks: "97" },
      },
      {
        name: { subjectName: "maths" },
        marks: { marks: "96" },
      },
      {
        name: { subjectName: "chemistry" },
        marks: { marks: "97" },
      },
    ],
    extraCurriculars: [
      "Programming Club @ IIT Indore",
      "Fluxus Web Dev Team",
      "Gym & Self-Improvement Enthusiast",
    ],
  };

  console.log("Calling API:", `${backendURL}/api/profile`);
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      // No token? Show dummy view permanently
      if (!token) {
        setIsGuestView(true);
        return;
      }

      try {
        const res = await fetch(`${backendURL}/api/profile`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        console.log("Fetched profile:", data); // 👈 optional for debugging

        if (res.ok) {
          setProfile(data);
          setEditedProfile(data);
          setIsGuestView(false);
          setLoading(false);
        } else {
          toast.error(data.message || "Session expired.");
          localStorage.removeItem("token");
          setIsGuestView(true);
          setLoading(false);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        toast.error("Server error.");
        setIsGuestView(true);
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchProfile();
    }
  }, [user]);
  const handleLogout = () => {
    logout(); // clears token/context
    navigate("/login");
  };

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
  if (loading) return <LoadingSpinner />;
  // if (loading)
  //   return (
  //     <div className="animate-pulse text-center p-8 text-gray-400">
  //       Loading profile...
  //     </div>
  //   );

  if (isGuestView) {
    return (
      <section className="bg-gradient-to-br from-blue-50 via-slate-100 to-purple-50 py-10 rounded-xl shadow-inner">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 text-center mb-10 relative"
          >
            <img
              src={dummyProfile.profileImage}
              alt="Guest"
              className="w-28 h-28 mx-auto rounded-full border-4 border-indigo-300 shadow-lg mb-4 object-cover"
            />
            <h2 className="text-3xl font-bold text-indigo-700">
              {dummyProfile.username}
            </h2>
            <p className="text-gray-600 mt-1 text-sm">{dummyProfile.email}</p>
            <p className="text-gray-600 text-sm">Phone: {dummyProfile.phone}</p>

            <div className="mt-6 text-left max-w-md mx-auto text-sm text-gray-700">
              <div className="mb-2">
                <div className="flex justify-between text-xs font-medium">
                  <span>Percentage</span>
                  <span>{dummyProfile.percentage}</span>
                </div>
                {parseInt(dummyProfile.percentage) >= 90 && (
                  <span className="absolute top-1 left-1 text-xl">🏅</span>
                )}

                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className="bg-green-500 h-full rounded-full"
                    style={{ width: dummyProfile.percentage }}
                  ></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-xs font-medium">
                  <span>Attendance</span>
                  <span>{dummyProfile.attendance}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className="bg-blue-500 h-full rounded-full"
                    style={{ width: dummyProfile.attendance }}
                  ></div>
                </div>
              </div>

              {dummyProfile.subjects.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold text-indigo-800 mb-1">
                    📚 Subjects
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {dummyProfile.subjects.map((subj, i) => (
                      <li key={i}>
                        {subj.name.subjectName}: {subj.marks.marks}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {dummyProfile.extraCurriculars.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold text-indigo-800 mb-1">
                    🎯 Extra Curriculars
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {dummyProfile.extraCurriculars.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <a
              href="/#/login"
              className="inline-block mt-6 px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
            >
              🔐 Login to Access Full Profile
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  if (!profile) {
    return (
      <section className="bg-gradient-to-br from-blue-50 via-slate-100 to-purple-50 py-10 rounded-xl shadow-inner">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 text-center mb-10 relative"
          >
            <img
              src={dummyProfile.profileImage}
              alt="Guest"
              className="w-28 h-28 mx-auto rounded-full border-4 border-indigo-300 shadow-lg mb-4 object-cover"
            />
            <h2 className="text-3xl font-bold text-indigo-700">
              {dummyProfile.username}
            </h2>
            <p className="text-gray-600 mt-1 text-sm">{dummyProfile.email}</p>
            <p className="text-gray-600 text-sm">Phone: {dummyProfile.phone}</p>

            <div className="mt-6 text-left max-w-md mx-auto text-sm text-gray-700">
              {/* Progress bars */}
              <div className="mb-2">
                <div className="flex justify-between text-xs font-medium">
                  <span>Percentage</span>
                  <span>{dummyProfile.percentage}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className="bg-green-500 h-full rounded-full"
                    style={{ width: dummyProfile.percentage }}
                  ></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-xs font-medium">
                  <span>Attendance</span>
                  <span>{dummyProfile.attendance}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className="bg-blue-500 h-full rounded-full"
                    style={{ width: dummyProfile.attendance }}
                  ></div>
                </div>
              </div>

              {/* Rewards */}
              <div className="mt-4">
                <h4 className="font-semibold text-indigo-800 mb-1">
                  🏆 Rewards
                </h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {parseInt(dummyProfile.percentage) >= 90 && (
                    <li>🎖️ Academic Excellence Badge</li>
                  )}
                  {parseInt(dummyProfile.attendance) >= 85 && (
                    <li>🕒 Punctuality Star</li>
                  )}
                  {parseInt(dummyProfile.percentage) >= 75 &&
                    parseInt(dummyProfile.attendance) >= 75 && (
                      <li>🌟 Consistent Performer</li>
                    )}
                </ul>
              </div>

              {/* Subjects */}
              {dummyProfile.subjects.map((subject, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br border rounded-xl p-6 shadow-md hover:shadow-lg transition`}
                >
                  <h3 className="text-lg font-semibold mb-1">
                    {subject.name?.subjectName || "subject"}
                  </h3>
                  <p className="text-sm">
                    Marks:{" "}
                    <span className="font-bold">
                      {subject.marks?.marks || "marks"}
                    </span>
                  </p>
                </div>
              ))}

              {/* Extra Curricular */}
              {dummyProfile.extraCurriculars.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold text-indigo-800 mb-1">
                    🎯 Extra Curriculars
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {dummyProfile.extraCurriculars.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button
              onClick={() => navigate("/login")}
              className="inline-block mt-6 px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
            >
              🔐 Login to Access Full Profile
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  // const user = JSON.parse(localStorage.getItem("personinfo"));
  const role = user?.role;

  const colors = [
    "from-green-100 to-green-50 border-green-300 text-green-700",
    "from-yellow-100 to-yellow-50 border-yellow-300 text-yellow-700",
    "from-blue-100 to-blue-50 border-blue-300 text-blue-700",
    "from-pink-100 to-pink-50 border-pink-300 text-pink-700",
    "from-purple-100 to-purple-50 border-purple-300 text-purple-700",
  ];
  console.log("Profile:", profile);
  console.log("Is Guest:", isGuest);

  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong in Profile</div>}>
        <section className="bg-gradient-to-br from-blue-50 via-slate-100 to-purple-50 py-10 rounded-xl shadow-inner">
          <ToastContainer />
          <div className="max-w-6xl mx-auto px-4">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 text-center mb-10 relative"
            >
              <img
                src={profile?.profileImage || U}
                alt="Student"
                className="w-28 h-28 mx-auto rounded-full border-4 border-indigo-300 shadow-lg mb-4 object-cover"
              />
              <h2 className="text-3xl font-bold text-indigo-700">
                {profile.username}
              </h2>
              <p className="text-gray-600 mt-1 text-sm">{profile.email}</p>
              <p className="text-gray-600 text-sm">Phone: {profile.phone}</p>
              {profile?.role === "student" && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="absolute top-5 right-5 text-blue-600 hover:text-blue-800 text-sm"
                >
                  ✏️ Edit
                </button>
              )}
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
                              updateSubject(
                                index,
                                "name.subjectName",
                                e.target.value
                              )
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
                      {editedProfile.extraCurriculars?.map(
                        (activity, index) => (
                          <div key={index} className="flex gap-2 mt-2">
                            <input
                              type="text"
                              value={activity}
                              onChange={(e) =>
                                updateActivity(index, e.target.value)
                              }
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
                        )
                      )}
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
                    <h3 className="text-lg font-semibold mb-1">
                      {subject.name?.subjectName || "Unknown Subject"}
                    </h3>
                    <p className="text-sm">
                      Marks:{" "}
                      <span className="font-bold">
                        {subject.marks?.marks || "N/A"}
                      </span>
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
                  <div className="space-y-4">
                    {profile.percentage && (
                      <div>
                        <div className="flex justify-between text-sm font-semibold mb-1">
                          <span>Percentage</span>
                          <span>{profile.percentage}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div
                            className="bg-green-500 h-full rounded-full transition-all duration-500"
                            style={{ width: profile.percentage }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {profile.attendance && (
                      <div>
                        <div className="flex justify-between text-sm font-semibold mb-1">
                          <span>Attendance</span>
                          <span>{profile.attendance}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div
                            className="bg-blue-500 h-full rounded-full transition-all duration-500"
                            style={{ width: profile.attendance }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {profile.remarks && (
                      <p className="mt-3 text-sm text-gray-700">
                        <strong>Remarks:</strong> {profile.remarks}
                      </p>
                    )}
                  </div>
                  {profile.percentage && profile.attendance && (
                    <div className="mt-4">
                      <h4 className="text-md font-semibold text-indigo-700 mb-1">
                        🏆 Rewards
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {parseInt(profile.percentage) >= 90 && (
                          <li>🎖️ Academic Excellence Badge</li>
                        )}
                        {parseInt(profile.attendance) >= 85 && (
                          <li>🕒 Punctuality Star</li>
                        )}
                        {parseInt(profile.percentage) >= 75 &&
                          parseInt(profile.attendance) >= 75 && (
                            <li>🌟 Consistent Performer</li>
                          )}
                        {parseInt(profile.percentage) < 60 && (
                          <li>📈 Keep pushing! Rewards coming soon!</li>
                        )}
                      </ul>
                    </div>
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
            <button onClick={handleLogout} className="text-red-500 px-4 py-2">
              Logout
            </button>
          </div>
        </section>
        <div className="mt-6">
          <h4 className="font-semibold text-indigo-800 mb-1">💡 Motivation</h4>
          <blockquote className="italic text-sm text-gray-600 border-l-4 pl-4 border-indigo-400">
            "You don’t have to be great to start, but you have to start to be
            great."
          </blockquote>
          <ToastContainer position="bottom-center" autoClose={3000} />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default StudentProfile;
