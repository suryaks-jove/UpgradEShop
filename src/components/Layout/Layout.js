import * as React from 'react';
import AppBar from '../NavBar/NavBar';
import {
  Outlet
} from "react-router-dom";

function Home() {
  return (
    <>
      <AppBar />
      <div id="app-page">
        <Outlet />
      </div>
    </>
  )
}

export default Home;