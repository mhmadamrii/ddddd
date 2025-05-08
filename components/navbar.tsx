import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { DialogLogin } from '@/components/dialog-login';

export function Navbar() {
  return (
    <header className='px-4 lg:px-6 h-16 flex items-center border-b'>
      <Link href='/' className='flex items-center gap-2 font-semibold'>
        <img
          className='h-10 w-10 rounded-full'
          alt='Educational Management Dashboard'
          src='/logo-dq.jpg'
        />
        <span>Darul Qurro</span>
      </Link>
      <nav className='ml-auto items-center flex gap-4 sm:gap-6'>
        <Link
          href='#features'
          className='text-sm font-medium hover:underline underline-offset-4'
        >
          Profile
        </Link>
        <Link
          href='/gallery'
          className='text-sm font-medium hover:underline underline-offset-4'
        >
          Galleries
        </Link>
        <Link
          href='/contact'
          className='text-sm font-medium hover:underline underline-offset-4'
        >
          Contact
        </Link>
        <Link
          href='/dashboard'
          className='text-sm font-medium hover:underline underline-offset-4'
        >
          Dashboard
        </Link>
        <div className='flex items-center gap-2'>
          <Link href='/registration'>
            <Button size='sm' className='gap-1.5'>
              Pendaftaran
            </Button>
          </Link>
          <DialogLogin />
        </div>
      </nav>
    </header>
  );
}
