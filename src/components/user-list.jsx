import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/LoginSlice";
import { useNavigate } from "react-router-dom";
const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, users } = useSelector((store) => store.login);
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    try {
      await dispatch(getUsers());
    } catch (err) {
      throw err;
    }
  };
  const userHandler = (id) => navigate(`/user/${id}`);
  return (
    <section className="user-list">
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          {users.map((user) => (
            <div
              key={user.id}
              className="user-list__item"
              onClick={() => userHandler(user.id)}
            >
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
