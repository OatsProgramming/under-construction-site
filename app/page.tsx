import Gears from '@/app/components/Gears/Gears'
import styles from './page.module.css'
import Link from 'next/link';
import WebBuilding from './components/lottie/WebBuilding';
import Button from './components/Button';

export default function Page() {
  const portfolio = {
    message: "Portfolio ➤",
    link: "https://oatsprogramming-portfolio.vercel.app/"
  }
  const github = {
    message: "Github ➤",
    link: "https://github.com/OatsProgramming"
  }

  return (
    <>
      {/* <Gears /> */}
      <div className={styles['main']}>
        <div className={styles['message']}>
          <WebBuilding />
          <h1>
            This site is currently under construction. Please do come by again later!
          </h1>
          <div className={styles['container']}>
            <Button {...portfolio}/>
            <Button {...github}/>
          </div>
        </div>
      </div>
    </>
  );
}
