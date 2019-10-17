import React from 'react'
import { Link } from 'gatsby'
import tw from 'tailwind.macro'
import Nav from '../components/nav'
import Promo from './base/Promo'
import logo from '../img/snapboard-logo.png'

class Layout extends React.Component {
  render () {
    const { title, children } = this.props
    return (
      <>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: '56rem',
          }}
        >
          <header css={tw`clearfix py-8`}>
            <h3
              style={{
                marginTop: -18,
                fontSize: '1.3em',
                float: 'left',
              }}
            >
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={`/`}
              >
                <img src={logo} alt='Snapboard Logo' style={{ width: 50, padding: 10, float: 'left' }} />
                <span style={{ float: 'left', lineHeight: '52px' }}>{title}</span>
              </Link>
            </h3>
            <div css={tw`float-right`}>
              <Nav />
            </div>
          </header>
          <main>{children}</main>
          <footer css={tw`mt-8`} style={{ color: '#ccc' }}>
            Snapboard © {new Date().getFullYear()}
          </footer>
        </div>
        <Promo product='Snapboard' />
      </>
    )
  }
}

export default Layout
