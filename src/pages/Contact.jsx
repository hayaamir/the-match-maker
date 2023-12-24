import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here (e.g., send data to server)
    // console.log(data);

    // Display a message confirming that the message was sent
    alert("ההודעה נשלחה בהצלחה");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="input input-bordered input-xs w-full max-w-xs"
        type="text"
        placeholder="שם פרטי"
        {...register("firstName", {
          required: "נדרש שם פרטי",
          maxLength: {
            value: 15,
            message: "השם הפרטי צריך להיות באורך של 15 תווים לכל היותר",
          },
        })}
        aria-invalid={errors.firstName ? "true" : "false"}
      />
      {errors.firstName && <p role="alert">{errors.firstName.message}</p>}
      <input
        className="input input-bordered input-xs w-full max-w-xs"
        type="text"
        placeholder="שם משפחה"
        {...register("lastName", {
          required: "נדרש שם משפחה",
          maxLength: {
            value: 15,
            message: "שם המשפחה צריך להיות באורך של 15 תווים לכל היותר",
          },
        })}
        aria-invalid={errors.lastName ? "true" : "false"}
      />
      {errors.lastName && <p role="alert">{errors.lastName.message}</p>}
      <input
        className="input input-bordered input-xs w-full max-w-xs"
        type="email"
        placeholder="אימייל"
        {...register("email", {
          required: "נדרש אימייל",
          pattern: /^\S+@\S+$/i,
          message: "נא להזין כתובת חוקית",
        })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email && <p role="alert">{errors.email.message}</p>}
      <textarea
        className="textarea textarea-bordered"
        {...register("content", {
          required: "הכנס את הודעתך",
        })}
        aria-invalid={errors.content ? "true" : "false"}
      />
      {errors.content && <p role="alert">{errors.content.message}</p>}
      <input type="submit" className="btn-outline btn btn-sm" />
    </form>
  );
}
