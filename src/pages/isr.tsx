import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useFormat } from '../../hooks/useFormat';
import { UserType } from '../../types';

type IsrProps = {
  users: UserType[];
  timeStamp: number;
};

export const ISR: NextPage<IsrProps> = ({ users, timeStamp }) => {
  console.log('ISR page display');
  const { dateFormat } = useFormat();
  return (
    <>
      <Head>
        <title>ISR page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1>ISRのページ</h1>
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
        <p>
          <Link href="/">トップへ戻る</Link>
        </p>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  console.log("getStaticProps(ISR) invoked");

  // APIデータ取得
  const apiURL = process.env.NEXT_PUBLIC_API_URL!;
  const res = await fetch(new URL(apiURL));
  const users = await res.json();
  const timeStamp = Date.now();

  return {
    props: { users, timeStamp },
    revalidate: 5
  };
};

export default ISR;
