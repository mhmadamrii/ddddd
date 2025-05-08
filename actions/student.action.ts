'use server';

import { prisma } from '@/lib/prisma';

export const action = async (req: Request) => {
  const { id } = await req.json();
  const student = await prisma.student.findUnique({
    where: {
      id: id,
    },
  });

  if (!student) {
    return new Response('Student not found', { status: 404 });
  }

  return new Response(JSON.stringify(student), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export async function createStudent({
  name,
  email,
  fatherName,
  motherName,
  noKK,
  gender,
  ttl,
  address,
}: {
  name: string;
  email: string;
  fatherName: string;
  motherName: string;
  noKK: string;
  gender: string;
  ttl: string;
  address: string;
}) {
  try {
    const newStudent = await prisma.student.create({
      data: {
        name,
        email,
        fatherName,
        motherName,
        noKK,
        gender,
        ttl,
        address,
      },
    });
    return newStudent;
  } catch (error) {
    console.log('error', error);
  }
}

export async function uploadUrl({ imageUrl }: { imageUrl: string }) {
  try {
    const newImage = await prisma.images.create({
      data: {
        url: imageUrl,
      },
    });
    return newImage;
  } catch (error) {
    console.log('error', error);
  }
}

export async function getDQImages() {
  try {
    const images = await prisma.images.findMany();
    if (images) {
      return images.map((image) => image.url);
    }
  } catch (error) {
    console.log('error', error);
  }
}
