import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/LoginSlice";
const UserList = () => {
  const dispatch = useDispatch();
  const { loading, users } = useSelector((store) => store.login);
  useEffect(() => {
    fetchUser();
  }, []);
  console.log(users);
  const fetchUser = async () => {
    try {
      await dispatch(getUsers());
    } catch (err) {
      throw err;
    }
  };
  return (
    <section className="user-list">
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          {users.map((user) => (
            <div key={user.id} className="user-list__item">
              <img
                src={user.avatar}
                alt={user.first_name}
                className="user-list__item__image"
              />
              <p className="user-list__item__name">
                {user.first_name} {user.last_name}
              </p>
              <p className="user-list__item__email">{user.email}</p>
            </div>
          ))}
        </>
      )}
    </section>
  );
};

export default UserList;
