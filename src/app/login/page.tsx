import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const page = () => {
  return (
    <Card className='w-160 mx-auto mt-32'>
    <div className='flex gap-4 p-4'>
    <Label>メールアドレス</Label>
    <Input placeholder='example@gmail.com' className='w-48'/>
    </div>
    </Card>
  )
}

export default page