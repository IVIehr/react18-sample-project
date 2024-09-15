const FormInput = (props: FormInputProps) => {
  const { label, name, type, defaultValue } = props;
  return (
    <div className="form-control ">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input input-bordered "
        autoComplete=""
      />
    </div>
  );
};
export default FormInput;
