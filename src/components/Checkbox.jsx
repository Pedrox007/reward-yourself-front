const Checkbox = ({ handleChange, defaultChecked }) => {
  return (
    <div className="checkbox-container">
      <p>Fixado</p>
      <div className="container-switch">
        <input
          type="checkbox"
          onChange={handleChange}
          defaultChecked={defaultChecked}
          className="checkbox"
          name="fixado"
        />
        <label className="switch" htmlFor="checkbox">
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
