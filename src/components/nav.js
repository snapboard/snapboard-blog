import React from 'react'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Link } from 'gatsby'

const LinkStyled = styled(Link)`
  margin-right: 1.5em;
  ${tw`
    text-gray-700
    text-sm
  `}
`

const AStyled = styled('a')`
  margin-right: 1.5em;
  ${tw`
    text-gray-700
    text-sm
  `}
`

export default function Nav () {
  return (
    <nav>
      <LinkStyled to='/weekly'>Weekly</LinkStyled>
      <LinkStyled to='/videos'>Videos</LinkStyled>
      <LinkStyled to='/articles'>Articles</LinkStyled>
      <AStyled href='https://snapboard.io'>Back to Snapboard</AStyled>
    </nav>
  )
}
