import { useState } from "react";
import { Link } from "react-router";
import { handleSignup } from "../../handle-fn/handle-signup";
import { useDispatch, useSelector } from "react-redux";
import { setBio } from "../../global-state/bio-slice";
import { onSpin } from "../../global-state/spinner-slice";
import { onResponse, closeResponse } from "../../global-state/response-slice";

export default function Singup() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const bio = useSelector((state) => state.bio);
  const dispatch = useDispatch();

  function handleChange(e) {
    setInfo({
      ...info,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(onSpin());
    handleSignup(info).then((bio) => {
      dispatch(setBio({ name: bio.name, email: bio.email }));
      dispatch(onSpin());
      dispatch(
        onResponse({
          received: true,
          danger: bio.message.error ? true : false,
          message: bio.message.success
            ? bio.message.success
            : bio.message.error,
        })
      );
      setTimeout(() => dispatch(closeResponse()), 1500);
    });
  }

  return (
    <section className="rel">
      {bio.name && bio.email ? (
        <div className="user-info col">
          <h2 className="mt0 mb0 tx-25">Welcome {bio.name}</h2>
          <p className="tx-16 gre mt10 mb0">{bio.email}</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="card w40 ma col gp-40 p20 mb-c"
          autoComplete="off"
        >
          <div>
            <div className="row sp-b al-c mb10">
              <label htmlFor="name" className="blc tx-14 bl blc">
                Name
              </label>
              <small className="tx-12 gre">
                (name must only text and numbers)
              </small>
            </div>
            <input
              type="text"
              name="name"
              id="name"
              autoFocus="true"
              required
              onChange={handleChange}
              value={info.name}
            />
          </div>
          <div>
            <div className="row sp-b al-c mb10">
              <label htmlFor="email" className="blc tx-14 bl blc">
                Email
              </label>
              <small className="tx-12 gre">(Enter a valid email)</small>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              required
              onChange={handleChange}
              value={info.email}
            />
          </div>
          <div>
            <div className="row sp-b mb10 mob-col mob-st">
              <label htmlFor="password" className="blc tx-14 bl">
                Passowrd
              </label>
              <small className="tx-12 gre">
                (password must only text and numbers)
              </small>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              required
              onChange={handleChange}
              value={info.password}
            />
          </div>
          <div>
            <p className="mt0 mb10 tx-14 tx-e">
              Already have an Account?
              <Link to="/login">
                <span className="tx-16 blu mp ml5">Login</span>
              </Link>
            </p>
            <button>Register</button>
          </div>
        </form>
      )}
    </section>
  );
}
