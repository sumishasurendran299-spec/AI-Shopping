import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/authSlice";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(form));

    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded w-96"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

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
          className="bg-blue-600 text-white w-full p-2 rounded"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>

      </form>

    </div>
  );
};

export default Login;