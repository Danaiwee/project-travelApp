import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FOOTER_LINKS } from "@/constants";
import { FOOTER_CONTACT_INFO } from "@/constants";
import { SOCIALS } from "@/constants";

const Footer = () => {
  interface FooterColumnProps {
    title: string;
    children?: React.ReactNode;
  }

  const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
      <div className="flex flex-col gap-5">
        <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
        <p>{children}</p>
      </div>
    );
  };

  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((items, index) => (
              <FooterColumn title={items.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {items.links.map((link, index) => (
                    <Link href="/" key={link + index}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className='flex flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((item, index)=> (
                  <Link 
                    href='/'
                    key={index}
                    className='flex md:flex-col lg:flex-row gap-4'
                  >
                    <p className='whitespace-nowrap regular-14 text-gray-20'>
                      {item.label}:
                    </p>
                    <p className='medium-14 whitespace-nowrap text-blue-70 mb-3'>
                      {item.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className='flex flex-col gap-5'>
                <FooterColumn title={SOCIALS.title}>
                  <ul className='regular-14 flex gap-4 text-gray-30'>
                    {SOCIALS.links.map((link, index)=> (
                      <Link href='/' key={link+index}>
                        <Image 
                          src={link}
                          alt='logo'
                          width={24}
                          height={24}
                        />
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
            </div>
          </div>
        </div>

        <div className='border bg-gray-20'/>
        <p className='flexCenter regular-14 text-gray-20'>2023 Hilink | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
