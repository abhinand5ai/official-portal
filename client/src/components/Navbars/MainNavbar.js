import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
// nodejs library that concatenates strings
import classnames from 'classnames'

// reactstrap components
import { Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, Button } from 'reactstrap'

import Logo from '../../assets/img/csegsa/csegsa.webp'

function MainNavbar() {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent')
  const [navbarCollapse, setNavbarCollapse] = React.useState(false)

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse)
    document.documentElement.classList.toggle('nav-open')
  }

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (document.documentElement.scrollTop > 299 || document.body.scrollTop > 299) {
        setNavbarColor('bg-danger')
      } else if (document.documentElement.scrollTop < 300 || document.body.scrollTop < 300) {
        setNavbarColor('navbar-transparent')
      }
    }

    window.addEventListener('scroll', updateNavbarColor)

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor)
    }
  })
  return (
    <>
      <Navbar className={classnames('fixed-top', navbarColor)} color-on-scroll="300" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand data-placement="bottom" to="/home" title="CSEGSA" tag={Link}>
              <img src={Logo} alt={'csegsa_logo'} style={{ width: 400 }} />
            </NavbarBrand>
            <button
              aria-expanded={navbarCollapse}
              className={classnames('navbar-toggler navbar-toggler', {
                toggled: navbarCollapse
              })}
              onClick={toggleNavbarCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse className="justify-content-end" navbar isOpen={navbarCollapse}>
            <Nav navbar>
              <NavItem>
                <NavLink to="/home" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/events" tag={Link}>
                  Events
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/jobs" tag={Link}>
                  Jobs
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/home/#contact" tag={HashLink}>
                  Contact Us
                </NavLink>
              </NavItem>
              {/* <NavItem>
                            <NavLink to="/login" tag={Link}>
                                Login
                            </NavLink>
                        </NavItem> */}
              <NavItem>
                <Button className="btn-round" color="info" to="/login" tag={Link}>
                  <i className="nc-icon nc-single-02"></i> Login
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MainNavbar
