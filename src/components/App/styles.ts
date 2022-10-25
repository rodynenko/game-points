import styled from '@emotion/styled'

export const FluidContainer = styled.div`
  margin: 0 auto;
  max-width: 73rem;
  padding: 0 0.5rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr min(40vw, 500px);
  height: 100vh;
  height: max(100vh, 700px);
`

export const Main = styled.main``

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--text-color);
  border-right: 1px solid var(--text-color);
`

export const AsideHeader = styled.h2`
  margin: 0;
  padding: 0.5rem;
  background-color: var(--color-purple-0);
`