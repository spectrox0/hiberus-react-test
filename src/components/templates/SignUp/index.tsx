import { motion } from 'framer-motion'
import React, { FC } from 'react'
import { SignUpForm } from '../../organism'
import { motionPropsTransitionViewOpacity } from '../../../utils/animation/views'

export const SignUpTemplate: FC = () => {
  return (
    <motion.div {...motionPropsTransitionViewOpacity}>
      <SignUpForm />
    </motion.div>
  )
}
