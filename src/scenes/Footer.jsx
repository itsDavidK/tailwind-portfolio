import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-darkPurple pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-lavender">
            David Kovalchuk
          </p>
          <p className="font-playfair text-md text-lavender">
            ©2023 Kovalchuk. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;