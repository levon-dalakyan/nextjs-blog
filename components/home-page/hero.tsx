import Image from 'next/image';

import classes from './hero.module.css';

export const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/avatar.png"
          alt="An image showing a developer"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m a developer</h1>
      <p>
        A blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
};
