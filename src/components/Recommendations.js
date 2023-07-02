import {useState, useEffect} from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa"
const recommendationsLink = 'https://www.linkedin.com/in/lauranpham/details/recommendations/?detailScreenTabIndex=0'
const recommendations = [{
    owner: 'Kendyl Bird',
    ownerRole: 'Lead Product Designer at Linktree',
    content: 'Not only is she a great team player and keen collaborator but Laura is one of the most impressive creative problem solvers I’ve ever worked with in engineering.',
},
{
    owner: 'Wayne Lincoln',
    ownerRole: 'Senior Software Engineer at Linktree',
    content: 'Having a multi-career path range of experiences in her professional background has resulted in a team member who is friendly, approachable and empathetic, all the while being able to marry that with focus to the task at hand, a knack for complex problem solving and being able to take charge of projects.',
},
{
    owner: 'Smita Suravajjala',
    ownerRole: 'Engineering Manager at Target',
    content: '“Attention to detail” is the phrase that comes to mind when I think about Laura.',
},
{
    owner: 'Claudia Stamfel',
    ownerRole: 'Engineering Manager at IAG',
    content: 'Not only is she an incredible engineer, she knows how to rally her team mates around to work on incidents or pair on hard challenges.',
},
{
    owner: 'Ferdinand Vermersch',
    ownerRole: 'Deep-Tech VC at VSquared Ventures',
    content: 'She easily rose to the challenges we faced throughout the process of developing an app, and she proved to be a crucial member of the team through her enthusiasm and exemplary work ethic.',
},
]
const Recommendations = () => { 
    const [activeRecommendation, setActiveRecommendation]  = useState(0)

    useEffect(() => {
        const timeout = setTimeout(() => {
            handleClickCarouselRight()
        }, 5000)
        return () => clearTimeout(timeout)
    })

    console.log(activeRecommendation)
    const handleClickCarouselLeft = () => {
        let nextRecommendation = activeRecommendation - 1
        if (nextRecommendation < 0 ) {
            nextRecommendation = recommendations.length - 1
        }
        setActiveRecommendation(nextRecommendation)
        
    }
    const handleClickCarouselRight = () => {
        let nextRecommendation = activeRecommendation + 1
        if (nextRecommendation > recommendations.length - 1) {
            nextRecommendation = 0
        }
        setActiveRecommendation(nextRecommendation)
    }
    return (
       <div className="my-4 px-10 carousel relative w-full overflow-hidden after:clear-both after:block after:content-[''] flex flex-col gap-4 justify-center items-center min-h-inherit">

        {recommendations.map((recommendation, index)=> {
                                            return (
                                                <figure class={`relative float-left w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none text-center flex flex-col gap-4 ${activeRecommendation === index ? '' : 'hidden'}`}>
                                                    <FaQuoteLeft className="m-auto"/>
                                                    <blockquote cite={recommendationsLink}>
                                                        <p class="text-md md:text-xl italic font-medium text-gray-900">{recommendation.content}</p>
                                                    </blockquote>
                                                <figcaption class="flex gap-2 md:gap-0 items-center justify-center mt-6 space-x-3 flex-col md:flex-row">
                                                    <img class="w-6 h-6 rounded-full" src={`https://eu.ui-avatars.com/api/?name=${recommendation.owner}&size=500&background=random`} alt="profile picture"/>
                                                    <div class="flex flex-col items-center md:divide-gap-2 md:flex-row md:divide-x-2 divide-gray-500 dark:divide-gray-700 ">
                                                        <p class="md:pr-3 font-medium text-gray-900">{recommendation.owner}</p>
                                                        <p class="md:pl-3 text-sm text-gray-500">{recommendation.ownerRole}</p>
                                                    </div>
                                                    </figcaption>
                                                    </figure>)
                                        })}
    <FaChevronLeft onClick={() => handleClickCarouselLeft()} className="absolute top-[50%] left-0 cursor-pointer hover:text-gray-500"/>
    <FaChevronRight onClick={() => handleClickCarouselRight()} className="absolute top-[50%] right-0 cursor-pointer hover:text-gray-500"/>
       </div>
           //    Carousel Controls
    )
}

export default Recommendations
