import Image from 'next/image'
import Logo from '../assets/logo.svg'

export function HeroSection() {
  return (
    <div className="space-y-5">
      <Image src={Logo} alt="Logo da aplicacao" />
      <div className="max-w-[420px] space-y-4">
        <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <a
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600"
        href=""
      >
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  )
}
