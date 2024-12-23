import styled from 'styled-components';

export const DragIcon = () => {
  return (
    <DragIconWrapper>
      <span />
      <span />
      <span />
    </DragIconWrapper>
  );
};

const DragIconWrapper = styled.div`
  position: relative;
  width: 6px;
  height: 9px;
  background-color: transparent;
  cursor: move;
  margin-right: 12px;

  span {
    position: absolute;
    background-color: #504E4D;
    width: 100%;
    height: 1px;
    border-radius: 1px;
  }

  span:nth-child(1) {
    top: 0;
  }

  span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }

  span:nth-child(3) {
    bottom: 0;
  }
`;
