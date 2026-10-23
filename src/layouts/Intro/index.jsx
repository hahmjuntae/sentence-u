import React from 'react';

import { Container, Description, Image, PS, Title } from './styles';

const Intro = () => {
  return (
    <Container>
      <Image
        src={'/src/assets/images/landing_graphic.gif'}
        alt='poster'
      />

      <Description>
        <Title>
          <img
            src='/src/assets/images/logo_empty.png'
            alt='센텐스유 로고'
          />
        </Title>
        <p>
          <b>센텐스유</b>는 짧은 글로 사람들에게 동기부여와 여러 긍정적인 메시지를 담기위해 만들어진
          공간입니다. 들려주고 싶은 이야기를 적어보세요. 글에는 힘이 있습니다.
        </p>
      </Description>

      <PS>여러분의 한 마디로 이 공간을 아름답게 빛내주세요.</PS>
    </Container>
  );
};

export default Intro;
