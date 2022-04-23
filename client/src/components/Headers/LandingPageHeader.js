import React from 'react'

// reactstrap components
import { Container, Button } from 'reactstrap'
import backgroundImage from 'assets/img/csegsa/Academic.JPG'
// core components

function LandingPageHeader() {
  const pageHeader = React.createRef()

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        const windowScrollTop = window.pageYOffset / 3
        pageHeader.current.style.transform = 'translate3d(0,' + windowScrollTop + 'px,0)'
      }
      window.addEventListener('scroll', updateScroll)
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll)
      }
    }
  })

  return (
    <>
      <div
        style={{
          backgroundImage: 'url(' + backgroundImage + ')'
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>
              <b>CSEGSA</b>
            </h1>
            <h3>
              <b>Computer Science and Engineering Graduate Student Association</b>
            </h3>
            <Button className="btn-round" color="danger" href="#about">
              Learn More
            </Button>
          </div>
        </Container>
      </div>
    </>
  )
}

export default LandingPageHeader
