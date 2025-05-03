import * as React from "react";
import { last } from "lodash";

import { UnconnectedEditorProps } from "../EditorProps";

const BooleanFieldEditor: React.FC<UnconnectedEditorProps> = ({
  path,
  value,
  onValueChanged
}) => {
  const label = last(path)!;
  const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChanged(e.target.checked)
  }, [onValueChanged]);
  return (
      <div>
          <label>{label}</label>
          <input checked={Boolean(value)} onChange={onChange} type="checkbox" />
      </div>
  );
};

export default BooleanFieldEditor;
