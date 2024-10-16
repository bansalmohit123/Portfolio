const aboutItems = [
    {
      label: 'Project done',
      number: 8
    },
    {
      label: 'Years of experience',
      number: 2
    }
  ];
  
  const About = () => {    
    return (
      <section id="about" className="section">
        <div className="container">
          <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <div className="text-zinc-300 mb-4 md:mb-8 md:text-xl w-full text-left ">
          <p >
            Welcome! I'm Mohit Bansal, a passionate Flutter and DevOps developer dedicated to building scalable, high-performance applications. With a strong focus on both frontend development and efficient backend infrastructure, I bring seamless user experiences to life, ensuring your projects are not only visually impressive but also technically robust. Let’s turn your ideas into future-ready digital solutions.
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
  