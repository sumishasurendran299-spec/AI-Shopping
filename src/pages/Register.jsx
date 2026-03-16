import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../app/authSlice";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register(form));

    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded w-96"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Register
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-4"
          value={form.name}
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
          value={form.email}
          onChange={(e)=>setForm({...form,email:e.target.value})}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          value={form.password}
          onChange={(e)=>setForm({...form,password:e.target.value})}
        />

        <button
          className="bg-green-600 text-white w-full p-2 rounded"
        >
          Register
        </button>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>

      </form>

    </div>
  );
};

export default Register;