import React, { FC } from 'react'
import { BackdropStyles } from './styles'
import { motionPropsBackdrop } from '../../../utils/animation/views'

type Props = { className?: string; active?: boolean; onClick?: () => void }
export const Backdrop: FC<Props> = ({ active, onClick, ...rest }) => {
  return active ? <BackdropStyles {...motionPropsBackdrop} onClick={onClick} {...rest} /> : null
}
