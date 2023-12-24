/*
A page that shows all the tabs that exist for a specific matchmaker
- Shows a personal tab list
 */
import { useState } from "react";
import UserCard from "../components/UserCard";
import { useAuth } from "../providers/AuthProvider";
import { useUsers } from "../providers/UsersProvider";

export default function PersonalNotebook() {
  const { user } = useAuth();
  const { tabs } = useUsers();

  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");

  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  if (!user) {
    return <h1>Please login!</h1>;
  }

  return (
    <div>
      <div className="m-4 flex gap-3">
        <input
          className="input input-sm input-secondary"
          type="search"
          value={search}
          onChange={handleSearch}
        />
        <div>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            onClick={() => setGender("male")}
          />
        </div>
        <div>
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            onClick={() => setGender("female")}
          />
        </div>
      </div>
      {tabs && tabs.length > 0 ? (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4">
          {tabs
            .filter(
              (tab) =>
                tab.first_name.toLowerCase().includes(search) ||
                tab.last_name.toLowerCase().includes(search)
            )
            .filter((tab) => !gender || tab.gender === gender)
            .map((tab) => (
              <UserCard
                key={tab.id}
                id={tab.id}
                image={tab.profile_picture}
                first_name={tab.first_name}
                last_name={tab.last_name}
                gender={tab.gender}
                age={tab.age}
              />
            ))}
        </div>
      ) : (
        <span className="loading loading-ring loading-lg"></span>
      )}
    </div>
  );
}
