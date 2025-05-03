import * as React from "react";

export type CommitTextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onCommit?(value: string): void;
  label?: string;
};

const CommitTextField: React.FC<CommitTextFieldProps> = props => {
  const {
    onCommit,
    onChange: propsOnChange,
    onBlur: propsOnBlur,
    onKeyPress: propsOnKeyPress,
    value: prevValue,
      label,
    ...restProps
  } = props;

  const [editValue, setValue] = React.useState<string | null>(null);

  const commit = React.useCallback(() => {
    if (onCommit && editValue && editValue !== prevValue) {
      onCommit(editValue);
    }

    setValue(null);
  }, [editValue, prevValue, onCommit]);

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (propsOnChange) {
        propsOnChange(e);
      }

      setValue(e.target.value);
    },
    [propsOnChange]
  );

  const onKeyPress = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (propsOnKeyPress) {
        propsOnKeyPress(e);
      }

      if (e.key === "Enter") {
        commit();
      }
    },
    [propsOnKeyPress, commit]
  );

  const onBlur = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (propsOnBlur) {
        propsOnBlur(e);
      }

      commit();
    },
    [propsOnBlur, commit]
  );

  React.useEffect(() => {
    // On unmount, try to commit.
    return () => commit();
  }, []);

  const displayValue = editValue == null ? prevValue : editValue;
  return (
      <div>
          <label>{label}</label>
          <input {...restProps} value={displayValue}
                 onChange={onChange}
                 onKeyUp={onKeyPress}
                 onBlur={onBlur} type="text"/>
      </div>
  );
};

export default CommitTextField;
