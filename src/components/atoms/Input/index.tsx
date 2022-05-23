import * as React from 'react'
import { FC } from 'react'
import { Box, IconButton, InputAdornment, TextField, TextFieldProps, Tooltip } from '@mui/material'
import { SvgIconComponent } from '@mui/icons-material'
import InfoIcon from '@mui/icons-material/Info'

export type InputProps = {
  name?: string
  label?: string
  icon?: SvgIconComponent | FC
  error?: string
  onClickIcon?: () => void
  hideError?: boolean
  tooltip?: string
} & Omit<TextFieldProps, 'error'>

export const Input: FC<InputProps> = ({
  name = '',
  placeholder,
  className = '',
  error,
  disabled,
  margin = 'dense',
  onClickIcon,
  hideError,
  tooltip,
  helperText,
  label,
  icon: Icon = null,
  ...rest
}) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      width='100%'
      position='relative'
      className={className}
    >
      <TextField
        disabled={disabled}
        name={name}
        margin={margin}
        label={label || placeholder}
        error={!!error}
        helperText={helperText || (!hideError ? error : '')}
        InputProps={{
          endAdornment: (Icon || tooltip) && (
            <InputAdornment position={'end'}>
              {onClickIcon && Icon ? (
                <IconButton
                  color={error ? 'error' : 'inherit'}
                  tabIndex={-1}
                  size={'small'}
                  onClick={onClickIcon}
                >
                  <Icon className={'icon'} fontSize={'small'} />
                </IconButton>
              ) : tooltip ? (
                <Tooltip title={tooltip}>
                  <InfoIcon color={error ? 'error' : 'disabled'} fontSize='small' />
                </Tooltip>
              ) : Icon ? (
                <Icon className={'icon'} fontSize={'small'} />
              ) : null}
            </InputAdornment>
          ),
        }}
        {...rest}
      />
    </Box>
  )
}
