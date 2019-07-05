import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Link = props => {
  const { href, children, ...otherProps } = props
  const isExternal = href.match(/^https?:/)
  return isExternal
    ? <OutboundLink {...otherProps} href={href} target='_blank' rel='noreferrer'>{children}</OutboundLink>
    : <GatsbyLink {...otherProps} to={href}>{children}</GatsbyLink>
}

export default Link
