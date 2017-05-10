import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Notifications from 'react-notification-system-redux'
import { getNotificationState } from '../selectors'

export function NotificationsContainer({ notifications }) {
  return <Notifications notifications={notifications} />
}

NotificationsContainer.propTypes = {
  notifications: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  notifications: getNotificationState(state)
})

export default connect(mapStateToProps)(NotificationsContainer)
