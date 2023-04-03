import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/LoginSlice";
const User = () => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.login);
  const { id } = useParams();
  useEffect(() => {
    fetchUser();
  }, [id]);
  const fetchUser = async () => {
    try {
      await dispatch(getUser({ id }));
    } catch (err) {
      throw err;
    }
  };
  return (
    <section className="user">
      {loading && <p>loading...</p>}
      {!loading && (
        <>
          <img
            src={user.avatar}
            alt={user.first_name}
            className="user__image"
          />
          <div className="user__detail">
            <p>
              {user.first_name} {user.last_name}
            </p>
            <p>{user.email}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default User;
