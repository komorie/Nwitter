import React, { useEffect, useState } from 'react';
import Nweet from '../components/Nweet';
import { dbService } from '../MyBase';

const Home = ({userObj}) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);


  useEffect(() => {
    dbService.collection("nweets").orderBy("createdAt","desc").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setNweets(nweetArray);
    });

  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await dbService.collection("nweets").add({
        text: nweet,
        createdAt: Date.now(),
        createId: userObj.uid
      });
    } catch (error) {
      console.log(error);
    }
    setNweet("");
  };
  const onChange = (event) => {
    const { 
      target: {value}
    } = event;
    setNweet(value);
  }
  return(
    <div>
      <form onSubmit={onSubmit}>
        <input value={nweet} onChange={onChange} type='text' placeholder="what's on your mind?" maxLength={120}/>
        <input type="submit"value='Nweet'/>
      </form>
      <div>
        {nweets.map((nweet) => (
          <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.createId === userObj.uid}/>
        ))}
      </div>
    </div>
  )
};

export default Home;