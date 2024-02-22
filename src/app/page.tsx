import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="h-[calc(100vh-72px)] snap-y snap-mandatory overflow-scroll">
        {/* VERTICAL CAROUSEL */}
        <div className="snap-start h-[calc(100vh-72px)] overflow-scroll snap-y snap-mandatory snap-always">
          <div className="h-[calc(100vh-72px)] w-full bg-gray-400 snap-start relative">
          </div>
          <div className="h-[calc(100vh-72px)] w-full bg-red-400 snap-start relative">
          </div>
          <div className="h-[calc(100vh-72px)] w-full bg-blue-400 snap-start relative">
          </div>
          {/* FOOTER */}
          <footer className="h-96 snap-end">
            HEHEHE
          </footer>
        </div>
      </main>
    </>
  )
}
