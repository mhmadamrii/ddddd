'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GraduationCap, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function MainNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const routes = [
    {
      href: '/#features',
      label: 'Features',
      active: pathname === '/#features',
    },
    {
      href: '/#about',
      label: 'About',
      active: pathname === '/#about',
    },
    {
      href: '/#contact',
      label: 'Contact',
      active: pathname === '/#contact',
    },
    {
      href: '/login',
      label: 'Login',
      active: pathname === '/login',
    },
  ];

  return (
    <div className='flex items-center'>
      <Link href='/' className='mr-6 flex items-center gap-2 font-semibold'>
        <GraduationCap className='h-6 w-6' />
        <span className='hidden sm:inline-block'>EduManage</span>
      </Link>
      <nav className='hidden md:flex items-center space-x-6 lg:space-x-8'>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              route.active ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      <div className='flex md:hidden ml-auto'>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon' className='md:hidden'>
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='pr-0'>
            <div className='flex flex-col space-y-4 px-4'>
              <Link
                href='/'
                className='flex items-center gap-2 font-semibold'
                onClick={() => setIsOpen(false)}
              >
                <GraduationCap className='h-6 w-6' />
                <span>EduManage</span>
              </Link>
              <div className='flex flex-col space-y-3'>
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      route.active ? 'text-primary' : 'text-muted-foreground'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
