import { motion } from 'framer-motion'
import React, { FC } from 'react'
import { LoginForm } from '../../organism/forms/Login'
import { motionPropsTransitionViewOpacity } from '../../../utils/animation/views'

export const LoginTemplate: FC = () => {
  return (
    <motion.div {...motionPropsTransitionViewOpacity}>
      <LoginForm />
    </motion.div>
  )
}
