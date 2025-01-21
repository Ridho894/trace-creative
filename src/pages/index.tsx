import { MdPhoneInTalk } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";

import Button from "@/components/core/Button";
import Input from "@/components/core/Input";
import Textarea from "@/components/core/Textarea";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

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
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = fetch("/api/sendMail", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => {
        if (!res.ok) {
          setFormData({ name: "", email: "", message: "", company: "" });
          throw new Error("Failed to send message");
        }
        return res.json();
      });
      toast.success("Email sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "", message: "", company: "" });
    }
  };

  return (
    <div className="pb-10">
      <div className="relative w-screen h-max xl:h-screen overflow-hidden">
        <img
          src="/background_top.png"
          alt="Background Image"
          className="object-cover h-[550px] xl:h-screen w-screen"
        />
      </div>
      <div className="relative w-full mb-20 xl:mb-40">
        <div className="bg-[url('/curve.png')] h-screen w-screen bg-cover bg-no-repeat">
          <h2 className="text-sub1 xl:text-h2 text-white text-center pt-6 xl:pt-24 px-10">
            a merchandising company dedicated to turning{" "}
            <br className="hidden xl:block" />
            <span className="underline">your ideas into reality</span>
          </h2>
        </div>
        <section className="w-full absolute right-0 top-32 xl:top-[450px]">
          <div className="flex flex-col-reverse xl:flex-row items-center justify-between max-w-7xl mx-auto">
            <div className="space-y-4 pt-10 xl:pt-0">
              <div className="leading-tight">
                <h1 className="text-h3 xl:text-h1 text-[#043D58]">
                  Why <span className="font-bold">Trace?</span>
                </h1>
                <h5 className="text-sub1 xl:text-h5">
                  Because We Always <span className="font-bold">C.A.R.E</span>
                </h5>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-8 font-bold">
                  <h1 className="text-h1 text-[#FFDA00] [text-shadow:_0_6px_0_rgb(0_0_0_/_20%)] w-10 leading-none drop-shadow-xl">
                    C
                  </h1>
                  <h5 className="text-sub1 xl:text-h5 text-[#043D58] font-medium">
                    Customer-Centric
                  </h5>
                </div>
                <div className="flex items-center space-x-8 font-bold">
                  <h1 className="text-h1 text-[#FFDA00] [text-shadow:_0_6px_0_rgb(0_0_0_/_20%)] w-10 leading-none drop-shadow-xl">
                    A
                  </h1>
                  <h5 className="text-sub1 xl:text-h5 text-[#043D58] font-medium">
                    Affordable Quality
                  </h5>
                </div>
                <div className="flex items-center space-x-8 font-bold">
                  <h1 className="text-h1 text-[#FFDA00] [text-shadow:_0_6px_0_rgb(0_0_0_/_20%)] w-10 leading-none drop-shadow-xl">
                    R
                  </h1>
                  <h5 className="text-sub1 xl:text-h5 text-[#043D58] font-medium">
                    Responsible & Eco-Friendly
                  </h5>
                </div>
                <div className="flex items-center space-x-8 font-bold">
                  <h1 className="text-h1 text-[#FFDA00] [text-shadow:_0_6px_0_rgb(0_0_0_/_20%)] w-10 leading-none drop-shadow-xl">
                    E
                  </h1>
                  <h5 className="text-sub1 xl:text-h5 text-[#043D58] font-medium">
                    Expertise & Excellence
                  </h5>
                </div>
              </div>
            </div>
            <div
              style={{
                borderRadius: "100% 100% 25% 100%",
              }}
              className="bg-[#043D58] text-white p-4 h-80 w-80 xl:h-96 xl:w-96 flex items-end justify-end text-right pb-10 xl:pb-20 px-12"
            >
              <h6 className="text-sub1 xl:text-h6">
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
      <div className="flex flex-col xl:flex-row items-center justify-between max-w-[1440px] mx-auto">
        <div className="p-4 w-full">
          <img
            src={"/brands/items/combined.JPG"}
            className="-z-10 relative"
            alt=""
          />
        </div>

        <div className="w-full pl-0 xl:pl-40 space-y-12 py-10">
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
      <div className="xl:flex block pt-32 justify-between max-w-[1440px] mx-auto">
        <div className="w-full space-y-10">
          <div className="relative">
            <div className="bg-[#0F6284] h-[500px] w-[500px] -top-52 -left-80 -z-10 rounded-full absolute" />
            <img src="/phone.png" className="xl:h-72 h-52 -ml-4" alt="" />
          </div>
          <div className="w-full xl:flex-row flex-col xl:pt-0 pt-10 flex xl:items-end items-start space-x-0 xl:space-x-12 xl:px-0 px-5 pb-10 space-y-5">
            <div className="space-y-2 text-[#043D58] font-medium">
              <div className="flex items-center space-x-6">
                <MdPhoneInTalk className="w-4 h-4" />
                <p>
                  <Link target="_blank" href={"https://wa.me/6281297358236"}>
                    +62 81297358236
                  </Link>
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <CiInstagram className="w-4 h-4" />
                <p>
                  <Link
                    target="_blank"
                    href={"https://instagram.com/tracecreative.id"}
                  >
                    @tracecreative
                  </Link>
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <TfiEmail className="w-4 h-4" />
                <Link href={"mailto:info@tracecreative.co.id"}>
                  info@tracecreative
                </Link>
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

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center xl:pl-40 pl-0 space-y-4"
        >
          <div className="xl:w-96 w-[350px]">
            <p>Name</p>
            <Input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Your Name"
            />
          </div>
          <div className="xl:w-96 w-[350px]">
            <p>Company</p>
            <Input
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              placeholder="Your Company"
            />
          </div>
          <div className="xl:w-96 w-[350px]">
            <p>Email</p>
            <Input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Your Email"
            />
          </div>
          <div className="xl:w-96 w-[350px]">
            <p>Message</p>
            <Textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Your Message"
            />
          </div>
          <Button
            type="submit"
            disabled={
              loading || !formData.name || !formData.email || !formData.message
            }
            className="xl:w-96 w-[350px] disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </form>
      </div>
    </div>
  );
}
