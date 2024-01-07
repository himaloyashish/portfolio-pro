import Image from "next/image";

export default function Home() {
  return (
    <section>
      <section className="bg-[#2e3f71] w-full" id="home">
        <div className="">
          <h1 className="font-bold text-4xl text-[#A367B1] p-2">Himaloy Bala Ashish</h1>
          <p className="text-white font-bold text-xl">A Front End Developer</p>
        </div>
        <div className="">
          <p className="text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minus quas ea odio omnis minima doloremque, eaque vero ut voluptatum.</p>
          
        </div>
        <div>
          <Image src={"/public/picture/portfolio.jpg"} width={400} height={500} alt="Image of Author"></Image>
        </div>
      </section>
    </section>
  )
}
