import Link from 'next/link'
import React from 'react'

const routes = [
  { name: "Cart", path: "/cart" },
  { name: "Login", path: "/login" }
]

export default function Navbar() {
  return (
    <div>
      <nav className='flex h-12 justify-between shadow-lg items-center px-4 py-10 bg-gray-600'>
        <Link href='/'
          className='text-lg font-bold'
        >
          Razm E-Commerce
        </Link>
        <div className='flex gap-4'>
          {routes.map(r =>
            <Link className='' key={r.index} href={r.path}>{r.name}</Link>
          )}
        </div>
      </nav>
    </div>
  )
}
