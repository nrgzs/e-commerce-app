
import React from 'react';
import hero1 from './../../public/heroimg1.jpg';
import Image from 'next/image';


const AboutPage = () => {
  return (
    <div className=" h-[85vh] flex lg:flex-row  items-center flex-col gap-5 mx-auto p-8">
      <Image alt="img" src={hero1} width={500} height={550}></Image>
      <div>
        <h1 className="text-3xl font-bold mb-4">About Us</h1>

        <p className="mb-4">
          Welcome to our e-commerce site! We are dedicated to providing quality
          products and excellent customer service. Our mission is to make your
          shopping experience enjoyable and hassle-free.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
          justo nec justo lacinia cursus non quis lorem. Suspendisse eu est nec
          lacus fermentum ultrices ac ac nunc.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
