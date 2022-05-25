import React, { FC, PropsWithChildren } from 'react'
import { ModalStyles } from './styles'
import { AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { Backdrop, Title } from '../../atoms'
import { Box, Breakpoint, IconButton } from '@mui/material'
import { motionPropsModal } from '../../../utils/animation/views'
import { Close } from '@mui/icons-material'

export interface ModalProps {
  className?: string
  block?: boolean
  isOpen?: boolean
  title?: string
  size?: Breakpoint
  width?: string
  padding?: string
  close?: () => void
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  isOpen,
  title,
  size = 'sm',
  close,
  block,
  width,
  padding,
  ...rest
}) => {
  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <Box
          top={0}
          left={0}
          position='fixed'
          zIndex={1}
          overflow={'hidden'}
          height={'100%'}
          width={'100%'}
        >
          <Backdrop onClick={!block ? close : undefined} active />

          <ModalStyles size={size} width={width} padding={padding} {...motionPropsModal} {...rest}>
            {(close || title) && (
              <Box
                pt={!title ? 3 : 0}
                mt={title ? 1 : 0}
                display={'flex'}
                alignItems='center'
                position='relative'
                justifyContent={'center'}
                width='100%'
              >
                {title && (
                  <Title my={1} className={'title'}>
                    {title}
                  </Title>
                )}
                {close && (
                  <IconButton size={'small'} className={'close'} onClick={close}>
                    <Close fontSize={'small'} />
                  </IconButton>
                )}
              </Box>
            )}
            {children}
          </ModalStyles>
        </Box>
      ) : null}
    </AnimatePresence>,
    document.querySelector('#modal') as HTMLElement,
  )
}
