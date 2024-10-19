import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          {/* Section Title and Avatar */}
          <div className="flex items-center gap-3 mb-5">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/Photo.jpg"
                width={40}
                height={40}
                className="img-cover"
                alt="portfolio"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          {/* Hero Heading */}
          <h2 className="headline-1 max-w-[15ch] mx-auto  mt-5 mb-8 lg:mb-10 text-left ">
            Building Robust Flutter Apps and Streamlining DevOps for Scalable, Future-Ready Solutions
          </h2>


          {/* Button Group */}
          <div className="flex items-center gap-3">
            {/* ButtonPrimary and ButtonOutline would be separate components */}
            <ButtonPrimary label="Download CV" icon="download" href="https://drive.google.com/file/d/1-GMF9PXmzK7lPHx0f2AakwObJNizF3P5/view?usp=drive_link" />
            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon={"arrow_downward"}
            />
          </div>
        </div>

        {/* Hero Image */}
        <div className="hidden lg:block">
  <figure className="relative w-full max-w-[300px] ml-auto overflow-hidden rounded-[60px]">
    {/* Animated Border */}
    <div className="absolute inset-0 rounded-[60px] border-8 border-transparent bg-gradient-to-r from-sky-400 to-blue-500 animate-moving-border"></div>
    {/* Image */}
    <img
      src="/images/Photo.jpg"
      width={300} // Set a fixed width
      height={400} // Set a fixed height
      className="h-auto object-cover relative z-10" // Keep image centered and at the front
      alt="hero"
    />
  </figure>
</div>


      </div>
    </section>
  );
};

export default Hero;
