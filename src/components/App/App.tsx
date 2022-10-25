import React from 'react'
import GamePlay from 'components/GamePlay'
import ResultBoard from 'components/ResultBoard'
import Summary from 'components/Summary'
import { FluidContainer, Grid, Main, Aside, AsideHeader } from './styles'
import PageTitle from 'components/PageTitle'
import { Global } from '@emotion/react'
import { globalStyles } from 'styles/globalStyles'

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <FluidContainer>
        <Grid>
          <Main>
            <PageTitle>Kahoot! Points</PageTitle>
            <GamePlay />
          </Main>
          <Aside>
            <AsideHeader>Player items</AsideHeader>
            <ResultBoard />
            <Summary />
          </Aside>
        </Grid>
      </FluidContainer>
    </>
  )
}

export default App