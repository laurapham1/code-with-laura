import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'
const recommendationsLink =
    'https://www.linkedin.com/in/lauranpham/details/recommendations/?detailScreenTabIndex=0'
const recommendations = [
    {
        owner: 'Kendyl Bird',
        ownerRole: 'Lead Product Designer at Linktree',
        content:
            'Not only is she a great team player and keen collaborator but Laura is one of the most impressive creative problem solvers I’ve ever worked with in engineering.',
    },
    {
        owner: 'Wayne Lincoln',
        ownerRole: 'Senior Software Engineer at Linktree',
        content:
            'A team member who is friendly, approachable and empathetic, with focus to the task at hand, a knack for complex problem solving and being able to take charge of projects.',
    },
    {
        owner: 'Smita Suravajjala',
        ownerRole: 'Engineering Manager at Target',
        content:
            '“Attention to detail” is the phrase that comes to mind when I think about Laura. Laura always went an additional mile to make sure the code she has written is well tested.',
    },
    {
        owner: 'Claudia Stamfel',
        ownerRole: 'Engineering Manager at IAG',
        content:
            'Not only is she an incredible engineer, she knows how to rally her team mates around to work on incidents or pair on hard challenges.',
    },
    {
        owner: 'Ferdinand Vermersch',
        ownerRole: 'Deep-Tech VC at VSquared Ventures',
        content:
            'She easily rose to the challenges we faced throughout the process of developing an app, and she proved to be a crucial member of the team through her enthusiasm and exemplary work ethic.',
    },
]
const Recommendations = () => {
    const [activeRecommendation, setActiveRecommendation] = useState(0)

    useEffect(() => {
        const timeout = setTimeout(() => {
            handleClickCarouselRight()
        }, 10000)
        return () => clearTimeout(timeout)
    })

    const handleClickCarouselLeft = () => {
        let nextRecommendation = activeRecommendation - 1
        if (nextRecommendation < 0) {
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
        <div
            className="section h-fit min-h-fit p-8 md:px-16 flex flex-col gap-6 bg-purple-800 text-white"
            id="recommendations"
        >
            <h1 className="text-center font-light text-2xl">Recommendations</h1>

            <div className="carousel relative w-full overflow-hidden after:clear-both after:block after:content-[''] flex flex-row gap-4 justify-center items-center min-h-inherit h-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1128px] m-auto">
                <FaChevronLeft
                    onClick={() => handleClickCarouselLeft()}
                    className="cursor-pointer hover:text-gray-500 transition-color duration-300"
                />
                {recommendations.map((recommendation, index) => {
                    return (
                        <figure
                            class={`relative float-left w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none text-center flex flex-col gap-4 ${
                                activeRecommendation === index ? '' : 'hidden'
                            }`}
                        >
                            <FaQuoteLeft className="m-auto" />
                            <a
                                href="https://www.linkedin.com/in/lauranpham/details/recommendations/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <blockquote cite={recommendationsLink}>
                                    <p class="text-md md:text-xl italic font-medium ">
                                        {recommendation.content}
                                    </p>
                                </blockquote>
                                <figcaption class="flex gap-2 md:gap-0 items-center justify-center mt-6 space-x-3 flex-col md:flex-row">
                                    <img
                                        className="w-6 h-6 rounded-full"
                                        src={`https://eu.ui-avatars.com/api/?name=${recommendation.owner}&size=500&background=random`}
                                        alt="profile"
                                    />
                                    <div class="flex flex-col items-center md:divide-gap-2 md:flex-row md:divide-x-2 divide-gray-500 dark:divide-gray-700 ">
                                        <p class="text-sm">
                                            {recommendation.ownerRole}
                                        </p>
                                    </div>
                                </figcaption>
                            </a>
                        </figure>
                    )
                })}
                <FaChevronRight
                    onClick={() => handleClickCarouselRight()}
                    className="cursor-pointer hover:text-gray-500 transition-color duration-300"
                />
            </div>
        </div>
    )
}

export default Recommendations
