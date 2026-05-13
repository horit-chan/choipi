'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '@/lib/supabase';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

type FormData = {
  user: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignupPage() {
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();

  const onSubmit = async ({ user, email, password, confirmPassword }: FormData) => {
    console.log(`送信データ： ${email}`, user, password);

    // const { error } = await supabase.auth.signUp({ email, password });

    // if (error) {
    //   console.log('えらー');
    // } else {
    //   router.push('/');
    // }
  };

  return (
    <main className="px-4 py-8">
      <div className="mx-auto flex flex-row flex-wrap justify-center gap-x-8 gap-y-6">
        <div className="w-100 rounded-md bg-gray-50 p-14 shadow-md">
          <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="mb-8 font-bold">新規登録</h1>

            <Input
              label="ユーザーネーム"
              type="text"
              placeholder="ちょっぴー"
              {...register('user', { required: true })}
            ></Input>

            <Input
              label="メールアドレス"
              type="email"
              placeholder="example@sample.com"
              {...register('email', { required: true })}
            ></Input>

            <Input
              label="パスワード"
              type="password"
              {...register('password', { required: true })}
            ></Input>

            <Input
              label="パスワード（確認）"
              type="password"
              {...register('confirmPassword', { required: true })}
            ></Input>

            <Button type="submit">アカウント作成</Button>
          </form>
        </div>
      </div>
    </main>
  );
}
