import Link from 'next/link';
import {
  GraduationCap,
  Users,
  BookOpen,
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-16 flex items-center border-b'>
        <Link href='/' className='flex items-center gap-2 font-semibold'>
          <GraduationCap className='h-6 w-6' />
          <span>Darul Qurro</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            href='#features'
            className='text-sm font-medium hover:underline underline-offset-4'
          >
            Features
          </Link>
          <Link
            href='#about'
            className='text-sm font-medium hover:underline underline-offset-4'
          >
            About
          </Link>
          <Link
            href='#contact'
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
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                    Pondok pesantren Darul Qurro Kawunganten Cilacap
                  </h1>
                  <p className='max-w-[600px] text-muted-foreground md:text-xl'>
                    Berdiri Di Atas Dan Untuk Semua Golongan
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Link href='/ppdb'>
                    <Button size='lg' className='gap-1.5'>
                      Daftar Sekarang
                      <ArrowRight className='h-4 w-4' />
                    </Button>
                  </Link>
                  <Link href='#features'>
                    <Button size='lg' variant='outline'>
                      Cara Daftar
                    </Button>
                  </Link>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <img
                  alt='Educational Management Dashboard'
                  className='aspect-video overflow-hidden rounded-xl object-cover object-center'
                  src='/dq_landing.jpeg'
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id='features'
          className='w-full py-12 md:py-24 lg:py-32 bg-muted'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
                  Key Features
                </div>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                  Everything you need to manage your institution
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Di Darul Qurro, kami percaya bahwa perbedaan adalah kekayaan.
                  Dengan moto "Berdiri di atas dan untuk semua golongan", kami
                  tidak berpihak pada satu kelompok atau mazhab, melainkan
                  menjadi jembatan bagi seluruh elemen umat yang haus akan ilmu
                  dan kasih sayang.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
              <div className='grid gap-6'>
                <div className='flex gap-4 items-start'>
                  <Users className='h-10 w-10 text-primary' />
                  <div className='space-y-2'>
                    <h3 className='text-xl font-bold'>Student Management</h3>
                    <p className='text-muted-foreground'>
                      Easily add, update, and manage student profiles with
                      comprehensive information tracking.
                    </p>
                  </div>
                </div>
                <div className='flex gap-4 items-start'>
                  <BookOpen className='h-10 w-10 text-primary' />
                  <div className='space-y-2'>
                    <h3 className='text-xl font-bold'>Class Management</h3>
                    <p className='text-muted-foreground'>
                      Create and organize classes, assign students, and track
                      attendance and performance.
                    </p>
                  </div>
                </div>
                <div className='flex gap-4 items-start'>
                  <BarChart3 className='h-10 w-10 text-primary' />
                  <div className='space-y-2'>
                    <h3 className='text-xl font-bold'>Performance Analytics</h3>
                    <p className='text-muted-foreground'>
                      Get insights into student performance with detailed
                      analytics and reporting tools.
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <img
                  alt='Feature Overview'
                  className='aspect-video overflow-hidden rounded-xl object-cover object-center'
                  src='/ceremonial.jpeg'
                />
              </div>
            </div>
          </div>
        </section>
        <section id='contact' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                Ready to transform your institution?
              </h2>
              <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Contact us today to learn more about how our platform can help
                your educational institution.
              </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row lg:justify-end'>
              <Link href='/dashboard'>
                <Button size='lg'>Get Started</Button>
              </Link>
              <Link href='#contact'>
                <Button size='lg' variant='outline'>
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-muted-foreground'>
          © {new Date().getFullYear()} EduManage. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link href='#' className='text-xs hover:underline underline-offset-4'>
            Terms of Service
          </Link>
          <Link href='#' className='text-xs hover:underline underline-offset-4'>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
