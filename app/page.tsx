import Gears from '@/app/components/Gears'
import styles from './page.module.css'
import Link from 'next/link';
export default function Error() {

  return (
    <>
      <Gears />
      <div className={styles['main']}>
        <div className={styles['message']}>
          <h1>
            This site is currently under construction. Please do come by again later!
          </h1>
          <div className={styles['container']}>
            <Link href='https://oatsprogramming-portfolio.vercel.app/'>
              Check out Portfolio
            </Link>
            <Link href='https://github.com/OatsProgramming'>
              Go to Github
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
