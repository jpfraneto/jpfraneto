import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h3>My name is jp, and I'm in a quest.</h3>
      <p>To reimagine how we interact with the web.</p>
      <p>
        To be one of the spiders that build the future of how we communicate
        with each other.
      </p>
      <p>From a place of vulnerability, of openness, of trust. </p>
      <p>I feel very comfortable with the unknown. </p>
      <p>Doing things in a new way. </p>
      <p>
        This website is an exploration into my ideas, into my capacities, into
        what I believe.
      </p>
      <p>It is my window to the world.</p>
      <p>It is where I show you my world.</p>
      <p>To inspire.</p>
      <p>To connect.</p>
      <p>To experience awe.</p>
      <p>To delve into who we are as a collective.</p>
      <h3>Welcome.</h3>
      <h4>I'm glad you are here.</h4>
      <div>
        <p>
          If you want to know what I'm doing these days, click the following
          button:
        </p>
        <Link href='/sadhana-life'>
          <a>Hello</a>
        </Link>
      </div>
    </div>
  );
};

export default About;
