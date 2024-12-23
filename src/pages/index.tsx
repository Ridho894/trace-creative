import Image from "next/image";
import { MdPhoneInTalk } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";

import Button from "@/components/core/Button";
import Input from "@/components/core/Input";
import Textarea from "@/components/core/Textarea";

const brands = [
  "/brands/mitshubishi-motors.png",
  "/brands/itsec.png",
  "/brands/bi.png",
  "/brands/kospin.png",
  "/brands/bri.png",
  "/brands/dsf.png",
  "/brands/pesantren.png",
  "/brands/flsmidth.png",
];

export default function Home() {
  return (
    <div className="pb-10">
      <div className="relative w-screen h-screen overflow-hidden">
        <Image
          src="/background_top.png"
          alt="Background Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative w-full mb-40">
        <div className="bg-[url('/curve.png')] h-screen w-screen bg-cover bg-no-repeat">
          <h2 className="text-h2 text-white text-center pt-24">
            a merchandising company dedicated to turning <br />
            <span className="underline">your ideas into reality</span>
          </h2>
        </div>
        <section className="w-full absolute right-0 -bottom-24">
          <div className="flex justify-between max-w-7xl mx-auto">
            <div className="space-y-4">
              <div className="leading-tight">
                <h1 className="text-h1 text-[#043D58]">
                  Why <span className="font-bold">Trace?</span>
                </h1>
                <h5>
                  Because We Always{" "}
                  <span className="text-h5 font-bold">C.A.R.E</span>
                </h5>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-8 font-bold">
                  <h1 className="text-h1 text-[#FFDA00] [text-shadow:_0_6px_0_rgb(0_0_0_/_20%)] w-10 leading-none drop-shadow-xl">
                    C
                  </h1>
                  <h5 className="text-h5 text-[#043D58] font-medium">
                    Customer-Centric
                  </h5>
                </div>
                <div className="flex items-center space-x-8 font-bold">
                  <h1 className="text-h1 text-[#FFDA00] [text-shadow:_0_6px_0_rgb(0_0_0_/_20%)] w-10 leading-none drop-shadow-xl">
                    A
                  </h1>
                  <h5 className="text-h5 text-[#043D58] font-medium">
                    Affordable Quality
                  </h5>
                </div>
                <div className="flex items-center space-x-8 font-bold">
                  <h1 className="text-h1 text-[#FFDA00] [text-shadow:_0_6px_0_rgb(0_0_0_/_20%)] w-10 leading-none drop-shadow-xl">
                    R
                  </h1>
                  <h5 className="text-h5 text-[#043D58] font-medium">
                    Responsible & Eco-Friendly
                  </h5>
                </div>
                <div className="flex items-center space-x-8 font-bold">
                  <h1 className="text-h1 text-[#FFDA00] [text-shadow:_0_6px_0_rgb(0_0_0_/_20%)] w-10 leading-none drop-shadow-xl">
                    E
                  </h1>
                  <h5 className="text-h5 text-[#043D58] font-medium">
                    Expertise & Excellence
                  </h5>
                </div>
              </div>
            </div>
            <div
              style={{
                borderRadius: "100% 100% 25% 100%",
              }}
              className="bg-[#043D58] text-white p-4 h-96 w-96 flex items-end justify-end text-right pb-20 px-12"
            >
              <h6 className="text-h6">
                Trace focuses on <br />
                <span className="underline text-[#FFDA00]">
                  customer relationships delivering affordable
                </span>{" "}
                high-quality products through{" "}
                <span className="underline text-[#FFDA00]">
                  eco-friendly practices.
                </span>{" "}
                we bring fresh ideas to life, creating impactful, sustainable
                merchandise for your brand.
              </h6>
            </div>
          </div>
        </section>
      </div>
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
        <div className="p-4 w-full">
          <img
            src={"/brands/items/combined.JPG"}
            className="-z-10 relative"
            alt=""
          />
        </div>

        <div className="w-full pl-40 space-y-12">
          <div className="text-[#043D58] text-center">
            <div className="relative w-max mx-auto">
              <h1 className="text-[64px] leading-none font-medium">Brands</h1>
              <div
                style={{
                  borderRadius: "100% 100% 25% 100%",
                }}
                className="bg-[#FFDA00] h-6 w-6 top-10 -left-2 -z-10 absolute"
              />
            </div>
            <p>We're Proud to Collaborating With</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="flex justify-center items-center w-[calc(25%-0.5rem)]"
              >
                <img
                  src={brand}
                  alt=""
                  className="object-contain aspect-square h-20"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex pt-32 justify-between max-w-[1440px] mx-auto">
        <div className="w-full space-y-10">
          <div className="relative">
            <div className="bg-[#0F6284] h-[500px] w-[500px] -top-52 -left-80 -z-10 rounded-full absolute" />
            <img src="/phone.png" className="h-72 -ml-4" alt="" />
          </div>
          <div className="w-full flex items-end space-x-12">
            <div className="space-y-2 text-[#043D58] font-medium">
              <div className="flex items-center space-x-6">
                <MdPhoneInTalk className="w-4 h-4" />
                <p>+62 81297358236</p>
              </div>
              <div className="flex items-center space-x-6">
                <CiInstagram className="w-4 h-4" />
                <p>@tracecreative</p>
              </div>
              <div className="flex items-center space-x-6">
                <TfiEmail className="w-4 h-4" />
                <p>info@tracecreative.co.id</p>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-medium text-black">Office</h3>
              <p className="text-[#043D58]">
                Jl. Raya Pekayan kav. 8 Jaka Setia, Kota Bekasi, Jawa Barat
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center pl-40 space-y-4">
          <div className="w-96">
            <p>Name</p>
            <Input placeholder="Value" />
          </div>
          <div className="w-96">
            <p>Surname</p>
            <Input placeholder="Value" />
          </div>
          <div className="w-96">
            <p>Email</p>
            <Input placeholder="Value" />
          </div>
          <div className="w-96">
            <p>Message</p>
            <Textarea placeholder="Value" />
          </div>
          <Button className="w-96">Confirm</Button>
        </div>
      </div>
    </div>
  );
}
