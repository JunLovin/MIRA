import gsap from "gsap"
import { useEffect, useRef, useState } from "react"

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subscriptionRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const arrowRef = useRef<SVGSVGElement>(null)

    const [isAnimating, setIsAnimating] = useState(false)

    const handleButtonClick = () => {
        if (isAnimating) return;

        setIsAnimating(true);

        const tl = gsap.timeline({
            onComplete: () => setIsAnimating(false)
        });

        tl.fromTo(arrowRef.current,
            {
                x: 0,
                opacity: 1,
            },
            {
                x: 30,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in"
            })

            .fromTo(arrowRef.current,
                {
                    x: -30,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out"
                }
            );

        console.log("Button clicked!");
    }

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        tl.fromTo(titleRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 1.2 }
            , 0)

        tl.fromTo(subscriptionRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.8 }
            , 0.5)

        gsap.fromTo('.radiate-target',
            {
                textShadow: '0 0 5px #FFF04B, 0 0 15px #FFF04B'
            },
            {
                textShadow: '0 0 10px #FFF04B, 0 0 35px #FFF04B, 0 0 50px #FFF04B',
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'power2.inOut'
            }
        );

    }, [])

    return (
        <>
            <div className="hero h-full flex flex-col mt-12 items-center gap-16 w-3xl mx-auto max-lg:w-full">
                <div className="hero-title max-sm:px-4">
                    <h1 ref={titleRef} className="text-7xl font-bold text-center max-w-[40ch] max-lg:max-w-[20ch] max-md:text-5xl max-md:max-w-[15ch] max-lg:text-6xl">
                        Make Ideas
                        <span
                            className="text-[#FFF04B] radiate-target"
                        >
                            {' '}Radiate{' '}
                        </span>
                        Awesomely</h1>
                </div>
                <div ref={subscriptionRef} className="hero-cta-input flex flex-col items-center justify-center gap-6 max-md:w-full">
                    <div className="cta-text">
                        <p className="text-2xl font-bold text-[#D0D0D0] max-md:text-xl">Join the <span className="text-[#FFF04B] radiate-target">MIRA</span> early access list!</p>
                    </div>
                    <div className="cta-input max-md:w-full max-md:px-6">
                        <div className="input bg-[#1E1E1E] w-2xl max-md:w-full h-26 rounded-full flex justify-center items-center px-2">
                            <input
                                type="email"
                                className="w-[80%] h-full rounded-full px-4 outline-none text-xl placeholder:select-none"
                                placeholder="example@domain.com"
                            />
                            <button
                                ref={buttonRef}
                                onClick={handleButtonClick}
                                disabled={isAnimating}
                                className="size-20 bg-[#FFF04B] rounded-full text-black flex justify-center items-center cursor-pointer active:bg-[#e7d944] transition disabled:cursor-not-allowed overflow-hidden"
                            >
                                <svg
                                    ref={arrowRef}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="54"
                                    height="54"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.884 6.116a1.25 1.25 0 0 0-1.768 1.768l2.866 2.866H6a1.25 1.25 0 1 0 0 2.5h8.982l-2.866 2.866a1.25 1.25 0 0 0 1.768 1.768l5-5a1.25 1.25 0 0 0 0-1.768z" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-[#383838] font-bold ml-6">We promise to only send you MIRA launch updates</p>
                    </div>
                </div>
            </div>
        </>
    )
}