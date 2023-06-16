import React from 'react'
import Header from './Header'
import Content_header from './Home/Content_header'
import Content from './Home/Content'
import Soundkits from './Home/Soundkits'
import Footer from './Footer'
import Scroll_btn from './Scroll_btn'

const Home = () => {
  return (
    <>
        <Scroll_btn />
        <Header />
        <Content_header />
        <Content />
        <Soundkits />
        <Footer />
    </>
  )
}

export default Home