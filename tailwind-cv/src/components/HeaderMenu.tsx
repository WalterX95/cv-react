import type menuType from "../types/menuType";
import initComponent from "../types/initComponent";
import { useEffect, useState } from "react";


const HeaderMenu: React.FC<initComponent> =  ({initTitle})  => { 

    const [menu,setMenu] = useState<menuType[]>([]);
    const [error,setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMenu = async() => {
            try {
                const response = await fetch('/data/menu.json');
                if(!response.ok) {
                    throw new Error('Errore HTTPS : '+response.status);
                }
                const dataFetch = await response.json();
                setMenu(dataFetch);
            }
             catch (err: any) {
               console.log(err);
               setError(error);
            } 
        }

        fetchMenu();
    },[]);

    return(
        <>
<section className="flex flex-col min-h-0  text-white">
  <div className="flex items-center h-20 bg-black bg-opacity-50">
    <div className="mx-auto px-5 max-w-screen-xl w-full flex items-center justify-between">
      <div className="flex-shrink-0">
        <img 
          src={initTitle} 
          alt="Logo Walter Antonelli" 
          className="w-16 sm:w-20 md:w-24 lg:w-32 h-auto"
        />
      </div>
      <nav className="flex gap-6">
        {menu.map((link: menuType) => (
           <a key={link.id} href={link.route} className="hover:text-blue-400 transition">{link.label}</a>
        ))}
      </nav>
      
    </div>
  </div>
</section>
        </>
    )

};

export default HeaderMenu;