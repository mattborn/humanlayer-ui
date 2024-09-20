'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { SignInButton } from '@clerk/nextjs'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { ChevronLeftIcon, HamburgerMenuIcon, PlayIcon, CheckIcon, GearIcon } from '@radix-ui/react-icons'

const navItems = [
  { href: '/get-started', label: 'Get started', icon: PlayIcon },
  { href: '/approvals', label: 'Approvals', icon: CheckIcon },
  { href: '/settings', label: 'Settings', icon: GearIcon },
]

export default function Navigation() {
  const [selected, setSelected] = useState<string>('/get-started')
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <nav id={isCollapsed ? 'menu-collapsed' : 'menu'}>
      <div className="button" onClick={() => setIsCollapsed(true)}>
        <ChevronLeftIcon />
      </div>
      <div className="button" onClick={() => setIsCollapsed(false)}>
        <HamburgerMenuIcon />
      </div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        {navItems.map(item => (
          <Link key={item.href} href={item.href}>
            <div
              className={`button ${selected === item.href ? 'selected' : ''}`}
              data-label={item.label}
              onClick={() => setSelected(item.href)}
            >
              <item.icon />
            </div>
          </Link>
        ))}
      </SignedIn>
    </nav>
  )
}
