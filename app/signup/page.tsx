'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '@/lib/supabase';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { error } from 'console';

const schema = z
  .object({
    user: z.string().min(2, 'ユーザーネームは2文字以上入力してください').trim(),
    email: z
      .email('メールアドレスの形式が正しくありません')
      .min(1, 'メールアドレスを入力してください')
      .trim(),
    password: z
      .string()
      .min(8, 'パスワードは8文字以上で入力してください')
      .max(64, 'パスワードは64文字以内で入力してください'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'パスワードが一致しません',
    path: ['confirmPassword'],
  });

type FormData = z.infer<typeof schema>;

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
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
          <form noValidate className="text-center" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="mb-8 font-bold">新規登録</h1>

            <Input
              label="ユーザーネーム"
              type="text"
              placeholder="ちょっぴー"
              error={errors.user?.message}
              {...register('user', { required: true })}
            ></Input>

            <Input
              label="メールアドレス"
              type="email"
              placeholder="example@sample.com"
              error={errors.email?.message}
              {...register('email', { required: true })}
            ></Input>

            <Input
              label="パスワード"
              type="password"
              error={errors.password?.message}
              {...register('password', { required: true })}
            ></Input>

            <Input
              label="パスワード（確認）"
              type="password"
              error={errors.confirmPassword?.message}
              {...register('confirmPassword', { required: true })}
            ></Input>

            <Button type="submit">アカウント作成</Button>
          </form>
        </div>
      </div>
    </main>
  );
}
