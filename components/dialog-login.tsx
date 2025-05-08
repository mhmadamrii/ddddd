'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function DialogLogin() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleLogin = () => {
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='rounded-lg' variant='outline'>
          Admin
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Admin</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Name
            </Label>
            <Input
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              id='name'
              value={credentials.username}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              Username
            </Label>
            <Input
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              id='username'
              value={credentials.password}
              className='col-span-3'
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleLogin} type='submit'>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
