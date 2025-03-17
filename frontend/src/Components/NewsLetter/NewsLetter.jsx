import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
   const [subscribed, setSubscribed] = useState(false);

   const handleSubscribe = () => {
      setSubscribed(true);
   };

   return (
      <div className='newsletter'>
         <h1>Get Exclusive On Your Email</h1>
         <p>Subscribe to our newsletter and Stay updated</p>
         <div>
            <input type='email' placeholder='Your Email' />
            <button onClick={handleSubscribe} disabled={subscribed}>
               {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
         </div>
      </div>
   );
};

export default NewsLetter;
