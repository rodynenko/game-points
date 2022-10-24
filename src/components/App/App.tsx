import React from 'react'
import GamePlay from 'components/GamePlay'
import ResultBoard from 'components/ResultBoard'
import { FluidContainer, Grid, Main, Aside } from './styles'

function App() {
  return (
    <FluidContainer>
      <Grid>
        <Main>
          <h1>Kahoot! Points</h1>
          <GamePlay />
        </Main>
        <Aside>
          <h2>Player items</h2>
          <ResultBoard />
        </Aside>
      </Grid>
    </FluidContainer>
  )
}

export default App