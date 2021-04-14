import React from 'react';
import styled from 'styled-components';

const AboutPresenter = () => {
  return (
    <Container id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <AboutHeader>About Me</AboutHeader>
          </div>
          <div className='col-md-8'>
            <Introduce>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi
              ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam
              laoreet placerat. Donec eu vehicula neque. Donec viverra lorem nunc, tempus euismod eros sollicitudin ut. Quisque et
              tincidunt libero. Donec id pharetra justo. Proin euismod lacinia dolor, eu scelerisque justo tempus pharetra.
              Vivamus nunc justo, finibus ut nisl sed, euismod rhoncus nulla. Proin sed magna egestas, egestas ante et, congue
              eros. In consequat, mauris dapibus tincidunt suscipit, ex libero aliquet diam, at maximus risus enim non leo.
            </Introduce>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 75px 15px;
  border-bottom: 1px solid #dcd9d9;
`;

const AboutHeader = styled.h2`
  color: #374054;
`;

const Introduce = styled.p`
  color: #74808a;
  margin: 0;
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

export default AboutPresenter;
