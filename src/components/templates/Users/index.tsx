import React, { FC } from 'react'
import { Title } from '../../atoms'
import { CustomTable } from '../../organism'
export const UsersTemplate: FC = () => {
  return (
    <div>
      <Title>Users</Title>
      <CustomTable data={[]} headers={['id', 'name', 'surname', 'email']} />
    </div>
  )
}
