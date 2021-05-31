import Link from 'next/link'

export default function Products() {
  return (
    <div className="flex justify-center gap-8 bg-404040 text-white text-left pt-12 pb-6">
      <div className="">
        <h4 className="border-b border-gray-300 mb-6 pb-2">Kitchen</h4>
        <Link href="/">
          <a className="block h-16 mb-2">
            <span className="block text-ccc text-sm">BALMUDA The Toaster</span>
            <span className="text-999 text-xs">スチームトースター</span>
          </a>
        </Link>
        <Link href="/">
          <a className="block h-16 mb-2">
            <span className="block text-ccc text-sm">BALMUDA The Pot</span>
            <span className="text-999 text-xs">スチームトースター</span>
          </a>
        </Link>
      </div>
      <div>
        <h4 className="border-b border-gray-300 mb-6 pb-2">Air</h4>
        <Link href="/">
          <a className="block h-16 mb-2">
            <span className="block text-ccc text-sm">The GreenFan</span>
            <span className="text-999 text-xs">スチームトースター</span>
          </a>
        </Link>
        <Link href="/">
          <a className="block h-16 mb-2">
            <span className="block text-ccc text-sm">GreenFan Cirq</span>
            <span className="text-999 text-xs">スチームトースター</span>
          </a>
        </Link>
        <Link href="/">
          <a className="block h-16 mb-2">
            <span className="block text-ccc text-sm">BALMUDA The Pure</span>
            <span className="text-999 text-xs">空气净化器</span>
          </a>
        </Link>
        <Link href="/">
          <a className="block h-16 mb-2">
            <span className="block text-ccc text-sm">Rain</span>
            <span className="text-999 text-xs">加湿器</span>
          </a>
        </Link>
      </div>
      <div>
        <h4 className="border-b border-gray-300 mb-6 pb-2">Lighting</h4>
        <Link href="/">
          <a className="block h-16 mb-2">
            <span className="block text-ccc text-sm">BALMUDA The Lantern</span>
            <span className="text-999 text-xs">空气净化器</span>
          </a>
        </Link>
        <Link href="/">
          <a className="block h-16 mb-2">
            <span className="block text-ccc text-sm">BALMUDA The Light</span>
            <span className="text-999 text-xs">空气净化器</span>
          </a>
        </Link>
      </div>
      <div>
        <h4 className="border-b border-gray-300 mb-6 pb-2">Audio</h4>
        <Link href="/">
          <a className="block h-16 mb-2">
            <span className="block text-ccc text-sm">BALMUDA The Speaker</span>
            <span className="text-999 text-xs">空气净化器</span>
          </a>
        </Link>
        <h4 className="border-b border-gray-300 mb-6 pb-2">Cleaner</h4>
        <Link href="/">
          <a className="block h-16 mb-2">
            <span className="block text-ccc text-sm">BALMUDA The Cleaner</span>
            <span className="text-999 text-xs">空气净化器</span>
          </a>
        </Link>
      </div>
    </div>
  )
}
