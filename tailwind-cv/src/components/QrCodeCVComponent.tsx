import { QRCodeCanvas } from 'qrcode.react';
import type qrCodeType from '../types/qrCodeType';

const QrCodeCVComponent: React.FC<qrCodeType> = ({link}) => {
    
    return(
        <>
           <section id="chi-sono" className="bg-emerald-800 dark:bg-emerald-800 py-16">
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 bg-gray-100 dark:bg-emerald-300 text-lg font-medium text-gray-900 dark:text-gray-100">
            Sei Incuriosito ? Bene Scarica il Mio CV con questo QRCODE
          </span>
        </div>
      </div>

      <div className="mt-8 text-center">
         <div className="flex justify-center items-center mb-4">
                <QRCodeCanvas
                    value={link}
                     size={180}
                     bgColor="#ffffff"
                     fgColor="#000000"
                     level="H"
                     marginSize={2}/>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}

export default QrCodeCVComponent;