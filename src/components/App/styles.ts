import styled from '@emotion/styled'

export const FluidContainer = styled.div`
  margin: 0 auto;
  max-width: 73rem;
  padding: 0 0.5rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr min(40vw, 500px);
  min-height: 100vh;
`

export const Main = styled.main``

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  border-left: 1px solid black;
`