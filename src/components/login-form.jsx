const LoginForm = () => {
  const inputData = [
    { id: 0, name: "username", label: "username", type: "text" },
    { id: 1, name: "password", label: "password", type: "password" },
  ];
  return (
    <section className="login-form">
      <form className="login-form__form">
        {inputData.map((input) => (
          <div key={input.id} className="login-form__form__item">
            <label className="login-form__form__item__label">
              {input.label}
            </label>
            <input
              type={input.type}
              placeholder={input.name}
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
