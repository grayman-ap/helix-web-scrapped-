import React from 'react'
import JumbotronContainer from './container/Jumbotron'
import ChatContainer from './container/Chat'
import Section from './container/Section'
import  Header from './container/Header'
import Footer from './container/Footer'
import './index.css'
export default function App() {
  return (
    <>
    <Header />
    <Section />
       <ChatContainer />
      <JumbotronContainer />
      <Footer />
      </>
  
  )
}