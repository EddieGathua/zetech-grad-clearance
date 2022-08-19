import logo from "../assets/logo.png";

const StudentSignUp = () => {
  return (
    <form>
      <div className="inner-form">
        <div className="logo">
          <img src={logo} alt="University Logo" />
        </div>
        <div className="form-group">
          <label htmlFor="Admission Number">Admission Number:</label>
          <input type="number" name="admission number" id="admin-number" />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <input type="submit" value="SIGNUP" />
      </div>
    </form>
  );
};

export default StudentSignUp;
