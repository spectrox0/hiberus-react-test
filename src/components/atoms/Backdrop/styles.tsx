import { motion } from 'framer-motion'
import { styled } from '@mui/material'

export const BackdropStyles = styled(motion.div)`
  transform: translate3d(0, 0, 0);
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: #000;
  opacity: 0.85;
  left: 0;
  width: 100%;
  height: 100%;
`
