import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ needed for navigation

export default function Register() {
  const navigate = useNavigate(); // ✅ fix
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: "",
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, profileImage: reader.result }));
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { confirmPassword, ...payload } = formData;

      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/signup`, payload); // ✅ use axios only

      if (res.data.token) {
        localStorage.setItem("token", res.data.token); // ✅ save token
        alert("Signup successful!");
        navigate("/"); // ✅ navigate to home page
      } else {
        alert(res.data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-400 px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Create a New Account</h2>
        <p className="text-white mt-1 text-sm">
          Register now to access the student portal and stay updated.
        </p>
      </div>

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg px-8 py-6">
        <h2 className="text-2xl font-bold text-indigo-600 text-center mb-6">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold">Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Phone:</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border"
              required
            />
          </div>

          <div className="flex flex-col items-center space-y-3">
            <label className="block text-gray-700 font-semibold">Profile Image:</label>
            <label className="cursor-pointer w-24 h-24 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-full overflow-hidden hover:border-blue-500 transition">
              {formData.profileImage ? (
                <img src={formData.profileImage} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <span className="text-sm text-gray-400">Click to upload</span>
              )}
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            </label>
            {formData.profileImage && (
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, profileImage: "" }))}
                className="text-sm text-red-500 hover:underline"
              >
                Remove Image
              </button>
            )}
          </div>

          <button type="submit" className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-md hover:bg-indigo-600 transition">
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
