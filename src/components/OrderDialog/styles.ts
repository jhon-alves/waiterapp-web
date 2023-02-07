import { styled } from '@mui/material/styles';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';

export const DialogTitle = styled(MuiDialogTitle)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
`;

export const DialogContent = styled(MuiDialogContent)`
  padding: 32px 32px 16px;

  .status-container {
    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
    }
  }

  .order-details {
    margin-top: 32px;

    > strong {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }

    .order-items {
      margin-top: 16px;

      .item {
        display: flex;

        & + .item {
          margin-top: 16px;
        }

        img {
          border-radius: 6px;
        }

        .quantity {
          font-size: 14px;
          color: #666;
          display: block;
          min-width: 20px;
          margin-left: 12px;
        }

        .product-details {
          margin-left: 4px;

          strong {
            display: block;
            margin-bottom: 4px;
          }

          span {
            font-size: 14px;
            color: #666;
          }
        }
      }
    }

    .total {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 24px;

      span {
        font-weight: 500;
        font-size: 14px;
        opacity: 0.8;
      }
    }
  }
`;

export const DialogActions = styled(MuiDialogActions)`
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .primary {
    background-color: #333;
    border-radius: 48px;
    color: #fff;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .secondary {
    border-radius: 48px;
    color: #D73035;
    padding: 12px 24px;
    border: 1px solid #D73035;
  }
`;
