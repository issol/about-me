import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const FooterPresenter = () => {
  return (
    <Container>
      <div className='container'>
        <div className='row'>
          <CopyRight className='col-sm-5'>
            <p>Copyright &copy; 2021 Issol</p>
          </CopyRight>
          <div className='col-sm-2 top'>
            <span id='to-top'>
              <i className='fa fa-chevron-up' aria-hidden='true'></i>
            </span>
          </div>
          <div className='col-sm-5 social'>
            <ul>
              <li>
                <a href='https://github.com/issol' target='_blank'>
                  <i className='fa fa-github' aria-hidden='true'></i>
                </a>
              </li>
              <li>
                <a href='https://stackoverflow.com/' target='_blank'>
                  <i className='fa fa-stack-overflow' aria-hidden='true'></i>
                </a>
              </li>
              <li>
                <a href='https://linkedin.com/' target='_blank'>
                  <i className='fa fa-linkedin' aria-hidden='true'></i>
                </a>
              </li>
              <li>
                <a href='https://www.facebook.com/' target='_blank'>
                  <i className='fa fa-facebook' aria-hidden='true'></i>
                </a>
              </li>
              <li>
                <a href='https://twitter.com/' target='_blank'>
                  <i className='fa fa-twitter' aria-hidden='true'></i>
                </a>
              </li>
              <li>
                <a href='https://plus.google.com/' target='_blank'>
                  <i className='fa fa-google-plus' aria-hidden='true'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  padding: 50px 0;
`;

const CopyRight = styled.div`
  padding-top: 20px;
`;

const CopyRightOwner = styled.p`
  margin: 0;
  color: $text;
`;

// $base-color: #3498db;
// $base-color-hover: darken($base-color, 10%);

// // Define background colors
// $background: #fff;
// $background-alt: #f2f2f5;

// // Define border colors
// $border: #dcd9d9;

// // Define text colors
// $heading: #374054;
// $text: #74808a;

export default FooterPresenter;
