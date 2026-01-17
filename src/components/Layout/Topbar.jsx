import React from 'react';
import SocialIcons from '../Core/SocialIcons';


const Topbar = () => {
  return (
    <div>
        {/* // top bar */}
        <aside className='topbar py-3 hidden sm:block bg-slate-900'> 
            <div className="container flex justify-between items-center">
                <SocialIcons />

                <div>
                    <div>
                        <input type="text" placeholder='Search...' className='search-input text-2xl  sm:w-40'/>
                    </div>
                </div>
            </div>
        </aside>
    </div>
  )
}

export default Topbar