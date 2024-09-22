import { IoMoonOutline, IoMoon  } from "react-icons/io5";
import { useEffect, useState } from "react";

export const Header = () => {

    const [theme, setTheme] = useState('')

    useEffect(() => {
        if(theme === 'dark'){
            document.querySelector('body').classList.add('dark')
            document.querySelector('body').classList.remove('light')
        }else{
            document.querySelector('body').classList.remove('dark')
            document.querySelector('body').classList.add('light')
        }
    },[theme])

  return (
    <header className="bg-bgElements flex justify-between p-3 shadow-lg h-[4.5rem] items-center">
        <h2 className="text-text font-bold">Where in the world?</h2>
        <div onClick={() => setTheme (theme === 'dark' ? 'light' : 'dark')
        } className="flex items-center gap-2 cursor-pointer">
            {
                theme === 'dark' ? (
                    <div className="flex  items-center gap-2 text-text">                    
                        <IoMoon size={15} />
                        <p>Light Mode</p>
                    </div>
                ) : (
                <div className="flex  items-center gap-2 text-text">                    
                    <IoMoonOutline size={15} />
                    <p>Dark Mode</p>
                </div>
                )
            }
        </div>
    </header>
  )
}
