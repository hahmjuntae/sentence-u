import React, { useCallback, useRef, useState } from 'react';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from 'axios';

import useClickOutsideModal from '@hooks/useClickOutsideModal';
import { useGetAllPosts } from '@hooks/usePost';
import { sweetAlert } from '@utils/sweetAlert';

import { Button, Container, Form, FormHeader, Input } from './styles';

const WriteModal = ({
  userId,
  userAvatar,
  userName,
  setIsBtnActive,
  wirteModalOpen,
  setWirteModalOpen,
}) => {
  const ref = useRef();

  const { refetch } = useGetAllPosts();

  const [content, setContent] = useState('');

  /*============================================
                  모달 창 닫기
  ============================================*/
  const handleCloseWriteModal = useCallback(() => {
    setWirteModalOpen(false);
    setIsBtnActive(false);
  }, [setWirteModalOpen, setIsBtnActive]);

  // 모달 창 밖 클릭 시 닫힘
  useClickOutsideModal(ref, () => {
    setWirteModalOpen(false);
    setIsBtnActive(false);
  });

  /*============================================
                  포스트 작성
  ============================================*/
  const handleWritePost = (e) => {
    setContent(e.target.value);
  };

  const handleSubmitNewPost = useCallback(
    (e) => {
      e.preventDefault();
      if (!content) {
        sweetAlert('question', '입력 란이 빈 칸입니다.');
      } // 빈 칸일 경우
      if (content && userName && userId) {
        if (content.length > 300) {
          sweetAlert('question', '최대 글자 수를 초과했습니다.(최대 300자)');
        } else {
          axios
            .post('/api/posts', { userId, userAvatar, userName, content })
            .then(() => {
              refetch(); // 최신 글 리패치
              setContent(''); // 글 작성 칸 비우기
              handleCloseWriteModal(); // 모달창 닫기
              sweetAlert('success', '작성 성공');
            })
            .catch((error) => {
              console.error(error);
              sweetAlert('error', '에러가 발생했습니다.', '관리자에게 문의바랍니다.');
            });
        }
      }
    },
    [content, userId, refetch, userName, userAvatar, handleCloseWriteModal],
  );

  return (
    <Container>
      {wirteModalOpen && (
        <Form ref={ref}>
          <ArrowBackIosNewIcon onClick={handleCloseWriteModal} />

          <FormHeader>
            <img
              src='/src/assets/images/logo_empty.png'
              alt='센텐스유 로고'
            />
          </FormHeader>

          <Input
            autoFocus
            autoComplete='off'
            type='textarea'
            name='post-writeModal'
            id='post-write-label'
            placeholder='들려주고 싶은 이야기를 적어보세요.'
            value={content}
            onChange={handleWritePost}
          />

          <Button id='Button' onClick={handleSubmitNewPost}>
            <span className='button-top'>등록</span>
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default WriteModal;
