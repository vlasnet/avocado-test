import { css } from 'styled-components'

const sizes = {
    desktop: 1920,
    tablet: 779,
    phone: 460
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

    return acc
}, {})