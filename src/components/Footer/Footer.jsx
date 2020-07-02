import React from 'react';
import './Footer.scss'
import styled, { withTheme } from 'styled-components';
import { footerBackgroundColor, footerTextColor } from '../../theme';

function Footer() {

  const Footer = styled.div`
    background: ${footerBackgroundColor};
    color: ${footerTextColor};
  `;
    
  return (
    <Footer className="footer">
            <p>
                2020 © all rights reserved<br />
                Created by Annie Chase Davis
            </p>
    </Footer>
  );
}

export default withTheme(Footer);