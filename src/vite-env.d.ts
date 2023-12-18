/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr" />

declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >
  export default ReactComponent
}