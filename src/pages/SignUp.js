import React, { useState } from "react";
import useUser from "context/UserContext";
import Button from "components/Button";
import Input from "components/Input";
import { BiRefresh } from "react-icons/bi";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SignUp = () => {
  const [name, setName] = useState("");
  const [seed, setSeed] = useState(Math.random());
  const { createUser, status } = useUser();
  const navigate = useNavigate(); // Initialize useNavigate

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const trimedName = name.trim();
    if (trimedName) {
      const userCreationResult = await createUser(trimedName, generateAvatar(seed));

      // Assuming your createUser function returns a boolean (true for success, false for failure)
      if (userCreationResult === true) {
        navigate("/chat"); // Redirect to the /chat route (your home folder)
      } else {
        // Handle signup failure, e.g., display an error message
        console.error("Signup failed.");
        // You might want to set an error state and display it to the user
      }

      // OR, if your createUser function updates the 'status' in the context:
      // if (status === "success") {
      //   navigate("/chat"); // Redirect to the /chat route (your home folder)
      // } else if (status === "error") {
      //   // Handle signup error based on the status
      //   console.error("Signup error occurred.");
      //   // Optionally display an error message to the user
      // }
    }
  };

  const generateAvatar = (seed) =>
    `https://api.dicebear.com/7.x/pixel-art/svg?seed=${seed}`;

  return (
    <div className=" flex items-center justify-center h-full">
      <form onSubmit={onFormSubmit} className="w-72">
        <div className="w-3/4 mx-auto mb-6">
          <img
            className="min-h-[216px]"
            src={generateAvatar(seed)}
            alt="avatar"
          />
          <div className="w-full flex justify-around mt-3">
            <div
              className="cursor-pointer p-1"
              title="reload"
              onClick={() => setSeed(Math.random())}
            >
              <BiRefresh className="text-3xl" />
            </div>
          </div>
        </div>
        <div>
          <Input
            autoFocus
            setValue={(val) => setName(val.trimStart())}
            value={name}
            placeholder="Enter Your Name"
            className={`h-10 border-b-2 ${name ? "border-cta" : ""}`}
            type="text"
          />
        </div>
        <Button
          type="cta"
          className="mt-5 md:text-lg w-full font-semibold"
          disabled={status === "loading" || !name}
          onClick={() => {}} // Prevent default button behavior if not submitting
        >
          Start Chatting
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
