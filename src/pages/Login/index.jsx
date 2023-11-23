import LoginImage from '../../assets/images/login_register.svg';

// eslint-disable-next-line react/prop-types
export default function Login() {
  return (
    <div className="container-fluid ms-2 py-4">
      <div className="cursor-pointer">
        <i className="bi bi-chevron-left"></i>
        <span className="fw-bold ms-2">Kembali</span>
      </div>

      <div
        className="container d-flex align-items-center"
        style={{ minHeight: '80vh' }}
      >
        <div
          className="container bg-secondary border border-1 my-4 p-4 d-flex flex-column rounded-2 shadow-sm"
          style={{ width: '448px' }}
        >
          <img
            src={LoginImage}
            width={215}
            alt="login-image"
            className="object-fit-contain align-self-center my-2"
          />
          <h1 className="fw-bold fs-4 text-center my-2">Log In</h1>
          <form>
            <div className="mb-3 mt-4">
              <input
                type="username"
                name="username"
                className="form-control text-normal border-0 border-bottom rounded-0 outline-none"
                id="username"
                placeholder="Username"
              />
            </div>
            <div className="mb-3 mt-4">
              <input
                type="password"
                name="password"
                className="form-control text-normal border-0 border-bottom rounded-0 outline-none"
                id="password"
                placeholder="Password"
              />
            </div>
            <p className="fw-bold text-primary text-normal cursor-pointer text-end">
              Lupa Password?
            </p>
            <button className="btn btn-primary text-normal fw-bold rounded-4 w-100 mt-4">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
