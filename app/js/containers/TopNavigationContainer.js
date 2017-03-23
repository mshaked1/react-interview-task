import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { routingPathnameSelector } from '../reducers'
import { TopNavigationLinks } from '../components/Navigation'

class TopNavigationContainer extends Component {
  render() {
    const { currentPathname } = this.props

    return (
      <header>
        <TopNavigationLinks {...{ currentPathname }} />
      </header>
    )
  }
}

TopNavigationContainer.propTypes = {
  currentPathname: PropTypes.string
}

export default connect(
    state => ({
      currentPathname: routingPathnameSelector(state)
    }),
    dispatch => bindActionCreators({
    }, dispatch)
)(TopNavigationContainer)
