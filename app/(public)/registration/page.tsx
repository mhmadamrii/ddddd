'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as z from 'zod';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { createStudent } from '@/actions/student.action';

const formSchema = z.object({
  nama: z.string().min(1).min(1).max(200),
  nama_ayah: z.string().min(1).min(1).max(200),
  nama_ibu: z.string().min(1).min(1).max(200),
  no_kk: z.string().min(1).min(1).max(100),
  jenis_kelamin: z.string().min(1).min(1).max(200),
  ttl: z.string().min(1).min(1).max(200),
  address: z.string().min(1).min(1).max(200),
});

export default function PPDB() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: '',
      nama_ayah: '',
      nama_ibu: '',
      no_kk: '',
      jenis_kelamin: '',
      ttl: '',
      address: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const newStudent = await createStudent({
        name: values.nama,
        email: 'testing@gmail.com',
        fatherName: values.nama_ayah,
        motherName: values.nama_ibu,
        noKK: values.no_kk,
        gender: values.jenis_kelamin,
        ttl: values.ttl,
        address: values.address,
      });

      if (newStudent) {
        toast.success('Data berhasil disimpan');
        form.reset();
      }
    } catch (error) {
      console.error('Form submission error', error);
      toast.error('Failed to submit the form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-10'>
      <Card>
        <CardHeader>
          <CardTitle>Pendaftaran Santri Baru</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className='space-y-8'>
                <div className='space-y-6'>
                  <FormField
                    control={form.control}
                    name='nama'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama Santri</FormLabel>
                        <FormControl>
                          <Input placeholder='Abdul' type='text' {...field} />
                        </FormControl>
                        <FormDescription>Nama calon santri</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-6'>
                      <FormField
                        control={form.control}
                        name='nama_ayah'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nama Ayah</FormLabel>
                            <FormControl>
                              <Input
                                placeholder='Sukarno'
                                type='text'
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Nama ayah calon santri
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className='col-span-6'>
                      <FormField
                        control={form.control}
                        name='nama_ibu'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nama Ibu</FormLabel>
                            <FormControl>
                              <Input
                                placeholder='Sukarni'
                                type='text'
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Nama ibu calon santri
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name='no_kk'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>No KK</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='111222333'
                            type='text'
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Nomor KK yang terdaftar
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Separator />
                <div className='space-y-6'>
                  <div>
                    <h3 className='text-lg font-medium'>
                      Jenjang Sekolah (MTs/MA)
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      Please provide any additional information.
                    </p>
                  </div>

                  <FormField
                    control={form.control}
                    name='ttl'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tempat Tanggal Lahir</FormLabel>
                        <FormControl>
                          <Input placeholder='Cilacap' type='text' {...field} />
                        </FormControl>
                        <FormDescription>
                          Tempat tanggal lahir calon santri
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='jenis_kelamin'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Jenis Kelamin</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Jenis Kelamin' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value='m@example.com'>
                              Laki-laki
                            </SelectItem>
                            <SelectItem value='m@google.com'>
                              Perempuan
                            </SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='address'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Alamat Rumah</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder='Sidasari Wetan, RT'
                            className='resize-none'
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Alamat rumah calon santriwan/santriwati
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='flex justify-end'>
                  <Button disabled={isLoading} className='w-full sm:w-[100px]'>
                    {isLoading ? 'Loading...' : 'Daftar'}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
