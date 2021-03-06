import React, { PureComponent, PropTypes } from 'react'
import classnames from 'classnames'

export class TableWrapper extends PureComponent {
    render() {
        const { className, children } = this.props

        return (
            <table
                className={classnames(
                    'table',
                    className
                )}
            >
                {children}
            </table>
        )
    }
}

TableWrapper.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string
}
