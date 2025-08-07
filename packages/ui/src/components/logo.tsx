import Image from 'next/image'

type LogoProps = {
  width?: number
  height?: number
  className?: string
}

const Logo = ({ width = 60, height = 60, className, ...props }: LogoProps) => {
  return (
    <Image
      src='/images/cj-logo.png'
      alt="Captain Jay's Logo"
      width={width}
      height={height}
      className={className}
      {...props}
    />
  )
}

export { Logo }
