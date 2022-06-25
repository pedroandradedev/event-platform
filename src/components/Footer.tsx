import { LogoRocketSeat } from "./LogoRocketseat";

export function Footer() {
  return (
    <footer className="w-full py-5 px-5 flex items-center justify-center bg-black">
      <div className="w-full max-w-[1100px] flex items-center justify-between border-t border-gray-600">
        <div className="flex-1 flex items-center gap-3">
          <LogoRocketSeat />
          <span className="text-sm leading-relaxed">
            RocketSeat - Todos os direitos reservados
          </span>
        </div>
        <div className="text-sm leading-relaxed">
          Políticas de privacidade
        </div>
      </div>
    </footer>
  )
}