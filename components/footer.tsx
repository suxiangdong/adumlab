export default function Footer() {
  return (
    <footer className="text-xs bg-gray-800 py-6 text-gray-400">
      <div className="max-w-5xl mx-auto">
       <div className="text-right">
			 <img
			 		className="inline-block mb-2"
          src="https://www.balmuda.com/_theme/img/svg/balmuda_fff.min.svgz"
          width="134"
        />
				<p className="text-xs ">Copyright © BALMUDA Inc. All rights reserved</p>
			 </div>
        <div className="flex items-center py-2">
          <div className="flex flex-1">
            <a className="mx-2" href="//twitter.com/balmuda">
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
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a className="mx-2" href="//facebook.com/balmuda">
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
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a className="mx-2" href="//instagram.com/balmuda">
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
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
          <a href="https://corp.balmuda.com" className="ml-6" target="_blank">
            公司/ IR信息
          </a>
          <a href="/jp/legal/privacy" className="ml-6">
            隐私政策
          </a>
          <a href="/jp/legal/announcement" className="ml-6">
            个人信息
          </a>
          <a href="/jp/legal/terms" className="ml-6">
            使用条款的
          </a>
          <a href="/jp/legal/announcement" className="ml-6">
            披露
          </a>
          <a href="/jp/legal/deal" className="ml-6">
            基于特定商业交易法的显示
          </a>
          <a href="/jp/30-days/" className="ml-6">
            30天退款保证
          </a>
        </div>
      </div>
    </footer>
  )
}
