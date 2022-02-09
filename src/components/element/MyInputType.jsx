import { Input } from 'antd';

/**
 *
 * @param {{
 *  title: string,
 *  type: string,
 *  name: string,
 *  value: string,
 *  errMsg: string,
 *  handleChange: (value: string, name: string) => void,
 * }} props
 * @returns
 */
export default function MyInputType(props) {
  const { title, type, name, id, value, errMsg, handleChange } = props;
  let isChange = false;
  /**
   *
   * @param {{
   * target: { value: string }
   * }} e
   */
  const onChange = (e) => {
    handleChange(e.target.value, name);
    isChange = true;
  };

  return (
    <div className={`form-group ${errMsg ? 'needs-validated' : isChange ? 'was-validated' : ''} `}>
      <label htmlFor="user_name">
        {title} {('Hello', type === 'password' ? true : false)}
      </label>
      <Input
        id={id || name}
        type={type || 'text'}
        onChange={onChange}
        value={value || ''}
        className={`form-control ${errMsg ? 'is-invalid' : isChange ? 'is-valid' : ''}`}
        placeholder={title}
        autoComplete={type === 'password' ? 'true' : 'false'}
      />
      {errMsg && <div className="invalid-feedback d-block">{errMsg}!</div>}
    </div>
  );
}
