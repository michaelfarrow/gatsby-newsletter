import React from 'react'
import { get, CancelToken, isCancel } from 'axios'
import { isFunction } from 'lodash'

class OEmbed extends React.Component {
  state = {
    loading: true,
    html: null,
    ratio: null,
    error: null,
  }

  source = null

  cancelLoad() {
    if (this.source) {
      this.source.cancel()
      this.source = null
    }
  }

  load() {
    const url = this.props.url
    this.setState({ loading: true, html: null, ratio: null, error: null })
    this.cancelLoad()
    this.source = CancelToken.source()
    get(`https://noembed.com/embed?url=${encodeURIComponent(url)}`, {
      cancelToken: this.source.token,
    })
      .then(res => {
        if (res.data.error) {
          this.setState({
            loading: false,
            error: `Error loading url: "${url}"`,
          })
          return
        }
        const ratio =
          res.data.height && res.data.width
            ? res.data.height / res.data.width
            : null
        this.setState({ loading: false, html: res.data.html, ratio })
      })
      .catch(err => {
        if (isCancel(err)) {
          console.log('Request canceled')
        } else {
          this.setState({
            loading: false,
            error: `Error loading url: "${url}"`,
          })
        }
      })
      .finally(() => {
        this.source = null
      })
  }

  componentDidMount() {
    this.load()
  }

  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      this.load()
    }
  }

  componentWillUnmount() {
    this.cancelLoad()
  }

  render() {
    const { children } = this.props
    const { loading, html, ratio, error } = this.state
    const classNames = ['oembed']
    if (loading) classNames.push('oembed--loading')
    const styleInner = {}
    if (ratio) {
      styleInner.paddingTop = `${ratio * 100}%`
      classNames.push('oembed--responsive')
    }
    const _children = (
      <span className={classNames.join(' ')}>
        {loading ? (
          'Loading'
        ) : error ? (
          error
        ) : (
          <span
            className='oembed__inner'
            style={styleInner}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </span>
    )
    return isFunction(children)
      ? children({ loading, children: _children })
      : _children
  }
}

export default OEmbed
