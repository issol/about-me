import React from 'react';
import FooterPresenter from './presenter';
import Swal from 'sweetalert2';

const FooterContainer = () => {
  const CopiedEmail = async () => {
    const result = await Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '이메일이 복사되었습니다!',
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return <FooterPresenter CopiedEmail={CopiedEmail} />;
};

export default FooterContainer;
