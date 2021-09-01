import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Navbar = () => {
  const [path, setPath] = useState(null)
  useEffect(() => {
    setPath(location.pathname)
  }, [])
  return (
    <NavStyles>
      <div className="left">
        <img src="https://static.nicegoodthings.com/works/vera/wb-logo.png" className="logo" alt="webrowse logo" />
        <h2 className="title">
          webrowse
        </h2>
      </div>
      <div className="middle">
        <a className={`link ${path == '/' ? 'curr' : ''}`} href="/">Home</a>
        <a className={`link ${path == '/howto' ? 'curr' : ''}`} href="/howto">How It Works</a>
      </div>
      <div className="right">
        <button className="btn login">Log In</button>
        <a className="btn add" target="_blank" href="https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn/related">Add to Chrome</a>
      </div>
    </NavStyles>
  )
}

export const NavStyles = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(185, 185, 185, 0.25);
  padding:15px 28px;
  .left{
    display: flex;
    align-items: center;
    .logo{
      width:32px;
      height:32px;
      margin-right: 5px;
    }
    .title{
      text-transform: capitalize;
      font-size: 20px;
      line-height: 25px;
      color: #056CF2;
      margin-right: 32px;
    }
    
  }
  .middle{
      display: flex;
      gap:20px;
      .link{
        color:#616161;
        font-size: 14px;
        line-height: 18px;
        text-decoration: none;
        &.curr{
          color:#000;
          border-bottom: 1px solid #000;
        }
      }
  }
  .right{
    display: flex;
    gap:16px;
    font-size: 16px;
    .btn{
      text-decoration: none;
      border-radius: 5px;
      background: #056CF2;
      border:none;
      font-weight: bold;
      padding: 12px 16px;
      color: #fff;
      display: flex;
      align-items: center;
      &.login{
        background: none;
        color:#056CF2;
        border:2px solid #056CF2
      }
    }
  }
`

export default Navbar
