import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div>
        {/* HERO SECTION */}
        <div className="bg-gradient-to-r from-white">
          <div
            className="relative w-full h-[30rem] tablet:h-[40rem] laptop:h-[43rem] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/hero.png)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent"></div>
            <div className="flex flex-col items-start absolute inset-0 justify-center px-4 tablet:px-8 laptop:px-[126px] text-[#0B3004]">
              <h1 className="text-[24px] tablet:text-[32px] laptop:text-[50px] font-bold">
                Igire Rwanda Organization
              </h1>
              <p className="text-[14px] tablet:text-[18px] laptop:text-[25px] mt-[38px]">
                Empowering the youth to achieve self-reliance
              </p>
              <Button variant="default" className="mt-4">
                Learn more
              </Button>
            </div>
          </div>
        </div>
        {/* End of Hero section */}

        {/* About Section */}
        <div className="flex flex-col gap-[40px] pt-[40px] laptop:pt-[101px] px-4 tablet:px-8 laptop:px-[126px]">
          <div className="flex justify-center">
            <h1 className="text-[24px] font-bold">About</h1>
          </div>
          <div className="flex flex-col gap-[30px]">

            <div className="flex flex-col p-4 tablet:p-8 laptop:px-[82px] laptop:py-[37px] bg-[#F9F9F9] gap-4 tablet:gap-6 laptop:gap-[1.5rem] border border-[#F79E1B]">
              <div className="flex justify-center gap-[40px] tablet:justify-start">
                <Image
                  src="/vision.png"
                  alt="Vision"
                  width={34}
                  height={12}
                />
                <p className="text-[24px] font-bold">Vision</p>
              </div>
              <div>
                <p className="text-[12px] tablet:text-[14px] laptop:text-[18px] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod
                </p>
              </div>
            </div>

            <div className="flex flex-col p-4 tablet:p-8 laptop:px-[82px] laptop:py-[37px] bg-[#F9F9F9] gap-4 tablet:gap-6 laptop:gap-[1.5rem] border border-[#F79E1B]">
              <div className="flex justify-center gap-[40px] tablet:justify-start">
                <Image
                  src="/mission.png"
                  alt="Mission"
                  width={30}
                  height={12}
                />
                <p className="text-[24px] font-bold">Mission</p>
              </div>
              <div>
                <p className="text-[12px] tablet:text-[14px] laptop:text-[18px] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End of About Section */}

        {/* Program Section */}
        <div className="flex flex-col gap-[40px] py-[40px] laptop:py-[101px] px-4 tablet:px-8 laptop:px-[126px]">
          <div className="flex justify-center">
            <h1 className="text-[24px] font-bold">Programs</h1>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <p className="font-bold text-[18px]">Unlock your potential with our cutting-edge programs</p>
            <p className="w-full max-w-[21rem] tablet:max-w-[28rem] laptop:max-w-[32rem] desktop:max-w-[36rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmodLorem ipsum dolor sit amet,
            </p>
          </div>

          <div className="flex flex-col laptop:flex-row tablet:flex-col">
            <div className="flex flex-col items-center gap-5 py-10 border border-[#F79E1B] px-10">
              <Image
                src="/sheCanCode.png"
                alt="She Can Code"
                width={206}
                height={12}
              />
              <p className="flex text-center font-bold">Train the next generation in <br></br>software developemnt</p>
              <p className="flex text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLor</p>
              <div className="flex items-center gap-[1rem]">
                <p>Visit website</p>
                <Image
                  src="/link.png"
                  alt="LINK"
                  width={34}
                  height={12}
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center gap-5 py-10 border border-[#F79E1B] px-10">
                <Image
                  src="/programs.jpg"
                  alt="Programs"
                  width={221}
                  height={4}
                />

                <p className="flex text-center font-bold">Train the next generation in <br></br>software developemnt</p>
                <p className="flex text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLor</p>
                <div className="flex items-center gap-[1rem]">
                  <p>Visit website</p>
                  <Image
                    src="/link.png"
                    alt="LINK"
                    width={34}
                    height={12}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of partners section */}

        {/* Latest new  */}
        <div className="flex flex-col gap-8 px-4 tablet:px-6 laptop:px-[126px] pb-10">
          <div>
            <h1 className="text-[24px] font-bold text-center laptop:text-left">Latest news</h1>
          </div>
          <div className="flex flex-col justify-between laptop:flex-row laptop:gap-12">
            <div className="flex flex-col justify-center items-center bg-[#EFF4FA] h-auto w-full tablet:w-full laptop:w-[30.8rem] laptop:h-[31.25rem]">
              <div
                className="flex flex-col gap-[1.5rem] w-full tablet:w-full desktop:w-[20.4rem] h-[17.6rem] tablet:h-auto bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/news.png)' }}
              >
                <div className="flex items-center justify-between px-[0.8rem] bg-[#868686] mt-auto py-2">
                  <div className="flex flex-col text-[14px] tablet:text-[18px] gap-[0.4rem] py-[0.5rem]">
                    <p>Design</p>
                    <p>12.Jan.2023</p>
                  </div>
                  <div>
                    <Image src="/link.png" alt="Link" width={34} height={12} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col px-4 w-full tablet:px-14 laptop:px-3 text-left mt-4">
                <p className="text-[24px] font-bold">UI review presentation</p>
                <p className="text-[14px] tablet:text-[16px]">
                  Empowering the next generation of tech leaders! This program is designed to equip.
                </p>
              </div>
            </div>

            <div className="flex flex-col w-full laptop:w-[31.4rem] text-center gap-6 px-4 tablet:px-6 laptop:px-0 mt-6 laptop:mt-0">
              <p className="text-[16px] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius erat eget diam elementum faucibus. Mauris eleifend, tellus non consectetur maximus, libero libero lacinia eros, vel ultricies ex tellus nec mi. In hac habitasse platea dictumst.
              </p>
              <p className="text-[16px] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius erat eget diam elementum faucibus. Mauris eleifend, tellus non consectetur maximus, libero libero lacinia eros, vel ultricies ex tellus nec mi.
              </p>
            </div>
          </div>
        </div>
        {/* end of latest news section  */}

        {/* partners section */}
        <div className="flex flex-col gap-[40px] py-[40px] laptop:py-[2.3rem] px-4 tablet:px-8 laptop:px-[126px]">
          <div className="flex justify-center">
            <h1 className="text-[24px] font-bold">Partners</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-4 tablet:justify-between items-center">
            <div className="w-[120px] tablet:w-[154px]">
              <Image
                src="/mastercard.png"
                alt="Programs"
                width={154.39}
                height={104.81}
              />
            </div>
            <div className="w-[120px] tablet:w-[154px]">
              <Image
                src="/umurava.png"
                alt="Programs"
                width={178.15}
                height={73.68}
              />
            </div>
            <div className="w-[120px] tablet:w-[154px]">
              <Image
                src="/usEmbacy.png"
                alt="Programs"
                width={140.54}
                height={135.94}
              />
            </div>
            <div className="w-[120px] tablet:w-[154px]">
              <Image
                src="/klab.png"
                alt="Programs"
                width={113.82}
                height={52.92}
              />
            </div>
            <div className="w-[120px] tablet:w-[154px]">
              <Image
                src="/irembo.png"
                alt="Programs"
                width={163.3}
                height={32.17}
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
