const Input = ({
  placeholder,
  label,
  name,
  inputStyle,
  type,
  value,
  onChange,
  imgType,
  accept,
}) => {
  return (
    <div className="form--group">
      <label htmlFor={label}>{label}</label>
      <input
        type={type ? "password" : imgType ? imgType : "text"}
        placeholder={placeholder}
        className={inputStyle}
        name={name}
        value={value}
        onChange={onChange}
        accept={accept}
      />
    </div>
  );
};

export default Input;
