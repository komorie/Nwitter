import React, { useState } from 'react';

const Home = () => {
  const [nweet, setNweet] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const onChange = (event) => {
    const { 
      target: {value}
    } = event;
    setNweet(value);
  }
  return(
    <form>
      <input value={nweet} onChange={onChange} type='text' placeholder="what's on your mind?" maxLength={120}/>
      <input type="submit" onSubmit={onSubmit} value='Nweet'/>
    </form>
  )
};

export default Home;