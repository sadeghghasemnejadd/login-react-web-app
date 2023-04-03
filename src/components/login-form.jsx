import { useRef } from "react";

const LoginForm = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const inputData = [
    {
      id: 0,
      name: "username",
      label: "username",
      type: "text",
      ref: usernameRef,
    },
    {
      id: 1,
      name: "password",
      label: "password",
      type: "password",
      ref: passwordRef,
    },
  ];
  const submitHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
  };
  return (
    <section className="login-form">
      <form className="login-form__form" onSubmit={submitHandler}>
        {inputData.map((input) => (
          <div key={input.id} className="login-form__form__item">
            <label className="login-form__form__item__label">
              {input.label}
            </label>
            <input
              type={input.type}
              placeholder={input.name}
              ref={input.ref}
              required
              className="login-form__form__item__input"
            />
          </div>
        ))}
        <button type="submit" className="login-form__form__btn">
          login
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
