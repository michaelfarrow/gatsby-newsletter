import React from 'react'
import { default as ReactModal } from 'react-modal'

ReactModal.setAppElement('#___gatsby')

const Modal = props => {
  const { children, ...otherProps } = props
  return (
    <ReactModal {...otherProps}>
      <div>
        <button onClick={props.onRequestClose}>Close</button>
        <div>{children}</div>
      </div>
    </ReactModal>
  )
}

export default Modal
