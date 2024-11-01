const TextInput = ({ label, type, id, name, placeholder, required, value, onChange }) => {
    return (
      <div className="form-field">
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };

  export default TextInput;