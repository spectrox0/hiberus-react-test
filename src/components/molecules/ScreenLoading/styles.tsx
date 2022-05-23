import { styled } from '@mui/material'
import { motion } from 'framer-motion'

export const ScreenStyles = styled(motion.div)(() => ({
  backgroundColor: 'rgba(12,12,12 , 0.8)',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))
