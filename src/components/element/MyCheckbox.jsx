/**
 *
 * @param {{
 * id: string,
 * name: string,
 * label: string,
 * description: string,
 * value: string,
 * checked: boolean,
 * handleChange: (value, name, checked) }} props
 * @returns
 */
export default function MyCheckbox(props) {
  const { id, name, label, description, value, checked, handleChange } = props;

  /**
   *
   * @param {{
   *  target: { value: string, checked: boolean }
   * }} e
   */
  const onChange = (e) => {
    handleChange(e.target.value, name, e.target.checked);
  };

  return (
    <div className="custom_checkbox mt-0">
      <input
        type="checkbox"
        id={id}
        onChange={onChange}
        className=""
        value={value}
        name="mail_rating_reminder"
        checked={checked}
      />
      <label htmlFor={id}>
        <span className="shadow_checkbox" />
        {label && <span className="radio_title">{label}</span>}
        {description && <span className="desc">{description}</span>}
      </label>
    </div>
  );
}
