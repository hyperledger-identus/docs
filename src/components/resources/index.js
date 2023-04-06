import React, {useCallback, useRef, useState} from 'react'
import styles from './index.module.css';

const Graphics = {
    apis({color = "#5559F2"}) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={51} height={51} fill="none">
                <path
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m30.813 31.875 6.375-6.375-6.376-6.375m-10.625 0L13.813 25.5l6.376 6.375m-3.613 12.75h17.85c3.57 0 5.356 0 6.72-.695a6.376 6.376 0 0 0 2.785-2.786c.695-1.363.695-3.149.695-6.719v-17.85c0-3.57 0-5.355-.695-6.72a6.375 6.375 0 0 0-2.786-2.785c-1.363-.695-3.149-.695-6.719-.695h-17.85c-3.57 0-5.355 0-6.72.695A6.375 6.375 0 0 0 7.07 9.856c-.695 1.364-.695 3.149-.695 6.719v17.85c0 3.57 0 5.356.695 6.72a6.375 6.375 0 0 0 2.786 2.785c1.364.695 3.149.695 6.719.695Z"
                />
            </svg>
        )
    },
    changelog({color = "#5559F2"}) {
        return <svg xmlns="http://www.w3.org/2000/svg" width={51} height={51} fill="none">
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12.75 36.125c0 1.976 0 2.964.217 3.775a6.375 6.375 0 0 0 4.508 4.508c.81.217 1.799.217 3.775.217h13.175c3.57 0 5.356 0 6.72-.695a6.376 6.376 0 0 0 2.785-2.786c.695-1.363.695-3.149.695-6.719v-17.85c0-3.57 0-5.355-.695-6.72a6.375 6.375 0 0 0-2.786-2.785c-1.363-.695-3.149-.695-6.719-.695H21.25c-1.976 0-2.964 0-3.775.217a6.375 6.375 0 0 0-4.508 4.508c-.217.81-.217 1.799-.217 3.775M25.5 17l8.5 8.5m0 0L25.5 34m8.5-8.5H6.375"
            />
        </svg>
    },
    docs({color = "#5559F2"}) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={51} height={51} fill="none">
                <path
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M29.75 4.823V13.6c0 1.19 0 1.785.232 2.24.203.4.528.725.928.928.455.232 1.05.232 2.24.232h8.777M29.75 37.188l5.313-5.313-5.313-5.313m-8.5 0-5.313 5.313 5.313 5.313M42.5 21.224V36.55c0 3.57 0 5.356-.695 6.72a6.376 6.376 0 0 1-2.786 2.785c-1.363.695-3.149.695-6.719.695H18.7c-3.57 0-5.355 0-6.72-.695a6.375 6.375 0 0 1-2.785-2.786C8.5 41.906 8.5 40.12 8.5 36.55v-22.1c0-3.57 0-5.355.695-6.72a6.375 6.375 0 0 1 2.786-2.785c1.364-.695 3.149-.695 6.719-.695h6.825c1.56 0 2.339 0 3.073.176.65.156 1.272.414 1.842.763.644.395 1.195.946 2.297 2.049l6.776 6.774c1.102 1.103 1.653 1.654 2.048 2.298.35.57.607 1.192.763 1.842.176.734.176 1.514.176 3.073Z"
                />
            </svg>
        )
    },
    getStarted({color = "#767AF5"}) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={201} height={201} fill="none">
                <path
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                    d="M37.688 184.25v-41.875m0-83.75V16.75M16.75 37.688h41.875M16.75 163.311h41.875m50.25-138.187L94.351 62.887c-2.362 6.14-3.543 9.21-5.379 11.794a25.125 25.125 0 0 1-5.916 5.916c-2.583 1.837-5.653 3.017-11.794 5.38L33.5 100.5l37.762 14.524c6.14 2.362 9.21 3.543 11.794 5.379a25.13 25.13 0 0 1 5.916 5.916c1.837 2.583 3.017 5.653 5.38 11.794l14.523 37.762 14.524-37.762c2.362-6.141 3.543-9.211 5.379-11.794a25.136 25.136 0 0 1 5.916-5.916c2.583-1.836 5.653-3.017 11.794-5.379L184.25 100.5l-37.762-14.524c-6.141-2.362-9.211-3.543-11.794-5.379a25.13 25.13 0 0 1-5.916-5.916c-1.836-2.583-3.017-5.653-5.379-11.794l-14.524-37.762Z"
                />
            </svg>
        )
    },
    resources({color = "#5559F2"}) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={51} height={51} fill="none">
                <path
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m27.625 14.875-2.37-4.741c-.683-1.365-1.024-2.047-1.533-2.545a4.25 4.25 0 0 0-1.588-.982c-.673-.232-1.436-.232-2.962-.232H11.05c-2.38 0-3.57 0-4.48.463a4.25 4.25 0 0 0-1.857 1.858c-.463.909-.463 2.099-.463 4.479v1.7m0 0h32.3c3.57 0 5.356 0 6.72.695a6.376 6.376 0 0 1 2.785 2.786c.695 1.363.695 3.149.695 6.719v9.35c0 3.57 0 5.356-.695 6.72a6.376 6.376 0 0 1-2.786 2.785c-1.363.695-3.149.695-6.719.695h-22.1c-3.57 0-5.355 0-6.72-.695a6.375 6.375 0 0 1-2.785-2.786c-.695-1.363-.695-3.149-.695-6.719v-19.55Zm25.5 20.188 5.313-5.313-5.313-5.313m-8.5 0-5.313 5.313 5.313 5.313"
                />
            </svg>
        )
    },
    tutorials({color = "#5559F2"}) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={51} height={51} fill="none">
                <path
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.188 19.051c0-1.014 0-1.521.212-1.804.184-.247.467-.401.774-.423.353-.025.78.249 1.633.797l10.031 6.449c.74.476 1.11.714 1.238 1.017.112.264.112.562 0 .826-.127.303-.498.541-1.238 1.017l-10.031 6.449c-.853.548-1.28.822-1.633.797a1.063 1.063 0 0 1-.774-.423c-.212-.283-.212-.79-.212-1.804V19.05Z"
                />
                <path
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6.375 16.575c0-3.57 0-5.355.695-6.72A6.375 6.375 0 0 1 9.856 7.07c1.364-.695 3.149-.695 6.719-.695h17.85c3.57 0 5.356 0 6.72.695a6.375 6.375 0 0 1 2.785 2.786c.695 1.364.695 3.149.695 6.719v17.85c0 3.57 0 5.356-.695 6.72a6.376 6.376 0 0 1-2.786 2.785c-1.363.695-3.149.695-6.719.695h-17.85c-3.57 0-5.355 0-6.72-.695a6.375 6.375 0 0 1-2.785-2.786c-.695-1.363-.695-3.149-.695-6.719v-17.85Z"
                />
            </svg>
        )
    },
    walletSdkSwift({color = "#5559F2"}) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={51} height={51} fill="none">
                <path
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M30.5 8h-9.975m-3.1 38.75h16.15c2.38 0 3.57 0 4.48-.463a4.25 4.25 0 0 0 1.857-1.858c.463-.909.463-2.099.463-4.479v-28.9c0-2.38 0-3.57-.463-4.48a4.25 4.25 0 0 0-1.858-1.857c-.909-.463-2.099-.463-4.479-.463h-16.15c-2.38 0-3.57 0-4.48.463a4.25 4.25 0 0 0-1.857 1.858c-.463.909-.463 2.099-.463 4.479v28.9c0 2.38 0 3.57.463 4.48a4.25 4.25 0 0 0 1.857 1.857c.91.463 2.1.463 4.48.463Z"
                />
            </svg>
        )
    },
    walletSdkTS({color = "#5559F2"}) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={51} height={51} fill="none">
                <path
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6.375 34V15.3c0-2.38 0-3.57.463-4.48a4.25 4.25 0 0 1 1.858-1.857c.909-.463 2.099-.463 4.479-.463h24.65c2.38 0 3.57 0 4.48.463a4.25 4.25 0 0 1 1.857 1.857c.463.91.463 2.1.463 4.48V34H33.283c-.52 0-.78 0-1.024.059a2.126 2.126 0 0 0-.614.254c-.215.132-.398.315-.766.683l-.133.133c-.368.368-.551.551-.766.683-.19.116-.397.202-.614.254-.245.059-.505.059-1.024.059h-5.684c-.52 0-.78 0-1.024-.059a2.126 2.126 0 0 1-.614-.254c-.215-.132-.398-.315-.766-.683l-.133-.133c-.368-.368-.551-.551-.766-.683a2.126 2.126 0 0 0-.614-.254C18.496 34 18.236 34 17.717 34H6.375Zm0 0a2.125 2.125 0 0 0-2.125 2.125v.708c0 1.318 0 1.977.145 2.517A4.25 4.25 0 0 0 7.4 42.355c.54.145 1.2.145 2.517.145h31.166c1.318 0 1.977 0 2.517-.145a4.25 4.25 0 0 0 3.005-3.005c.145-.54.145-1.2.145-2.517 0-.658 0-.988-.072-1.258a2.125 2.125 0 0 0-1.503-1.503c-.27-.072-.6-.072-1.258-.072H42.5"
                />
            </svg>
        )
    }
}

const RESOURCES = [
    {
        title: "Tutorials",
        Svg: Graphics.tutorials,
        content: "Learn how to build with Atala PRISM through our tutorials",
        linkTo: "/tutorials"
    },
    {
        title: "Wallet SDK Swift",
        Svg: Graphics.walletSdkSwift,
        content: "Build Swift-based applications using our SDKs",
        linkTo: "https://swift-docs.atalaprism.io"
    },
    {
        title: "Wallet SDK TypeScript",
        Svg: Graphics.walletSdkTS,
        content: "Build web-based applications using our SDKs",
        linkTo: "#"
    },
    {
        title: "APIs",
        Svg: Graphics.apis,
        content: "Our APIs simplify agent management and reduce time and cost-to-solution for developers",
        linkTo: "/agent-api"
    },
    {
        title: "Resources",
        Svg: Graphics.resources,
        content: "Everything you need to learn more about Atala PRISM",
        linkTo: "https://github.com/input-output-hk/prism-did-method-spec/blob/main/w3c-spec/PRISM-method.md"
    },
    {
        title: "Changelog",
        Svg: Graphics.changelog,
        content: "View the previous versions of Atala PRISM",
        linkTo: "http://atala-prism-v2-changelog-page.io/"
    },
]

function ResourceLink({linkTo}) {
    // const {colorMode} = useColorMode()
    return (
        <div className={styles.resource__link}>
            <svg width={23} height={22} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.338 6A9.996 9.996 0 0 1 12 1c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.996 9.996 0 0 1-8.662-5M11 15l4-4m0 0-4-4m4 4H1"
                    stroke="#667085"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    )
}

function Resource(props) {
    const ref = useRef(null);
    const backgroundRef = useRef(null);
    const [mouseLeavingFrom] = useState(null);
    const [mouseEntersFrom] = useState(null);
    const [size, setSize] = useState({height: 'auto', width: 'auto'});
    // const [enteredFrom, setEnteredFrom] = useState();

    const verifyMousePosition = useCallback(({left, top, width, height, pageX, pageY}) => {
        const mouseX = pageX - (left + window.pageXOffset);
        const mouseY = pageY - (top + window.pageYOffset);
        const fromLeft = mouseX < width / 4;
        const fromRight = mouseX > (width * 3) / 4;
        const fromTop = mouseY < height / 4;
        const fromBottom = mouseY > (height * 3) / 4;
        let position = '';
        if (fromLeft) {
            position = 'left';
        } else if (fromRight) {
            position = 'right';
        }
        if (fromTop) {
            position = 'top';
        } else if (fromBottom) {
            position = 'bottom';
        }
        return position;
    }, [])

    const handleMouseMove = useCallback((event) => {
        const {clientX, clientY, currentTarget, pageX, pageY} = event;
        const {
            height: targetHeight,
            width: targetWidth,
            x: offsetX,
            y: offsetY
        } = currentTarget.getBoundingClientRect();
        const centerX = targetWidth / 2;
        const centerY = targetHeight / 2;
        const mouseX = (clientX - offsetX);
        const mouseY = (clientY - offsetY);
        const x = ((mouseX - centerX) * .08);
        const y = ((mouseY - centerY) * .08);
        setSize({width: targetWidth, height: targetHeight});
        ref.current.animate({transform: `rotateX(${x}deg) rotateY(${y}deg)`}, {fill: "forwards"})
    }, [ref])

    const handleMouseLeave = useCallback((event) => {
        event.preventDefault()
        const {left, top, width, height} = event.currentTarget.getBoundingClientRect();
        const position = verifyMousePosition({left, top, width, height, pageX: event.pageX, pageY: event.pageY})
        ref.current.animate({transform: `rotateX(${0}deg) rotateY(${0}deg)`}, {fill: "forwards", duration: 1000})

        const config = {
            fill: "forwards",
            duration: 200
        }
        switch (position) {
            case 'top':
                backgroundRef.current.animate([
                    {
                        opacity: 1,
                        transform: `translateY(0%)`,
                    },
                    {
                        transform: 'translateY(-100%)',
                        opacity: 0,
                    },
                ], config)
                break;

            case 'bottom':
                backgroundRef.current.animate([
                    {
                        opacity: 1,
                        transform: `translateY(0%)`,
                    },
                    {
                        opacity: 0,
                        transform: 'translateY(100%)',
                    },
                ], config)
                break;

            case 'left':
                backgroundRef.current.animate([
                    {
                        opacity: 1,
                        transform: `translateX(0%)`,
                    },
                    {
                        opacity: 0,
                        transform: 'translateX(-100%)',
                    },
                ], config)
                break;
            case 'right':
                backgroundRef.current.animate([
                    {
                        opacity: 1,
                        transform: `translateX(0%)`,
                    },
                    {
                        opacity: 0,
                        transform: 'translateX(100%)',
                    },
                ], config)
                break;
        }
    }, [backgroundRef])

    const handleMouseEnter = useCallback((event) => {
        const {left, top, width, height} = event.currentTarget.getBoundingClientRect();
        const position = verifyMousePosition({left, top, width, height, pageX: event.pageX, pageY: event.pageY})

        const config = {
            fill: "forwards",
            duration: 200
        }
        switch (position) {
            case 'top':
                backgroundRef.current.animate([
                    {
                        transform: 'translateY(-100%)',
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        transform: `translateY(0%)`,
                    }
                ], config)
                break;

            case 'bottom':
                backgroundRef.current.animate([
                    {
                        opacity: 0,
                        transform: 'translateY(100%)',
                    },
                    {
                        opacity: 1,
                        transform: `translateY(0%)`,
                    }
                ], config)
                break;

            case 'left':
                backgroundRef.current.animate([
                    {
                        opacity: 0,
                        transform: 'translateX(-100%)',
                    },
                    {
                        opacity: 1,
                        transform: `translateX(0%)`,
                    }
                ], config)
                break;
            case 'right':
                backgroundRef.current.animate([
                    {
                        opacity: 0,
                        transform: 'translateX(100%)',
                    },
                    {
                        opacity: 1,
                        transform: `translateX(0%)`,
                    }
                ], config)
                break;
        }

    }, [backgroundRef])

    return (
        <div
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.resource__wrapper}
            onMouseMove={handleMouseMove}
        >
            <div className={`${styles.resource__common} ${styles.resource__inactive}`}>
                <props.Svg/>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <ResourceLink linkTo={props.linkTo}/>
            </div>
            <div className={`${styles.resource__common} ${styles.resource__active}`} ref={backgroundRef}>
                <props.Svg color="#fff"/>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <ResourceLink linkTo={props.linkTo}/>
            </div>
        </div>
    );
}

export default function HomeResources() {
    return (
        <div className={styles.home__resources}>
            {
                RESOURCES.map((resource, index) => (
                    <Resource {...resource} key={index}/>
                ))
            }
        </div>
    )
}