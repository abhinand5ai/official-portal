import React from 'react'

// reactstrap components
import { Container } from 'reactstrap'
// core components

function EventPageHeader() {
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
          backgroundImage: 'url(' + require('assets/img/fabio-mangione.jpg').default + ')'
        }}
        className="page-header page-header-xs"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Events</h1>
          </div>
        </Container>
      </div>
    </>
  )
}

export default EventPageHeader
