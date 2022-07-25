import {FaPython} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io'
import {SiCsharp} from 'react-icons/si'
import {BsFacebook, BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'
import {BiCodeAlt, BiLibrary, BiGitRepoForked} from 'react-icons/bi'
import {GrNode, GrReactjs, GrMysql, GrNext} from 'react-icons/gr'
import {FiDatabase} from 'react-icons/fi'
import {CgToolbox} from 'react-icons/cg'

export const StackData = [
    {
        id:0,
        headline: "Languages",
        items: [
            {
                icon: <IoLogoJavascript />,
                language: "JavaScript"
            },
            {
                icon: <FaPython />,
                language: "Python"
            },
            {
                icon: <SiCsharp />,
                language: "C#"
            }
        ],
        svg: <BiCodeAlt />
    },
    {
        id: 1,
        headline: "FrameWorks",
        items: [
            {
                icon: <GrReactjs />,
                language: "ReactJS"
            },
            {
                icon: <GrNode />,
                language: "NodeJS"
            },
            {
                icon: <GrNext />,
                language: "NextJS"
            }
        ],
        svg: <BiLibrary />
    },
    {
        id: 2,
        headline: "DataBase",
        items: [
            {
                icon: <GrMysql />,
                language: "MySQL"
            },
        ],
        svg: <FiDatabase />
    },
    {
        id: 3,
        headline: "Tools",
        items: [
            {
                icon: <BiGitRepoForked />,
                language: "Git"
            },
            {
                icon: <BsGithub />,
                language: "GitHub"
            }
        ],
        svg: <CgToolbox />
    }
]

export const ProjectsData = [
    {
        id: 0,
        head: "Portfolio",
        description: "Created my portfolio using ReactJS, the one you are seeing right now!",
        src: "https://github.com/Muzammilzia/myPortfolio" 
    },
    {
        id: 1,
        head: "2D-Flappy Bird",
        description: "A 2 Dimensional flappy bird game, created in pygame using python",
        src: "https://github.com/Muzammilzia/Flappy_Bird" 
    },
    {
        id: 2,
        head: "MVC Asp.net Web application with mssql",
        description: "Hotel Management System with login/Signup, and also one can add products",
        src: "https://github.com/Muzammilzia/HotelManagementSystem"
    }
]

export const socialdata = [
    {
        id: 0,
        src: "https://www.facebook.com/muzammil.zia.1",
        logo: <BsFacebook/>
    },
    {
        id:1,
        src: "https://www.instagram.com/muzammil.zia.1/",
        logo: <BsInstagram/>
    },
    {
        id: 2,
        src: "https://www.linkedin.com/in/muzzammil-zia-9a24601b4/",
        logo: <BsLinkedin/>
    },
    {
        id: 3,
        src: "https://github.com/Muzammilzia",
        logo: <BsGithub />
    }
]