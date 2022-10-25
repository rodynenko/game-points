import styled from '@emotion/styled'

export const ResultBoardTableWrapper = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  overflow: auto;
`

export const ResultBoardTable = styled.table`
  text-align: left;
  position: relative;
  border-collapse: collapse;
  width: 100%;
`

export const ResultBoardRow = styled.tr`
  & + & {
    border-top: 1px dashed #999;
  }
`

export const ResultBoardHead = styled.th`
  position: sticky;
  top: 0;
  padding: 1rem 0.5rem;
  width: 33.33%;
  text-align: center;
  font-weight: 700;
  background-color: #eee;
`

export const ResultBoardCol = styled.td`
  text-align: center;
  padding: 0.5rem;
`

export const ItemLabel = styled.span<{ color: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--text-color);
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  border-radius: 4px;
  background-color: ${(p) => `var(--color-${p.color})`};
`