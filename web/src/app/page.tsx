import { Copy } from '@/componentes/copy'
import { EmptyMemories } from '@/componentes/emptyMemories'
import { HeroSection } from '@/componentes/hero'
import { SignIn } from '@/componentes/signin'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Primeira coluna */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* bg-blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-x-1/2 -translate-y-1/2  rounded-full  bg-purple-700 opacity-50 blur-full"></div>
        {/* bg-stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        {/* Sign-in */}
        <SignIn />
        {/* Hero */}
        <HeroSection />
        {/* Footer */}
        <Copy />
      </div>
      {/* Segunda Coluna */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
