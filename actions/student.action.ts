'use server';

import { prisma } from '@/lib/prisma';
import { Student } from '@/lib/generated/prisma';

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
