import React from 'react';
import { FaEye } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import Image from 'next/image';

const About = () => {
  return (
    <section>
      
      <div className="w-full">
        <Image src="/dyna.png" alt="IRO Logo" width={1440} height={688} className="w-full h-auto" />
      </div>

      <div className="mx-4 md:mx-[50px] lg:mx-[150px] px-4 md:px-[30px] lg:px-[60px] py-[20px] lg:py-[40px] flex flex-col relative shadow-2xl bg-white -top-[200px] md:-top-[320px]">
        <div>
          <div className="text-center text-orange-400 py-4 md:py-[30px] lg:py-[40px] text-[20px] md:text-[22px] lg:text-[24px] font-bold">Our Story</div>
        </div>
        <div className="text-[16px] md:text-[18px] pb-4 md:pb-[30px] lg:pb-[40px] text-center">
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <p>
            Morbi auctor tortor at lorem tempus, et ornare nunc aliquet. Aenean ultricies lorem non lorem elementum, vitae scelerisque mi viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-[50px] lg:px-[150px] py-[20px] md:py-[40px] lg:py-[40px] -mt-[170px] md:-mt-[300px] ">
        <div className="text-orange-400 text-[20px] md:text-[24px] font-bold pt-[20px] md:pt-[40px] lg:pt-[50px] ">Responsibilities</div>
        <div className="flex flex-col md:flex-row text-[16px] md:text-[18px] py-[20px] md:py-[30px] lg:py-[40px] gap-[40px] md:gap-[60px]">
          <div className="w-full md:w-[50%]"> 
            <p>i. Aenean aliquam ante vulputate ipsum ullamcorper sollicitudin. Praesent vitae gravida turpis. Nulla facilisi. Nam ac dui dolor. Nullam ultricies fermentum libero, eget placerat lectus aliquam id.</p>
            <p>ii. Curabitur accumsan in enim, eros ut laoreet convallis, enim sapien ullamcorper lectus, sit amet convallis augue mauris at mi. Sed non ex et quam pretium molestie.</p>
            <p>iii. Nulla non sapien vitae orci porttitor tristique. Vestibulum consequat felis pharetra egestas sagittis. Morbi gravida magna fringilla elit convallis facilisis. Sed id congue risus.</p>
          </div>
          <div className="w-full md:w-[50%]">
            <p>i. Aenean aliquam ante vulputate ipsum ullamcorper sollicitudin. Vestibulum non mauris et nisi bibendum ultricies.</p>
            <p>ii. Curabitur accumsan in enim, eros ut laoreet convallis, enim sapien ullamcorper lectus, sit amet convallis augue mauris at mi. Sed non ex et quam pretium molestie.</p>
            <p>iii. Nulla non sapien vitae orci porttitor tristique. Vestibulum consequat felis pharetra egestas sagittis. Morbi gravida magna fringilla elit convallis facilisis. Sed at dolor id nisi elementum condimentum.</p>
          </div>
        </div>
      </div>

      
      <div className="px-4 md:px-[50px] lg:px-[150px] text-center py-[20px] md:pb-[20px] lg:pb-[30px] ">
      <div className="flex flex-col md:flex-row gap-[40px] md:gap-[100px] lg:gap-[210px]">

  <div className="w-full md:w-[50%] flex flex-col items-center text-[#34A853] transform transition-transform duration-300 hover:-translate-y-5 hover:border-2 hover:border-[#34A853] ">
    <FaEye className="mr-2 text-[35px] md:text-[45px]" />
    <span className="text-[20px] md:text-[24px] pb-[10px] md:pb-[15px]">Vision</span>
    <div className="text-[16px] md:text-[18px] p-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non risus lorem. Nunc interdum enim a dolor luctus, quis ultrices felis dignissim. Nam volutpat dui condimentum, malesuada leo eu, rutrum neque.
    </div>
  </div>

  <div className="w-full md:w-[50%] flex flex-col items-center text-orange-400 transform transition-transform duration-300 hover:-translate-y-5 hover:border-2 hover:border-orange-400">
    <TbTargetArrow className="mr-2 text-[35px] md:text-[45px]" />
    <span className="text-[20px] md:text-[24px] pb-[10px] md:pb-[15px]">Mission</span>
    <div className="text-[16px] md:text-[18px] p-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non risus lorem. Nunc interdum enim a dolor luctus, quis ultrices felis dignissim. Nam volutpat dui condimentum, malesuada leo eu, rutrum neque.
    </div>
  </div>
</div>

      </div>

      
      <div className="px-4 md:px-[100px] lg:px-[300px] py-[40px] md:py-[60px] lg:py-[80px]">
        <div className="text-[20px] md:text-[24px] pb-[10px] md:pb-[20px] text-black dark:text-white text-center font-bold dark:text-white">Founders</div>
        <div className="flex flex-col md:flex-row justify-around items-center gap-[30px] md:gap-[50px] lg:gap-[100px]">
          <div className="text-center">
            <Image src="/mbnd 1.png" alt="IRO Logo" width={220} height={250} className="py-[20px]" />
            <div className="pb-[10px] md:pb-[20px] font-bold">Mbanda <br /> Innocent</div>
            <div>CO-FOUNDER</div>
          </div>
          <div className="text-center">
            <Image src="/jj 1.png" alt="IRO Logo" width={220} height={300} className="py-[20px]" />
            <div className="pb-[10px] md:pb-[20px] font-bold">Iradukunda <br /> Jean Jacques</div>
            <div>CO-FOUNDER</div>
          </div>
        </div>
      </div>
    </section>
   
  );
}

export default About;
