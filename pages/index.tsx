import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Button from "@mui/material/Button";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [password, setPassword] = useState('Press button below');

  const symbols =
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890#$%'^,()*+.:|=?@/][_`{}\\!;-~";

  const calcSymbol = () => {
    const symbolNumber = Math.round(Math.random() * symbols.length);
    return symbols[symbolNumber];
  };

  const calcPassword = () => {
    const passArr = [];
    for (let i = 0; i < 16; i++) {
      const symbol = calcSymbol();
      passArr.push(symbol);
    }
    return passArr.join("");
  };

  const copyPassword = () => { navigator.clipboard.writeText(password); }

  return (
    <div className={styles.container}>
      <Head>
        <title>Password generator</title>
        <meta name="description" content="Create a strong password" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to password generator</h1>

        <p className={styles.description}>Create a strong password</p>

        <p className={styles.password}>
          <span className={styles.passwordtext}>{password}</span>  
          {password !== 'Press button below' ? <Button className={styles.copy} onClick={copyPassword}>Copy</Button> : null} 
        </p>
       
        <Button variant="contained" onClick={() => setPassword(calcPassword())}>
          Generate
        </Button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/atuonufure/nextjs-passgen"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open source application
          <span className={styles.logo}>
            <Image
              src="/GitHub-Mark-32px.png"
              alt="GitHub Logo"
              width={16}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
