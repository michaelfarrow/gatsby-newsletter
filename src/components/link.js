import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Link = props => {
  const { href, children, ...otherProps } = props
  const isExternal = href.match(/^https?:/)
  const isHash = href.match(/^#/)
  if (isExternal) {
    return (
      <OutboundLink
        {...otherProps}
        href={href}
        target='_blank'
        rel='noreferrer'
      >
        {children}
      </OutboundLink>
    )
  }
  if (isHash) {
    return (
      <a {...otherProps} href={href}>
        {children}
      </a>
    )
  }
  const _href = (href && href[0] !== '/' && `/${href}`) || href
  return (
    <GatsbyLink {...otherProps} to={_href}>
      {children}
    </GatsbyLink>
  )
}

export default Link
