import React from 'react'

import Link from '@components/link'
import Modal from '@components/modal'
import OEmbed from '@components/oembed'

class Video extends React.Component {
  state = {
    open: false,
  }

  openModal = e => {
    e.preventDefault()
    this.setState({ open: true })
  }

  closeModal = e => {
    e.preventDefault()
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    const { href } = this.props
    return (
      <>
        <Link className='video' {...this.props} onClick={this.openModal} />
        <Modal isOpen={open} onRequestClose={this.closeModal}>
          <OEmbed url={href} />
        </Modal>
      </>
    )
  }
}

export default Video
