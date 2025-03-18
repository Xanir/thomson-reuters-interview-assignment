
import {
  default as ATMScreenHome,
  ButtonActions as HomeButtonActions
} from '../Screens/atmScreenHome.tsx'
import {
  default as ATMScreenPin,
  ButtonActions as PinButtonActions
} from '../Screens/atmScreenPin.tsx'
import {
  default as ATMScreenBalance,
  ButtonActions as BalanceButtonActions
} from '../Screens/atmScreenBalance.tsx'
import {
  default as ATMScreenWithdrawl,
  ButtonActions as WithdrawlButtonActions
} from '../Screens/atmScreenWithdrawl.tsx'
import {
  default as ATMScreenDeposit,
  ButtonActions as DepositButtonActions
} from '../Screens/atmScreenDeposit.tsx'
import {
  default as ATMScreenUserMenu,
  ButtonActions as UserMenuButtonActions
} from '../Screens/atmScreenUserMenu.tsx'

export const Screens = {
  HOME: ATMScreenHome,
  PIN: ATMScreenPin,
  MENU: ATMScreenUserMenu,
  WITHDRAWL: ATMScreenWithdrawl,
  DEPOSIT: ATMScreenDeposit,
  BALANCE: ATMScreenBalance
};

export const ButtonActions = {
  HOME: HomeButtonActions,
  PIN: PinButtonActions,
  MENU: UserMenuButtonActions,
  WITHDRAWL: WithdrawlButtonActions,
  DEPOSIT: DepositButtonActions,
  BALANCE: BalanceButtonActions
};

export type ScreenType = keyof typeof Screens;
