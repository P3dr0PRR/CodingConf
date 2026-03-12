import { useState } from "react";
import type { InputsData } from "../App";

import upload from "../assets/imgs/upload.png";

type InputsProps = {
  onSubmit: (data: InputsData) => void;
};

export function Inputs({ onSubmit }: InputsProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [image, setImage] = useState<File | null>(null);

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({ fullName, email, github, image });
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full space-y-4 font-poppins lg:text-md xl:text-xl"
    >
      <div className="flex flex-col items-center justify-centerp-4">
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4 cursor-pointer bg-blue-800/50">
          <img src={upload} alt="Upload Avatar" className="h-12 mb-2" />
          <p className="text-white">Drag and drop or click to upload</p>
          <input
            type="file"
            accept="image/*"
            className="bg-red-200 hidden"
            onChange={(e) => setImage(e.target.files?.[0] ?? null)}
          />
        </div>
        <p className="text-xs text-gray-300 mt-2">
          Upload your photo (JPG or PNG, max size 500KB).
        </p>
      </div>

      <div className="justify-start text-white space-y-2">
        <p>Full Name</p>
        <input
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-2 rounded-md border bg-black/50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-gray-300"
        />
      </div>

      <div className="justify-start text-white space-y-2">
        <p>Email Address</p>
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded-md border bg-black/50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-gray-300"
        />
      </div>

      <div className="justify-start text-white space-y-2">
        <p className="lg:text-md xl:text-xl">GitHub Username</p>
        <input
          type="text"
          placeholder="@yourusername"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          className="w-full p-2 rounded-md border bg-black/50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-gray-300"
        />
      </div>

      <button
        type="submit"
        className="w-full p-3 rounded-md bg-orange-400 text-blue-950 font-bold text-center text-lg hover:bg-orange-500 transition-colors cursor-pointer"
      >
        Generate My Ticket
      </button>
    </form>
  );
}
