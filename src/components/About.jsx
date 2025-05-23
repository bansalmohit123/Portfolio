const aboutItems = [
    {
      label: 'Project done',
      number: 8
    },
    {
      label: 'Years of experience',
      number: 1
    }
  ];
  
  const About = () => {    
    return (
      <section id="about" className="section">
        <div className="container">
          <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <div className="text-zinc-300 mb-4 md:mb-8 md:text-xl w-full text-left ">
          <p >
            Welcome! I’m Mohit Bansal — a passionate Flutter and backend developer with a strong foundation in distributed systems. I thrive on building scalable, high-performance applications that not only look great but also run smoothly under the hood. My work bridges beautifully crafted frontends with powerful, reliable backend architectures to deliver seamless, end-to-end user experiences. Whether it's mobile apps or complex system designs, I’m dedicated to turning your ideas into future-ready digital solutions.
            </p>
          </div>
           
            <div className="flex flex-wrap items-center gap-4 md:gap-7">
              {aboutItems.map(({ label, number }, index) => (
                <div key={index}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))}
              <img src="/images/logo.svg" alt="Company Logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
  