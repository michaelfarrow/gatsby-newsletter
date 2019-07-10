import React from 'react'
import { default as ReactModal } from 'react-modal'

ReactModal.setAppElement('#___gatsby')

class Modal extends React.Component {
  static defaultProps = {
    showClose: true,
  }

  render() {
    const { children, showClose, ...otherProps } = this.props
    return (
      <ReactModal
        {...otherProps}
        portalClassName='modal'
        overlayClassName='modal__overlay'
        className='modal__content'
      >
        <>
          {showClose ? (
            <button
              className='modal__close'
              onClick={this.props.onRequestClose}
            >
              Close
            </button>
          ) : null}
          <div className='modal__content-children'>{children}</div>
        </>
      </ReactModal>
    )
  }
}

export default Modal
