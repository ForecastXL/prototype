import React from 'react'
import { oneOf } from 'prop-types'
import SuccessIcon from 'material-ui/svg-icons/action/check-circle'
import InfoIcon from 'material-ui/svg-icons/action/info'
import ErrorIcon from 'material-ui/svg-icons/alert/error'
import WarningIcon from 'material-ui/svg-icons/alert/warning'
import { colors } from '../../../styles'

const iconStyles = {
  marginRight: '0.5em'
}

const map = {
  error: <ErrorIcon style={{ ...iconStyles, fill: colors.darkRed }} />,
  warning: <WarningIcon style={{ ...iconStyles, fill: colors.darkYellow }} />,
  info: <InfoIcon style={{ ...iconStyles, fill: colors.darkBlue }} />,
  success: <SuccessIcon style={{ ...iconStyles, fill: colors.darkGreen }} />
}

function AlertIcon({ type }) {
  return map[type]
}

AlertIcon.propTypes = {
  type: oneOf(['error', 'warning', 'info', 'success']).isRequired
}

export default AlertIcon
