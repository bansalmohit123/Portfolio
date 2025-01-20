import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: '/images/project-6.jpg',
    title: 'Rate Limiting and Web Protection SaaS Platform',
    tags: ['AWS Lambda',' Node.js', 'Redis'],
    projectLink: 'https://github.com/bansalmohit123/z-secure-docs'
  },
  {
    imgSrc: '/images/project-1.jpg',
    title: 'PhytoScan App',
    tags: ['API', 'Detect', 'E-commerce'],
    projectLink: 'https://github.com/bansalmohit123/phytoscan'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Instagram Clone',
    tags: ['API', 'Development', 'Chat'],
    projectLink: 'https://github.com/bansalmohit123/instagramclone'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'Banking App',
    tags: ['Development', 'API' , 'Auth'],
    projectLink: 'https://github.com/TanishaMehta17/Fintech'
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'Management System',
    tags: ['API', 'Development'],
    projectLink: 'https://github.com/bansalmohit123/Management_system'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'Cloud Vault Storage Service',
    tags: ['AWS-S3','Web-design', 'Development'],
    projectLink: 'https://github.com/bansalmohit123/Cloud-Vault'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'Todo App',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/bansalmohit123/todolist'
  },
];
const Work = () => {
  return (
    <section 
    id="work"
    className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
        My portfolio highlights
        </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
        {works.map(({imgSrc , title,tags,projectLink}, key) => (
          <ProjectCard
          key={key}
          imgSrc={imgSrc} 
          title={title}
          tags={tags}
          projectLink={projectLink}
         classes="reveal-up"
          />
        ) 


        )}
        


        </div>
      </div>



    </section>
  );
}


export default Work;