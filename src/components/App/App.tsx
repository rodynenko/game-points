import React from 'react'
import GamePlay from 'components/GamePlay'
import ResultBoard from 'components/ResultBoard'
import Summary from 'components/Summary'
import { FluidContainer, Grid, Main, Aside } from './styles'
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
            <h2>Player items</h2>
            <ResultBoard />
            <Summary />
          </Aside>
        </Grid>
      </FluidContainer>
    </>
  )
}

export default App