'use client';

import { Upload } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useState } from 'react';
import { uploadUrl } from '@/actions/student.action';
import { Label } from '@/components/ui/label';
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

export function DialogCloseButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleUpload = async () => {
    if (!imageUrl) {
      alert('Please enter a valid image URL');
      return;
    }
    setIsLoading(true);
    try {
      const res = await uploadUrl({ imageUrl });
      console.log('res', res);
      if (res?.id) {
        toast.success('Image uploaded successfully');
        setImageUrl('');
        setIsOpen(false);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsLoading(false);
      router.refresh();
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setIsOpen(true)}
          className='flex items-center gap-1'
          variant='outline'
        >
          <Upload className='mr-2 h-4 w-4' />
          Upload Image
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Upload Image</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className='flex items-center space-x-2'>
          <div className='grid flex-1 gap-2'>
            <Label htmlFor='link' className='sr-only'>
              Link
            </Label>
            <Input
              id='link'
              disabled={isLoading}
              onChange={(e) => setImageUrl(e.target.value)}
              defaultValue='https://ui.shadcn.com/docs/installation'
            />
          </div>
        </div>
        <DialogFooter className='sm:justify-start'>
          <Button
            onClick={handleUpload}
            type='button'
            variant='default'
            className='w-full'
          >
            {isLoading ? 'Uploading...' : 'Upload'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
