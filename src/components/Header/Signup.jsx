import { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid"; // instead of SelectorIcon
import {
  CheckIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import { Fragment } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const backendURL = import.meta.env.VITE_BACKEND_URL ;
import { useLanguage } from "../Main/context/Languagecontext";
import imageCompression from "browser-image-compression";
import { toast } from "react-toastify";
import LoadingSpinner from "../Loading";
export default function Register(props) {
  // const [selectedRole, setSelectedRole] = useState(null);
  const { language, t } = useLanguage();
  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const navigate = useNavigate();
  // const { darkMode, setDarkMode } = props;
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    profileImage: "",
    role: "",
    class: "",
    stream: "",
    department: "",
    education: "",
    experience: "",
    passingYear: "",
    currentCompany: "",
    skills: "",
  });

  const handleRoleChange = (role) => {
    setFormData((prev) => ({
      ...prev,
      role,

      class: "",
      stream: "",
      department: "",
      education: "",
      experience: "",
      passingYear: "",
      currentCompany: "",
      skills: "",
    }));
  };
  const [fileUrl, setFileUrl] = useState("");

  useEffect(() => {
    const savedPath = localStorage.getItem("filePath", fileUrl);
    if (savedPath) {
      setFileUrl(`${backendURL}${savedPath}`);
    }
  }, []);

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const options = {
      maxSizeMB: 0.1,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };

    const compressedFile = await imageCompression(file, options);
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
      });

    const base64String = await toBase64(compressedFile);

    setFormData((prev) => ({
      ...prev,
      profileImage: base64String,
    }));

    setPreview(base64String);
  };
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match!");
    return;
  }

  setLoading(true);
  try {
    const { confirmPassword, ...payload } = formData;
    const res = await axios.post(`${backendURL}/api/auth/signup`, payload, {
      withCredentials: true,
    });

    const data = res.data;
    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("personinfo", JSON.stringify(data.user));
      props.setpersoninfo(data.user);
      props.setissignup(true);
      toast.success("Signup successful!");
      navigate("/");
    }
  } catch (err) {
  if (err.response?.status === 409) {
  toast.error(err.response?.data?.message || "User already exists");

    } else {
      console.error("Signup error:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "Signup failed");
    }
  } finally {
    setLoading(false);
  }
};
if (loading) return <LoadingSpinner />;


  const roles = [
    { name: "student", icon: AcademicCapIcon },
    { name: "teacher", icon: UserGroupIcon },
    { name: "alumni", icon: BriefcaseIcon },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-400 px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">{t("signup.title")}</h2>
        <p className="text-white mt-1 text-sm">{t("signup.description")}</p>
      </div>

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg px-8 py-6">
        <h2 className="text-2xl font-bold text-indigo-600 text-center mb-6">
          Register
        </h2>
        <form className="space-y-4 text-left" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold">
              {t("signup.nameLabel")}:
            </label>
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
            <label className="block text-gray-700 font-semibold">
              {t("signup.emailLabel")}:
            </label>
            <input
              type="email"
              name="email"
              autoComplete="email"
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
              autoComplete="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border"
              required
            />
          </div>

          <div className="role-container h-20">
            <label className="block text-gray-700  font-semibold">Role:</label>

            <Listbox value={formData.role} onChange={handleRoleChange}>
              <div className="relative">
                <Listbox.Button className="relative w-full h-10 rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <span className="block truncate capitalize">
                    {formData.role ? (
                      <span className="capitalize">{formData.role}</span>
                    ) : (
                      <span className="text-gray-400">Select your role</span>
                    )}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none text-sm">
                  {roles.map((role) => (
                    <Listbox.Option
                      key={role.name}
                      value={role.name}
                      as={Fragment}
                    >
                      {({ active, selected }) => (
                        <li
                          className={`flex items-center gap-2 px-3 py-2 cursor-pointer ${
                            active ? "bg-indigo-100" : ""
                          }`}
                        >
                          <role.icon className="h-4 w-4 text-gray-600" />
                          <span className="capitalize">{role.name}</span>
                          {selected && (
                            <CheckIcon className="h-4 w-4 text-green-600 ml-auto" />
                          )}
                        </li>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              {t("signup.passwordLabel")} :
            </label>
            <input
              type="password"
              name="password"
              autoComplete="new-password"
              placeholder="At least 8 chars, 1 capital, 1 symbol"
              // pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':\\\|,.<>\/?]).{8,}$"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border"
              required
            />
          </div>
          <small className="text-gray-500">
            Must include capital, number, symbol (min 8 characters)
          </small>

          <div>
            <label className="block text-gray-700 font-semibold">
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              autoComplete="new-password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border"
              required
            />
          </div>
          {formData.role === "student" && (
            <>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Class:
                </label>
                <input
                  type="text"
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border"
                  placeholder="e.g., 10th, 12th "
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Stream:
                </label>
                <input
                  type="text"
                  name="stream"
                  value={formData.stream}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border"
                  placeholder="e.g., Science, Arts"
                />
              </div>
            </>
          )}

          {formData.role === "teacher" && (
            <>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Department:
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border"
                  placeholder="e.g., Physics, Maths"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Education:
                </label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border"
                  placeholder="e.g.  B.ed ,B.Sc , M.Sc"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Experience:
                </label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border"
                  placeholder="e.g., 10 years"
                />
              </div>
            </>
          )}

          {formData.role === "alumni" && (
            <>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Passing Year:
                </label>
                <input
                  type="text"
                  name="passingYear"
                  value={formData.passingYear}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border"
                  placeholder="e.g., 2020"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Current Company:
                </label>
                <input
                  type="text"
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border"
                  placeholder="e.g., Google , Apple"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Skills:
                </label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border"
                  placeholder="e.g., MERN,Social Services "
                />
              </div>
            </>
          )}

          <div className="flex flex-col items-center space-y-3">
            <label className="block text-gray-700 font-semibold">
              Profile Image:
            </label>
            <label className="cursor-pointer w-24 h-24 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-full overflow-hidden hover:border-blue-500 transition">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <span className="text-sm text-gray-400 text-center px-2">
                  Click to Upload
                </span>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>

            {formData.profileImage && (
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, profileImage: "" }))
                }
                className="text-sm text-red-500 hover:underline"
              >
                Remove Image
              </button>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-md hover:bg-indigo-600 transition"

             {...loading ? "Registering..." : "Register"}
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          {t("signup.hasAccount")}{" "}
          <a href="/#/login" className="text-indigo-500 hover:underline">
            {t("signup.logInLink")}
          </a>
        </p>
      </div>
    </div>
  );
}
