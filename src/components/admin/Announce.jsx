/* eslint-disable no-unused-vars */
import { React, useState } from "react";

import { useNavigate } from "react-router-dom";
import iiti from "../assets/image.png";
import { useParams } from "react-router-dom";
const backendURL = import.meta.env.VITE_BACKEND_URL;

function Announce() {
  // This component allows users to create an announcement for a club
  // It includes a form where users can input the club name, announcement heading, and announcement

  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);

  const [announcelogo, setannouncelogo] = useState(iiti);
  const [logininfo, setlogininfo] = useState({
    name: "",
    heading: "",
    info: "",
    announcelogo: { announcelogo },
  });
  const handlelogochange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setannouncelogo(reader.result);
        setlogininfo((prev) => ({
          ...prev,
          announcelogo: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    // This function updates the state of logininfo when the user types in the input fields
    // It uses the name attribute of the input field to determine which part of the state to
    //...prev spread operator to keep the previous state and only update the changed field
    //...value is the new value entered by the user
    setlogininfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleVerification = async (identifier) => {
    try {
      const res = await fetch(`${backendURL}/api/verifyadmin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier }),
      });
      const data = await res.json();
      return data.authorized;
    } catch (err) {
      console.error("Verification error:", err);
      alert("Something went wrong. Try again later.");
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const identifier = prompt("Enter your email/phone to verify admin access:");
    if (!identifier) {
      alert("Email is required.");
      return;
    }

    const authorized = await handleVerification(identifier);
    if (!authorized) {
      alert("You're not authorized to make announcements.");
      navigate("/");
      return;
    }

    try {
      const res = await fetch(`${backendURL}/announce`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(logininfo),
      });

      const result = await res.json();

      if (res.ok) {
        alert(result.message || "Announcement successful");
        setannouncelogo(iiti);
        setlogininfo({
          name: "",
          heading: "",
          info: "",
          announcelogo: { announcelogo },
        });
        navigate("/");
      } else {
        if (result.errors) {
          setErrors(result.errors);
        } else {
          setErrors([result.message || "Signup failed"]);
        }
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Something went wrong: " + (err.message || err));
    }
  };

  return (
    <>
      <div className="announce w-full h-full flex justify-center items-center bg-[rbga(1,1,27)]">
        <div className="announce_con relative flex flex-col w-[90%] md:w-[400px] m-[30px] p-[20px] bg-[linear-gradient(to_right,_rgba(6,182,212,0.3),_rgba(59,130,246,0.3))]  border-2 rounded-[10px] border-black  shadow-[0px_4px_15px_rgba(0, 0, 0, 0.1)] hover:shadow-[0_0_25px_#00ffff66]">
          <button
            className="back absolute top-[2px] right-[2px] cursor-pointer w-[30px] h-[30px] rounded-[5px] hover:bg-red-500 "
            onClick={() => navigate(-1)}
          >
            ❌
          </button>
          <form
            action="/individualclubpage"
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center  w-[100%] h-[100%]"
          >
            <h2 className="text-white font-bold text-[22px] ">
              Announcement Details
            </h2>
            {errors.length > 0 && (
              <div className="w-full flex justify-center mb-4">
                <div className="text-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-md shadow-lg animate-fade-in">
                  {errors.map((msg, idx) => (
                    <p key={idx} className="my-1">
                      {msg}
                    </p>
                  ))}
                </div>
              </div>
            )}
            <input
              type="text"
              placeholder="Annonce name"
              name="name"
              value={logininfo.name}
              className="text-black font-bold block bg-white border rounded-[10px] w-[90%] md:w-[75%] h-[50px] m-[10px]"
            />

            <input
              type="text"
              placeholder="Announcement Heading"
              name="heading"
              value={logininfo.heading}
              onChange={handleChange}
              className="text-black block bg-white border rounded-[10px] w-[90%] md:w-[75%] h-[50px] m-[10px]"
            />

            <input
              type="text"
              placeholder="Announcement Info"
              name="info"
              value={logininfo.info}
              onChange={handleChange}
              className="text-black block bg-white border rounded-[10px] w-[90%] md:w-[75%] h-[50px] m-[10px]"
            />
            <div className="flex justify-around items-center gap-10 py-2">
              <h2 className="text-white font-bold ">Announcement logo :</h2>
              <label className="w-20 h-20 border-2 rounded-2xl overflow-clip flex items-center cursor-pointer bg-white ">
                <img
                  src={announcelogo}
                  className=" w-full h-full object-cover"
                  alt="logo"
                />
                <input
                  type="file"
                  accept="image/*"
                  className="text-white font-bold hidden"
                  onChange={handlelogochange}
                />
              </label>
            </div>
            <button
              type="submit"
              className="submitbutton block w-[90%] md:w-[200px] m-[20px] p-[12px] text-white text-[18px] font-bold bg-[linear-gradient(to_right,_#007bff,_#00c3ff)] border-none rounded-[8px] cursor-pointer hover:bg-[linear-gradient(to_right,_#0056b3,_#0097d1)] hover:scale-105 transition-[background,transform] duration-[300ms,200ms]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Announce;
