import React from 'react'
import './Balance.scss'

export const Balance = () => {
  return (
    <>
        <div className="balance-container">
            <div className="balance">
               <p>My balance</p>
               <h2 className='balance-total'>$921.48</h2>
            </div>
            <div className="brand-logo"><svg width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24"/><circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23"/></g></svg></div>
        </div>
    </>
  )
}
