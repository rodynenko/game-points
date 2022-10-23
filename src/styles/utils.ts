import { css } from '@emotion/react'

export const media = {
  desktop: (...args: any[]) => css`@media (min-width: 1280px) { ${css(...args)} }`,
  tablet: (...args: any[]) => css`@media (min-width: 768px) and (max-widht: 1279px) { ${css(...args)} }`,
  phone: (...args: any[]) => css`@media (max-width: 767px) { ${css(...args)} }`
}