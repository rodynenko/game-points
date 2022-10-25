import styled from '@emotion/styled'

export const ResultBoardTable = styled.table`
  text-align: left;
  position: relative;
  border-collapse: collapse;
`

export const ResultBoardRow = styled.tr`
  thead & {
    background-color: #eee;
  }

  & + & {
    border-top: 1px dashed #999;
  }
`

export const ResultBoardHead = styled.th`
  position: sticky;
  top: 0;
  text-align: center;
  font-weight: 700;
  padding: 1rem 0.5rem;
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