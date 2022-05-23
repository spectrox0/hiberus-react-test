import React, { FC } from 'react'
import { Spinner } from '../../atoms'
import { ScreenStyles } from './styles'
import { AnimatePresence } from 'framer-motion'
import { motionPropsLoadingScreen } from '../../../utils/animation/views'

type Props = {
  loading: boolean
}
export const ScreenLoading: FC<Props> = ({ loading }) => {
  return (
    <AnimatePresence>
      {loading ? (
        <ScreenStyles {...motionPropsLoadingScreen}>
          <Spinner />
        </ScreenStyles>
      ) : null}
    </AnimatePresence>
  )
}
