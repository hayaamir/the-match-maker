import { Link } from "react-router-dom";

/*The UserDetails component renders a tab dedicated to a private candidate,
 * displaying essential information such as the candidate's name, image, and gender.
 * The tab includes a button that directs users to a page with comprehensive details about the candidate.
 */
export default function UserCard({ id, first_name, last_name, image, gender }) {
  return (
    <div className="card w-60 bg-base-100 shadow-xl">
      <figure>
        <img alt="userImage" src={image} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {first_name} {last_name}
          <div className="badge badge-secondary">פעיל</div>
        </h2>
        <p>Gender: {gender}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            <Link to={`${id}`} variant="primary">
            פרטים נוספים
            </Link>
          </div>
          <div className="badge badge-outline"> סטטוס</div>
        </div>
      </div>
    </div>
  );
}
