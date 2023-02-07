import styled from 'styled-components';

export const Board = styled.div`
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;

  > header {
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;

    .chip {
      border-radius: 8px;
      font-weight: 600;
    }
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
    height: 128px;
    background-color: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;

    & + button {
      margin-top: 24px;
    }

    .chip {
      border-radius: 8px;
      font-weight: 600;
      padding: 0.5rem;
    }
  }
`;
