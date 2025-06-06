import { JSX } from 'react'

type BaseSvgProps = React.ComponentPropsWithoutRef<'svg'>

const svgMap = {
  x: (props: BaseSvgProps): JSX.Element => (
    <svg {...props} fill='none' viewBox='0 0 24 24'>
      <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M18 6 6 18M6 6l12 12'/>
    </svg>
  ),
  check: (props: BaseSvgProps): JSX.Element => (
    <svg {...props} fill='none' viewBox='0 0 24 24'>
      <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M20 6 9 17l-5-5'/>
    </svg>
  ),
  circle: (props: BaseSvgProps): JSX.Element => (
    <svg {...props} fill='none' viewBox='0 0 24 24'>
      <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z'/>
    </svg>
  ),
  slash: (props: BaseSvgProps): JSX.Element => (
    <svg {...props} fill='none' viewBox='0 0 24 24'>
      <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 22 17 2'/>
    </svg>
  )
}

export type SvgName = keyof (typeof svgMap)

type SvgProps = BaseSvgProps & {
  name: SvgName
}

export default function Svg(props: SvgProps): JSX.Element {
  const { name: icon, ...svgProps } = props
  const renderSVG = svgMap[icon]
  return renderSVG(svgProps)
}
