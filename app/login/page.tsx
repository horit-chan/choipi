'use client';

import Link from 'next/link';

import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { Input } from '@/components/ui/Input';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="px-4 py-8">
      <div className="mx-auto flex flex-row flex-wrap justify-center gap-x-8 gap-y-6">
        {/* ログイン */}
        <div className="w-100 rounded-md bg-gray-50 p-14 shadow-md">
          <form className="text-center">
            <h1 className="mb-8 font-bold">登録済みの方</h1>

            <Input
              label="メールアドレス"
              type="email"
              placeholder="example@sample.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></Input>

            <Input
              label="パスワード"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></Input>

            <Button>ログイン</Button>
          </form>
        </div>

        {/* 新規登録 */}
        <div className="w-100 rounded-md bg-gray-50 p-14 shadow-md">
          <h1 className="mb-8 text-center font-bold">はじめての方</h1>

          <Link
            href="signup"
            className="mt-8 inline-block w-full rounded-full bg-orange-300 py-4 text-center hover:bg-orange-400 focus:outline-2 focus:outline-offset-2 focus:outline-orange-500 active:bg-orange-600"
          >
            新規登録
          </Link>
        </div>
      </div>
    </main>
  );
}
