import { Card, CardContent } from '@/components/ui/card';
import { createClient } from '@/utils/supabase/server';

export default async function test() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("test").select()

console.log (data);
  
  return (<div className='flex flex-col'>{data?.map((item) =>(
    <Card key={item?.id} className='bg-pink-500 px-4 py-8 text-white max-w-40'>
      <CardContent>{item.price}</CardContent>
    </Card>
  ))}
  </div>
  )
}