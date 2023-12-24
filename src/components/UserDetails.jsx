import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useAuth } from "../providers/AuthProvider";
import { useUsers } from "../providers/UsersProvider";
import Trash from "../assets/Trash";

export default function UserDetails() {
  const { user } = useAuth();
  let { tabById } = useUsers();

  const [comment, setComment] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ comment }) => {
    setComment(comment);
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      {user && tabById ? (
        <>
          <figure className="px-10 pt-10">
            <img src={tabById.profile_picture} className="rounded-xl w-96" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              {tabById.first_name} {tabById.last_name}
            </h2>
            <div>
              <div className="flex gap-20 my-5">
                <div>
                  <h3>phone: {tabById.phone}</h3>
                  <p>country: {tabById.country}</p>
                  <p>city: {tabById.city}</p>
                  <p>email: {tabById.email}</p>
                  <p>job: {tabById.job}</p>
                </div>

                <div>
                  <form
                    className="mt-4 flex items-center gap-3"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <textarea
                      className="textarea textarea-bordered"
                      placeholder="כאן ניתן להוסיף הערות אישיות"
                      {...register("comment", { required: true })}
                    />
                    <input
                      className="btn btn-accent btn-sm block"
                      type="submit"
                    />
                  </form>
                  <div className="flex items-center">
                    <h3 className="font-bold my-4">Comment:</h3>
                    <p>{comment}</p>
                    {comment && <span className="hover:cursor-pointer hover:text-red-600" onClick={() => setComment('')}><Trash/></span>}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <Link to="/notebook" className="btn btn-primary">
                <button variant="primary">חזרה למחברת</button>
              </Link>
            </div>
            <span>2 days ago</span>
          </div>
        </>
      ) : (
        <span className="loading loading-ring loading-lg"></span>
      )}
    </div>
  );
}
