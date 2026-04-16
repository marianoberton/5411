import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#ECEAE3] border-t border-[#696767] flex justify-center items-center h-[466px]">
      {/* Contenedor principal centrado con borde superior */}
      <div className="w-full max-w-[1240px] px-[20px] h-[405px] border-t border-[rgba(255,255,255,0.15)] flex flex-row justify-between items-start pt-[58px]">

        {/* Logo */}
        <div className="flex-none">
          <Image
            src="/logos/logo_texto.svg"
            alt="5411 Footer Logo"
            width={192}
            height={245}
            className="object-contain"
            style={{ width: '192px', height: '245px' }}
          />
        </div>

        {/* Contact Info Group */}
        {/* Ajustamos el margen izquierdo o usamos justify-between. 
            Con justify-between se pegará a la derecha. 
            Para ser más fiel a 'left: 910px' (en contenedor de 1440, o sea 790 en 1200),
            podemos usar un ancho fijo o margen si es necesario, pero justify-between suele verse mejor.
            Si el texto es largo, se alineará a la derecha.
        */}
        <div className="flex flex-col gap-[17px] items-start">
          <a href="mailto:info@5411briquedes.com" className="font-sans font-normal text-[22px] leading-[28px] text-black hover:underline">
            info@5411briquedes.com
          </a>

          <p className="font-sans font-normal text-[22px] leading-[28px] text-black">
            4706-0921 / +54 (11) 6271-7818
          </p>

          <p className="font-sans font-light text-[22px] leading-[28px] text-black w-[431px] mt-[30px]">
            Antonio Mariscal de Sucre 362, Belgrano Capital federal
          </p>
        </div>

      </div>
    </footer>
  );
}
