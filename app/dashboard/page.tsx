import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { DashboardHeader } from '@/app/dashboard/components/dashboard-header';
import { DashboardShell } from '@/app/dashboard/components/dashboard-shell';
import { Overview } from '@/app/dashboard/components/overview';
import { RecentStudents } from '@/app/dashboard/components/recent-students';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  GraduationCap,
  Users,
  BookOpen,
  Clock,
  UserPlus,
  BookPlus,
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <>
      <DashboardShell>
        <DashboardHeader
          heading='Dashboard'
          text='Overview of your institution'
        >
          <div className='flex space-x-2'>
            <Link href='/dashboard/students/new'>
              <Button size='sm'>
                <UserPlus className='mr-2 h-4 w-4' />
                Add Student
              </Button>
            </Link>
            <Link href='/dashboard/classes/new'>
              <Button size='sm' variant='outline'>
                <BookPlus className='mr-2 h-4 w-4' />
                Add Class
              </Button>
            </Link>
          </div>
        </DashboardHeader>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Total Students
              </CardTitle>
              <Users className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>1,248</div>
              <p className='text-xs text-muted-foreground'>
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Active Classes
              </CardTitle>
              <BookOpen className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>42</div>
              <p className='text-xs text-muted-foreground'>
                +2 from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Attendance Rate
              </CardTitle>
              <Clock className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>92.5%</div>
              <p className='text-xs text-muted-foreground'>
                +1.2% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Graduation Rate
              </CardTitle>
              <GraduationCap className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>89.3%</div>
              <p className='text-xs text-muted-foreground'>
                +0.5% from last year
              </p>
            </CardContent>
          </Card>
        </div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <Card className='col-span-4'>
            <CardHeader>
              <CardTitle>Enrollment Overview</CardTitle>
              <CardDescription>
                Student enrollment trends over the past academic year
              </CardDescription>
            </CardHeader>
            <CardContent className='pl-2'>
              <Overview />
            </CardContent>
          </Card>
          <Card className='col-span-3'>
            <CardHeader>
              <CardTitle>Recent Students</CardTitle>
              <CardDescription>
                Recently added students to your institution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentStudents />
            </CardContent>
          </Card>
        </div>
      </DashboardShell>
    </>
  );
}
