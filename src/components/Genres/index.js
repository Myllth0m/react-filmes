import React from 'react'
import { Bradge, Name } from './styles'

function Genres({ data }) {
  return (
    <Bradge>
      <Name>{data.name}</Name>
    </Bradge>
  )
}

export default Genres