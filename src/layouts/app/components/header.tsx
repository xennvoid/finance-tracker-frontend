import { Toolbar, Box, Chip } from '@mui/material';
import { FC } from 'react';
import SpriteSvg from '@components/sprite-svg';
import HighlightedIcon from './highlighted-icon';
import { StyledAppBar } from './styled-app-bar';
import { useLocation } from 'react-router';
import { pathTitles } from '../data/path-titles';
import TitleTypography from '@components/title-typography';
import { useActiveCardContext } from '@contexts/active-card-context';
import { formatCurrency } from '@utils/formatters/format-currency';
import CreateTransactionModal from '@features/transactions/components/create-transaction-modal';
import { useCreateTransactionModal } from '@features/transactions/hooks/use-create-transaction-modal';

interface HeaderProps {
  open: boolean;
  onClick: () => void;
  drawerWidth: number;
}

const Header: FC<HeaderProps> = ({ open, drawerWidth, onClick }) => {
  const { pathname } = useLocation();
  const { activeCard } = useActiveCardContext();

  const { modalOpened, toggleModal, toggleOpened } = useCreateTransactionModal(activeCard);

  const title = pathTitles[pathname] || 'Overview';

  return (
    <StyledAppBar position="fixed" open={open} drawerWidth={drawerWidth}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: { xs: 120, sm: 85, md: 95 },
        }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {!open && (
            <HighlightedIcon onClick={onClick}>
              <SpriteSvg
                spritePath="/navbar-sprite"
                id="menu-open"
                width={25}
                height={25}
                fill="#000"
              />
            </HighlightedIcon>
          )}
          <TitleTypography variant="h4">{title}</TitleTypography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
          {activeCard && (
            <Chip
              label={formatCurrency(activeCard.balance, activeCard.currency)}
              variant="outlined"
              color="primary"
              sx={(theme) => ({
                ...theme.typography.body1,
                fontWeight: 600,
                paddingY: 3,
              })}
            />
          )}
          <HighlightedIcon onClick={toggleModal}>
            <SpriteSvg spritePath="/transaction-sprite" id="transaction" fill="#2d60ff" />
          </HighlightedIcon>
          <HighlightedIcon>
            <SpriteSvg
              spritePath="/navbar-sprite"
              id="settings-empty"
              width={25}
              height={25}
              fill="#718EBF"
            />
          </HighlightedIcon>
          <HighlightedIcon>
            <SpriteSvg
              spritePath="/navbar-sprite"
              id="user"
              width={25}
              height={25}
              fill="#718EBF"
            />
          </HighlightedIcon>
        </Box>
      </Toolbar>
      <CreateTransactionModal opened={modalOpened} toggleOpened={toggleOpened} />
    </StyledAppBar>
  );
};

export default Header;
