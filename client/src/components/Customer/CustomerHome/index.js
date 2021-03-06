import React from 'react'
import BaristaList from './BaristaList'
import { TopBar } from '../../../common'
import {
  Wrapper,
  ScrollViewBaristaList
} from './styled'


const CustomerHome = () => {
  return (
    <Wrapper>
      <ScrollViewBaristaList>
        <TopBar
          Title="Barista"
        />
        <BaristaList />
      </ScrollViewBaristaList>
    </Wrapper>
  )
}

export default CustomerHome
