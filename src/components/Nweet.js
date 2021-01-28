import React from 'react';
import { dbService } from '../MyBase';

const Nweet = ({nweetObj, isOwner}) => {
  const onDeleteClick = () => {
    const ok = window.confirm("Are you sure?");
    console.log(ok);
    if(ok){
      dbService.doc()
    }
  }
  return (
  <div>
    <h4>{nweetObj.text}</h4>
    {isOwner &&   
    <>
      <button onClick={onDeleteClick}>Delete Nweet</button>
      <button>Edit Nweet</button>
    </>}
  </div>
  )
}

export default Nweet;