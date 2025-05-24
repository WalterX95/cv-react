import { useEffect, useState } from 'react';
import type initComponent from '../types/initComponent';
import type certificationType from '../types/certificationType';


const CardComponent: React.FC<initComponent> = ({initTitle}) => {
    const [cert,setCert] = useState<certificationType[]>([]);
    const [error,setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCert = async () => {
           try {
                const response = await fetch('/data/certificazioni.json');
                if(!response.ok) {
                    throw new Error('Errre Richesta HTTPS : '+response.status);
                }
                const dataCert = await response.json();
                setCert(dataCert);
           }
           catch (err : any) {
            setError(error);
            console.log(err.message);
           }  
        }
        fetchCert();
    },[])
    return(
        <>
           <section id="skills" className="bg-blue-50 dark:bg-blue-900 text-black dark:text-white py-16">
             <div className="max-w-6xl mx-auto px-4">
             <h2 className="text-3xl font-semibold text-center mb-12">{initTitle}</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {cert.map((ce : certificationType) => (
                       <div key={ce.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-between"> <div>
                        <img src={ce.imgCert} alt={ce.certName} className="w-16 h-16 mb-4 block mx-auto"/>
                             <h3 className="text-xl font-bold mb-2">{ce.certName}</h3>
                             <p className="text-gray-700 dark:text-gray-300">{ce.certDesc}</p>
                        </div>
                        <a href={ce.linkCert} target="_blank" className="mt-4 text-center inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Visualizza certificato</a>
                    </div>  
                    ))}
                 </div>

            </div>
            </section>
        </>
    )
}

export default CardComponent;