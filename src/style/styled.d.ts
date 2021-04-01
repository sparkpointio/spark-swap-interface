// eslint-disable-next-line import/no-unresolved
import { SparkSwapTheme } from '@sparkpointio/sparkswap-uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends SparkSwapTheme {}
}
