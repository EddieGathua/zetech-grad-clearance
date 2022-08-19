const StudentLogin = () => {
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
          <label htmlFor="Faculty">Faculty:</label>
          <input type="text" name="faculty" id="faculty" />
        </div>
        <div className="form-group">
          <label htmlFor="Course">Degree/Diploma Completed:</label>
          <p className="example">(Write it as BAS or Bsc.IT)</p>
          <input type="text" name="course" id="course" />
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

export default StudentLogin;
