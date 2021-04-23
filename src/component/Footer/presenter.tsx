import React from 'react';

import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

type Props = {
  CopiedEmail: () => Promise<void>;
};

const FooterPresenter = ({ CopiedEmail }: Props) => {
  return (
    <Container id='contact'>
      <div className='container'>
        <div className='row'>
          <CopyRight className='col-sm-5'>
            <CopyRightOwner>Copyright &copy; 2021 Issol</CopyRightOwner>
          </CopyRight>
          <GoTopContainer className='col-sm-2'>
            <GoTopWrapper id='to-top'>
              <a href='#lead'>
                <GoTopButton className='fa fa-chevron-up' aria-hidden='true'></GoTopButton>
              </a>
            </GoTopWrapper>
          </GoTopContainer>
          <SocialIcon className='col-sm-5'>
            <SocialList>
              <Social>
                <SocialLink href='https://github.com/issol' target='_blank'>
                  <i className='fab fa-github' aria-hidden='true'></i>
                </SocialLink>
              </Social>

              <Social>
                <SocialLink href='https://velog.io/@issol' target='_blank'>
                  <i className='fas fa-blog' aria-hidden='true'></i>
                </SocialLink>
              </Social>

              <Social>
                <SocialLink href='https://www.notion.so/77a36d3afafc4698a2f0fe9a08515510' target='_blank'>
                  <i className='fas fa-clipboard' aria-hidden='true'></i>
                </SocialLink>
              </Social>

              <Social>
                <SocialLink>
                  <CopyToClipboard text={'isolatorv@gmail.com'} onCopy={CopiedEmail}>
                    <CopyEmail className='fas fa-at' aria-hidden='true'></CopyEmail>
                  </CopyToClipboard>
                </SocialLink>
              </Social>
            </SocialList>
          </SocialIcon>
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
  color: #74808a;
`;

const GoTopContainer = styled.div`
  text-align: center;
`;

const GoTopWrapper = styled.span`
  cursor: pointer;
  display: block;
  margin: 15px auto 0 auto;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 3px solid lighten(#74808a, 25%);
  text-align: center;
`;

const GoTopButton = styled.i`
  color: #74808a;
`;

const SocialIcon = styled.div`
  text-align: right;
`;

const SocialList = styled.ul`
  margin: 5px 0 0 0;
  padding: 0;
`;

const Social = styled.li`
  display: inline-block;
  font-size: 1.25em;
  list-style: none;
`;

const SocialLink = styled.a`
  display: block;
  color: #74808a;
  padding: 10px;

  &:hover {
    color: #3498db;
  }
`;

const CopyEmail = styled.i`
  cursor: pointer;
`;

// const CopyEmailButton = styled.button`
//   background-image: url(${PaperPlaneImage});
//   background-color: white;
//   color: #74808a;
//   width: 40px;
//   height: 30px;
//   margin: 0 auto;
//   &:hover {
//     color: #3498db;
//   }
// `;

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
