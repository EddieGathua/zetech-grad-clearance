const StaffSignUp = () => {
  return (
    <form>
      <div className="inner-form">
        <div className="logo">
          <img src={logo} alt="University Logo" />
        </div>
        <div className="form-group">
          <label htmlFor="Staff Number">Staff Number:</label>
          <input type="number" name="staff-number" id="staff-number" />
        </div>
        <div className="form-group">
          <label htmlFor="Department">Department:</label>
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="form-group">
          <label htmlFor="ConfirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
          />
        </div>
        <input type="submit" value="SIGNUP" />
      </div>
    </form>
  );
};

export default StaffSignUp;
