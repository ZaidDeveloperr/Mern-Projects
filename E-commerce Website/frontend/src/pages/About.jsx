import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="About Image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, blanditiis veniam impedit hic quo obcaecati voluptatibus consequatur amet sapiente dicta animi delectus cumque suscipit voluptatem sit facere laborum excepturi magni tempore praesentium fugiat magnam quibusdam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rem, est quia quibusdam, fuga mollitia aliquid unde voluptates eveniet iste maiores provident quaerat illum nulla sit accusamus ex. Accusamus sapiente aliquid, hic consequuntur repellendus soluta ex repellat porro facilis.</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit deserunt consequatur expedita tempora magnam iusto illo incidunt, voluptatum tenetur reiciendis provident distinctio, eius sunt recusandae? Quod beatae veritatis soluta!</p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="px-10 border md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio perspiciatis quisquam tempore repudiandae rem voluptate.</p>
        </div>
        <div className="px-10 border md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio perspiciatis quisquam tempore repudiandae rem voluptate.</p>
        </div>
        <div className="px-10 border md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio perspiciatis quisquam tempore repudiandae rem voluptate.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
