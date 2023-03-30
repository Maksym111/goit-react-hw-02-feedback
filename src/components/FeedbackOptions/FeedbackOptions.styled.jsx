import styled from '@emotion/styled';

const ListBtn = styled.ul`
  display: flex;
  gap: 30px;
`;

const FeedbackBtn = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  border: 1px solid black;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    box-shadow: 0px 4px 8px gray;
  }
`;

export { ListBtn, FeedbackBtn };
