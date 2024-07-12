import { Link } from "react-router-dom";
function ForgetPassword() {
  return (
    <>
      <div className="container ">
        <div className="row justify-content-center">
          <div style={{ marginTop: "10rem" }} className="col-md-4 ">
            <div className="card">
              <div className="card-header text-center">
                <h3>Forgot Password</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Masukkan Email"
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Send Reset Link
                    </button>
                  </div>
                  <div className="mt-3 text-center">
                    <Link to="/login">Back to Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
