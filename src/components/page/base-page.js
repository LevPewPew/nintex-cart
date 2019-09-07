import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const PageTemplate = (props) => {
   return (
      <div className={`${props.className} page-container`}>
         <header className="highlight-container">
            <h1>{props.heading}</h1>
            <div className="sub-heading">{props.subHeading}</div>
         </header>
         <section className="content">{props.children}</section>
         <section className="footer highlight-container">Watch this space for more great bargains.</section>
      </div>
   );
};

export const BasePage = styled(PageTemplate)`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 100%;
   height: 100%;

   header {
      flex-direction: column;
      h1 {
         margin-block-start: 0;
         margin-block-end: 0;
      }
   }

   .content {
      display: flex;
      flex-grow: 2;
   }
`;

BasePage.propTypes = {
   className: PropTypes.string,
   heading: PropTypes.string,
   subHeading: PropTypes.string,
};

BasePage.displayName = 'BasePage';
