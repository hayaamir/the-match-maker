import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useAuth } from "../providers/AuthProvider";

/**
 * This component Creates a form for new users to register and create an account.
 * The form includes fields for first name, last name, mobile number, email, username, and password.
 * the data go to the login function.
 * @return {JSX.Element} The JSX element representing the registration form.
 */

export default function Registration() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    login(data);
    alert("נרשמת בהצלחה");
    navigate("/notebook");
  };

  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-700">הרשמה</h1>
        <br />
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className="input input-bordered input-xs w-full max-w-xs"
              style={{ direction: "rtl" }}
              type="text"
              placeholder="שם פרטי"
              {...register("firstName", {
                required: "שדה חובה, אנא הזן שם פרטי",
                minLength: {
                  value: 2,
                  message: "שם פרטי חייב להכיל לפחות 2 תווים",
                },
                maxLength: {
                  value: 15,
                  message: "שם פרטי לא יכול להכיל יותר מ-15 תווים",
                },
                pattern: {
                  value: /[\u05D0-\u05EA]+/i,
                  message: "נא להזין שם פרטי בעברית בלבד",
                },
              })}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName && <p role="alert">{errors.firstName.message}</p>}
          </div>

          <input
            className="input input-bordered input-xs w-full max-w-xs"
            style={{ direction: "rtl" }}
            type="text"
            placeholder="שם משפחה"
            {...register("lastName", {
              required: "שדה חובה, אנא הזן שם משפחה",
              minLength: {
                value: 2,
                message: "שם משפחה חייב להכיל לפחות 2 תווים",
              },
              maxLength: {
                value: 15,
                message: "שם משפחה לא יכול להכיל יותר מ-10 תווים",
              },
              pattern: {
                value: /[\u05D0-\u05EA]+/i,
                message: "נא להזין שם משפחה בעברית בלבד",
              },
            })}
            aria-invalid={errors.lastName ? "true" : "false"}
          />
          {errors.lastName && <p role="alert">{errors.lastName.message}</p>}

          <input
            className="input input-bordered input-xs w-full max-w-xs"
            style={{ direction: "rtl" }}
            type="tel"
            placeholder="טלפון נייד"
            {...register("mobileNumber", {
              required: "שדה חובה, אנא הזן מספר טלפון נייד",
              pattern: {
                value: /^(05\d{8}|0\d{9})$/,
                message: "אנא הזן מספר תקין",
              },
            })}
            aria-invalid={errors.mobileNumber ? "true" : "false"}
          />
          {errors.mobileNumber && (
            <p role="alert">{errors.mobileNumber.message}</p>
          )}

          <input
            className="input input-bordered input-xs w-full max-w-xs"
            style={{ direction: "rtl" }}
            type="email"
            placeholder="מייל"
            {...register("email", {
              required: "שדה חובה, אנא הזן אמייל",
              pattern: {
                pattern: /^\S+@\S+$/i,
                message: "הכנס כתובת מייל חוקית",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <p role="alert">{errors.email.message}</p>}

          <input
            className="input input-bordered input-xs w-full max-w-xs"
            style={{ direction: "rtl" }}
            type="text"
            placeholder="שם משתמש"
            {...register("userName", {
              required: "אנא בחר שם משתמש פנוי",
            })}
            aria-invalid={errors.user ? "true" : "false"}
          />
          {errors.user && <p role="alert">{errors.user.message}</p>}

          <input
            className="input input-bordered input-xs   max-w-xs"
            style={{ direction: "rtl" }}
            type="password"
            placeholder="הזן סיסמה"
            {...register("password", {
              required: "שדה חובה, אנא הזמן סיסמה",
              minLength: {
                value: 8,
                message: "הזן סיסמה בת לפחות 8 תווים",
              },
              pattern: {
                value:
                  "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$",
                message: "סיסמה לא חוקית, נסה שנית",
              },
            })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && <p role="alert">{errors.password.message}</p>}

          <div>
            <button type="submit" className="btn btn-block btn-primary">
              Sign Up
            </button>
          </div>
          <span>
            Already have an account ?
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Login
            </a>
          </span>
        </form>
      </div>
    </div>
  );
}
