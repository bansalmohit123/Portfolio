import SkillCard from "./SkillCard";
const skillItem = [
    {
        imgSrc: '/images/Flutter.svg',
        label: 'Flutter',
        desc: 'Framework'
    },
    {
        imgSrc: '/images/docker.svg',
        label: 'Docker',
        desc: 'Containerization'
    },
    {
        imgSrc: '/images/kubernetes.svg',
        label: 'Kubernetes',
        desc: 'Orchestration'
    },
    {
        imgSrc: '/images/javascript.svg',
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc: '/images/nodejs.svg',
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc: '/images/firebase.svg',
        label: 'Firebase',
        desc: 'Backend Services'
    },
    {
        imgSrc: '/images/expressjs.svg',
        label: 'ExpressJS',
        desc: 'Node Framework'
    },
    {
        imgSrc: '/images/mongodb.svg',
        label: 'MongoDB',
        desc: 'Database'
    },
    {
        imgSrc: '/images/react.svg',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: '/images/github.svg',
        label: 'GitHub',
        desc: 'Version Control'
    },
    {
        imgSrc: '/images/vscode.svg',
        label: 'VS Code',
        desc: 'Editor'
    },
    {
        imgSrc: '/images/figma.svg',
        label: 'Figma',
        desc: 'Design tool'
    }
    
];
const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Essential Tools I use
                </h2>

                <div className="text-zinc-400 mt-3 mb-8 w-full text-left">
                    <p>
                        Explore the cutting-edge tools and technologies I leverage to develop innovative, high-performance apps and streamline DevOps processes, ensuring scalability and seamless functionality.
                    </p>
                </div>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] ">
                  {  skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up" />
                    ))
                    }
                        
                </div>
            </div>
        </section>
    );
}


export default Skill;   