import React, { PureComponent as Component, PropTypes } from 'react'
import classnames from 'classnames'
import { Loader } from '.'

export default class Button extends Component {
  render() {
    const { children, onClick, disabled, className, title, isLoading, label } = this.props
    const buttonProps = {
      className: classnames(
          'btn btn-default',
          className,
          { 'btn-loading': isLoading }
      ),
      title,
      disabled
    }

    if (!disabled) {
      buttonProps.onClick = onClick
    }

    return (
      <button
        type="button"
        {...buttonProps}
      >
        {
          isLoading ?
            <span style={{ position: 'relative' }}>
              <Loader small={true} />
              <span className="invisible">{children}</span>
            </span>
            : <span>{label}</span>
        }
      </button>
    )
  }
}

Button.defaultProps = {
  className: '',
  disabled: false,
  isLoading: false
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.any
}
