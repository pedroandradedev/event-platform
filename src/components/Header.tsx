import classNames from "classnames";
import { Logo } from "./Logo";

interface HeaderProps {
  onShowAulas(): void,
  isOpen: boolean
}

export function Header(props: HeaderProps) {
  const handleClickMenu = () => {
    props.onShowAulas()
  }

  return (
    <header className="fixed w-full h-16 p-5 flex items-center justify-between lg:justify-center bg-gray-700 border-b border-gray-600 z-[999]">
      <Logo />
      <div className="flex lg:hidden cursor-pointer" onClick={handleClickMenu}>
        <span className="mr-2">Aulas</span>
        <div className={classNames('menu', {
          'open': props.isOpen
        })}><div></div></div>
      </div>
    </header>
  )
}