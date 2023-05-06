import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useFormat } from '../../hooks/useFormat';
import { UserType } from '../../types';


export const CSR: NextPage = () => {
  console.log('CSR page display');

  const { dateFormat } = useFormat();
  const [users, setUsers] = useState<UserType[] | null>(null);
  const [timeStamp, setTimeStamp] = useState(0);

  useEffect(() => {
    // APIデータ取得
    const fechUserData = async () => {
      const apiURL = process.env.NEXT_PUBLIC_API_URL!;
      const res = await fetch(new URL(apiURL));
      const users = await res.json();
      const date = Date.now();
      // データセット
      setUsers(users);
      setTimeStamp(date);
    };
    fechUserData();

  }, []);

  return (
    <>
      <Head>
        <title>CSR page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1>CSRのページ</h1>
        <p>APIからデータを取得：{dateFormat(timeStamp)}</p>
        {users && (
          <table>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                  </tr>
                );
              })}
            </tbody>
        </table>
        )}
        <p>
          <Link href="/">トップへ戻る</Link>
        </p>
      </main>
    </>
  );
};

export default CSR;
