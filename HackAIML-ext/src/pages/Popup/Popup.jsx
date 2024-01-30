import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import styled from 'styled-components'

const Popup = () => {
  const getCurrentTab = async () => {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    console.log(tab);
    // return tab;
    console.log("https://developer.chrome.com/docs/extensions/reference/api/tabs#method-get")
  }

  return (
    // console.log()

    <PopupStyled className="App">
      <button className="button" onClick={getCurrentTab}>
        Scan
      </button>
    </PopupStyled>
  );
};

const PopupStyled = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  text-align: center;
  height: 100%;
  padding: 10px;
  background-color: #282c34;
  
`

export default Popup;
