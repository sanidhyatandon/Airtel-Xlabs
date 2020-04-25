import React from 'react';
import classnames from 'classnames';
import './style/default.css';

const TextInput = props => {
  const {
    type,
    id,
    label,
    error,
    value,
    onChange,
    labelclasses,
    classes,
    inputClassName,
    placeholder,
    ariaLabel,
    minimum,
    disabled,
    tabIndex,
    refElement,
    displayIcon,
    autocomplete,
    allowNegativeValue,
    onKeyDown,
    ...otherProps
  } = props;

  const wrapperClasses = classnames(classes);
  const iconClass = displayIcon ? 'textinput-icons' : '';
  return (
    <div className={`${wrapperClasses} ${iconClass}`}>
      <input
        id={id}
        className={`no-label ${inputClassName}`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        title={ariaLabel}
        min={type === 'number' && !allowNegativeValue ? minimum : null}
        step={type === 'number' ? 'any' : null}
        disabled={disabled}
        tabIndex={tabIndex}
        ref={refElement}
        {...otherProps}
        {...(autocomplete ? '' : { autoComplete: 'off' })}
      />
      {displayIcon && <div className="textinput-icon">{displayIcon}</div>}
    </div>
  );
};

// TextInput.propTypes = {
//   tabIndex: PropTypes.number,
//   refElement: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
//   displayIcon: PropTypes.node,
//   onKeyDown: PropTypes.func,
//   allowNegativeValue: PropTypes.bool.isRequired,
//   ariaLabel: PropTypes.string.isRequired,
//   autocomplete: PropTypes.bool.isRequired,
//   classes: PropTypes.arrayOf(PropTypes.string).isRequired,
//   disabled: PropTypes.string.isRequired,
//   error: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   inputClassName: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   labelclasses: PropTypes.string.isRequired,
//   minimum: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   placeholder: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
// };

// TextInput.defaultProps = {
//   tabIndex: 0,
//   refElement: undefined,
//   displayIcon: undefined,
//   onKeyDown: () => {},
// };

export default TextInput;
