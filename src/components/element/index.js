import MyInputType from './MyInputTpe';

class Element {
  /**
   *
   * @param {{
   *  title: string,
   *  type: string,
   *  name: string,
   *  value: string,
   *  handleChange: (value: string, name: string) => void,
   *  index: number,
   *  parentClassName: string,
   * }} data
   * @returns
   */
  static myInputType(data) {
    return (
      <div key={data.index} className={data.parentClassName || ''}>
        <MyInputType
          title={data.title}
          type={data.type}
          name={data.name}
          value={data.value}
          handleChange={data.handleChange}
        />
      </div>
    );
  }
}

export default Element;
