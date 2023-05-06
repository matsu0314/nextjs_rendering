import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from 'next/link';
import { useFormat } from '../../hooks/useFormat';
import { UserType } from '../../types';

type SsrProps = {
  users:UserType[];
  timeStamp: number;
};

export const SSR: NextPage<SsrProps> = ({ users, timeStamp }) => {
  console.log("SSR page display");
  const { dateFormat } = useFormat();
  return (
    <>
      <Head>
        <title>SSR page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1>SSRのページ</h1>
        <p>APIからデータを取得：{dateFormat(timeStamp)}</p>
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
        <p><Link href="/">トップへ戻る</Link></p>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  console.log("getServerSideProps(SSR) invoked");

  // APIデータ取得
  const apiURL = process.env.NEXT_PUBLIC_API_URL!;
  const res = await fetch(new URL(apiURL));
  const users = await res.json();
  const timeStamp = Date.now();

  return {
    props: { users, timeStamp},
  };
};

export default SSR;
