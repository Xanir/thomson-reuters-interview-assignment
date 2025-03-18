
import {
  default as ATMScreenHome,
} from '../Screens/atmScreenHome.tsx'
import {
  default as ATMScreenPin,
} from '../Screens/atmScreenPin.tsx'
import {
  default as ATMScreenBalance,
} from '../Screens/atmScreenBalance.tsx'
import {
  default as ATMScreenWithdrawl,
} from '../Screens/atmScreenWithdrawl.tsx'
import {
  default as ATMScreenDeposit,
} from '../Screens/atmScreenDeposit.tsx'
import {
  default as ATMScreenUserMenu,
} from '../Screens/atmScreenUserMenu.tsx'

export const Screens = {
  HOME: ATMScreenHome,
  PIN: ATMScreenPin,
  MENU: ATMScreenUserMenu,
  WITHDRAWL: ATMScreenWithdrawl,
  DEPOSIT: ATMScreenDeposit,
  BALANCE: ATMScreenBalance
};

export type ScreenType = keyof typeof Screens;
