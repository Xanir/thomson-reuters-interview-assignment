
import ATMScreenHome from '../Screens/atmScreenHome.tsx'
import ATMScreenPin from '../Screens/atmScreenPin.tsx'
import ATMScreenBalance from '../Screens/atmScreenBalance.tsx'
import ATMScreenWithdrawl from '../Screens/atmScreenWithdrawl.tsx'
import ATMScreenDeposit from '../Screens/atmScreenDeposit.tsx'
import ATMScreenUserMenu from '../Screens/atmScreenUserMenu.tsx'

export const Screens = {
  HOME: ATMScreenHome,
  PIN: ATMScreenPin,
  MENU: ATMScreenUserMenu,
  WITHDRAWL: ATMScreenWithdrawl,
  DEPOSIT: ATMScreenDeposit,
  BALANCE: ATMScreenBalance
};

export type ScreenType = keyof typeof Screens;
