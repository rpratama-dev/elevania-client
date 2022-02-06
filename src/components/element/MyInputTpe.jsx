/**
 *
 * @param {{
 *  title: string,
 *  type: string,
 *  name: string,
 *  value: string,
 *  handleChange: (value: string, name: string) => void,
 * }} props
 * @returns
 */
export default function MyInputType(props) {
  const { title, type, name, id, value, handleChange } = props;

  /**
   *
   * @param {{
   * target: { value: string }
   * }} e
   */
  const onChange = (e) => {
    handleChange(e.target.value, name);
  };

  return (
    <div className="form-group">
      <label htmlFor="user_name">{title}</label>
      <input
        id={id || name}
        type={type || 'text'}
        onChange={onChange}
        value={value || ''}
        className="text_field"
        placeholder="Enter your username..."
      />
    </div>
  );
}
