import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'



gsap.registerPlugin(useGSAP, ScrollTrigger)
import ReviewCard from "./ReviewCard";

const reviews = [
   
   
    {
        content: 'Developed and optimised API’s using Nodejs, reduced API response time by 25% and enhanced overall system performance.',
        name: 'Schachner Industries Private Limited',
        imgSrc: 'https://drive.google.com/drive/folders/1TwcCKT0kdla3WAHRvdYJyRXUSMFcFDqs',
        company: 'Internship'
    },
    {
        content: '• Developed and deployed APIs using Node.js as the backend framework, optimized MongoDB queries, integrated Twilio for messaging service',
        name: 'CodeScripe',
        imgSrc: 'https://drive.google.com/drive/folders/1SVk7PI61MPxkYs57mf3FNu2ei5u1mbjz',
        company: 'Internship'
    },
    {
        content: 'Covered fundamental concepts of artificial intelligence, including advanced algorithms such as machine learning, neural networks, and natural language processing, offering a comprehensive understanding of core principles and techniques',
        name: 'Great Learning',
        imgSrc: 'https://drive.google.com/drive/folders/1Qhv7xTSSMt-He8E-KurcoJZlrXzII39g',
        company: 'Certification'
    },
    {
        content: 'Delivered foundational knowledge in building cross-platform mobile applications using the Flutter framework, equipping learners with essential skills to develop versatile apps.',
        name: 'Simplilearn',
        imgSrc: 'https://drive.google.com/drive/folders/1by0bq44mvaWRwFHnK28spGkudwUPU9CC',
        company: 'Certification'
    },
  
];

const Review = () => {
    useGSAP(()=>{
        gsap.to('.scrub-slide',{
            scrollTrigger:{
                trigger:'.scrub-slide',
                start:'-200% 80%',
                end:'400% 80%',
                scrub:1,
            },
            x:'-1000'
        })
    });
    return (
        <section id="reviews" className="section overflow-hidden ">
            <div className="container ">
                <h2 className="headline-2 mb-8 reveal-up">
                    Experience / Certificate
                </h2>
                <div className="scrub-slide flex items-stretch gap-3 w-fit ">
                    {reviews.map(({ content, name, imgSrc, company }, key) => (
                        <ReviewCard
                            key={key}
                            content={content}
                            name={name}
                            imgSrc={imgSrc}
                            company={company}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Review;
