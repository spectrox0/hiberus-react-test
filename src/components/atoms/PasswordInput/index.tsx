import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FC, useState } from 'react'
import { Input, InputProps } from '../Input'

export const PasswordInput: FC<InputProps> = ({
  name = '',
  error,
  disabled,
  hideError,
  className,
  sx,
  ...rest
}) => {
  const [hidden, setHidden] = useState(true)
  return (
    <Input
      id={rest.id || name}
      autoComplete={'off'}
      error={error}
      disabled={disabled}
      hideError={hideError}
      icon={hidden ? Visibility : VisibilityOff}
      onClickIcon={() => setHidden((prevState) => !prevState)}
      name={name}
      type={hidden ? 'password' : 'text'}
      sx={{ position: 'relative', ...sx }}
      {...rest}
    />
  )
}
