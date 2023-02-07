import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';

export const AppBar = styled(MuiAppBar)`
  display: flex;
  align-items: center;
  background-color: #D73035;
`;

export const Toolbar = styled(MuiToolbar)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;

  .logo {
    color: #fff;

    span {
      font-weight: 400;
    }
   }
`;
