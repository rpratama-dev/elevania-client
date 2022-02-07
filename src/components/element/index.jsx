import MyInputType from './MyInputType';
import MyTextEditor from './MyTextEditor';

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
   *  errMsg: string,
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
          errMsg={data.errMsg}
          handleChange={data.handleChange}
        />
      </div>
    );
  }

  /**
   *
   * @param {{
   *  title: string,
   *  name: string,
   *  value: string,
   *  handleChange: (value: string, editor: any) => void,
   *  index: number,
   *  parentClassName: string,
   *  errMsg: string,
   * }} data
   * @returns
   */
  static myTextEditor(data) {
    return (
      <div key={data.index} className={data.parentClassName || ''}>
        <MyTextEditor
          id={`content-${data.id || data.name}`}
          title={data.title}
          content={data.value}
          errMsg={data.errMsg}
          handleEditorChange={(content) => data.handleChange(content, data.name)}
        />
      </div>
    );
  }
}

export default Element;
