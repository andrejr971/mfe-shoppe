import { navigateToUrl } from 'single-spa'

interface NavigateProps {
  path: string
  children: React.ReactNode
}

export function Navigate({ children, path }: NavigateProps) {
  const redirect = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigateToUrl(event.currentTarget.name)
  }

  return (
    <button name={path} onClick={redirect}>
      {children}
    </button>
  )
}
