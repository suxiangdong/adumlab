export default function Header() {
  return (
    <header className="h-24 bg-gray-900 pt-5">
      <a href="/jp/" className="text-xl text-white">
        BALUMDA
      </a>
      <nav className="flex items-center max-w-screen-lg mx-auto mt-2 text-gray-300 pb-4">
        <a href="" className="nav-item relative w-1/5 h-10 hover:text-white">
          Home
        </a>
        <a href="" className="nav-item relative w-1/5 h-10 hover:text-white">
          Products
        </a>
        <a href="" className="nav-item relative w-1/5 h-10 hover:text-white">
          About
        </a>
        <a href="" className="nav-item relative w-1/5 h-10 hover:text-white">
          Home
        </a>
        <a href="" className="nav-item relative w-1/5 h-10 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-shopping-cart"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </a>
      </nav>
    </header>
  )
}
