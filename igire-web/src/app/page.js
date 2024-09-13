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
              <p className="text-[14px] tablet:text-[18px] laptop:text-[25px] mt-2">
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
                  alt="LOGO"
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
                  alt="LOGO"
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
                alt="LOGO"
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
                  alt="LOGO"
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
      </div>
    </>
  );
}
