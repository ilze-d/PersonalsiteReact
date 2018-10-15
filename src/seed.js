import uuid from "uuid";
import avatar from './img/avatar.jpg'
import lxp from './img/lxp.jpg'
import react from './img/react.jpg'

export default {
    header:
        {
            title: 'Ilze Dombrovska',
            body: 'Front-end developer and UX/|UI designer',
            image: {
                src: avatar,
            }
        },
    projectPageHeader: {
        title: 'Projects',
        body: 'list of projects',
        image: {
            src: lxp,
        }
    },
    homePageIntroduction: {
        title: 'Proffesional background',
        text: '5 years of experience in Front End WEB development. I worked on many projects for e-commerce, corporate sites, web applications. Familiar with responsive design concepts, UX/UI design basics, accessibility basics. I am a fast learner, good team player and do my best in picking up new technologies, best practices, participating in hackathons and developer communities and sharing my knowalage with others.',
        links: [
            {
                label: 'Facebook',
                url: 'https://www.facebook.com/ilze.dombrovska.18',
            },
            {
                label: 'Linkedin',
                url: 'https://www.linkedin.com/in/ilze-d/',
            }
        ]
    },
    projects: [
        {
            id: uuid.v4(),
            title: 'Accenture, Volvo LXP',
            subTitle: 'Software engineer (09/2017 – present)',
            body: {
                text: 'Rebuilding old and adding new functionality to volvocars.com web page logged in experience. I am responsible for building user interface and making sure it works cross-browser, debugging and rewriting old code. Working in a team of 8 people internationally using Scrum work processes.',
                techStack: 'Technologies: HTML5, CSS3, SCSS, JavaScript, jQuery, Backbone, Hogan, Gulp, Sitecore, .NET',
                methodologies: 'Methodologies: Scrum, BEM',
            },
            link : {
                label: 'read more',
                url: '/article/volvo-lxp',
            },
            img: {
               src: lxp,
               alt: 'image',
            }
        },
        {
            id: uuid.v4(),
            title: 'First React and UI/UX project',
            subTitle: 'Software engineer (09/2017 – present)',
            body: {
                text: 'Rebuilding old and adding new functionality to volvocars.com web page logged in experience. I am responsible for building user interface and making sure it works cross-browser, debugging and rewriting old code. Working in a team of 8 people internationally using Scrum work processes.',
                techStack: 'Technologies: React, JavaScript, HTML5, SCSS',
                methodologies: 'Methodologies: free',
            },
            link : {
                label: 'read more',
                url: '/article/react-project',
            },
            img: {
                src: react,
                alt: 'image',
            }
        },
        {
            id: uuid.v4(),
            title: 'Rewe photo',
            subTitle: 'Software engineer (09/2017 – present)',
            body: {
                text: 'Rebuilding old and adding new functionality to volvocars.com web page logged in experience. I am responsible for building user interface and making sure it works cross-browser, debugging and rewriting old code. Working in a team of 8 people internationally using Scrum work processes.',
                techStack: 'Technologies: React, JavaScript, HTML5, SCSS',
                methodologies: 'Methodologies: free',
            },
            img: {
                src: lxp,
                alt: 'image',
            }
        },
        {
            id: uuid.v4(),
            title: 'VISMA SMB marketing',
            body: {
                text: 'Rebuilding old and adding new functionality to volvocars.com web page logged in experience. I am responsible for building user interface and making sure it works cross-browser, debugging and rewriting old code. Working in a team of 8 people internationally using Scrum work processes.',
                techStack: 'Technologies: React, JavaScript, HTML5, SCSS',
                methodologies: 'Methodologies: free',
            },
            img: {
                src: lxp,
                alt: 'image',
            }
        },
        {
            id: uuid.v4(),
            title: 'Rewe photo',
            subTitle: 'Software engineer (09/2017 – present)',
            body: {
                text: 'Rebuilding old and adding new functionality to volvocars.com web page logged in experience. I am responsible for building user interface and making sure it works cross-browser, debugging and rewriting old code. Working in a team of 8 people internationally using Scrum work processes.',
                techStack: 'Technologies: React, JavaScript, HTML5, SCSS',
                methodologies: 'Methodologies: free',
            },
            img: {
                src: lxp,
                alt: 'image',
            }
        },
        {
            id: uuid.v4(),
            title: 'VISMA SMB marketing',
            subTitle: 'Software engineer (09/2017 – present)',
            body: {
                text: 'Rebuilding old and adding new functionality to volvocars.com web page logged in experience. I am responsible for building user interface and making sure it works cross-browser, debugging and rewriting old code. Working in a team of 8 people internationally using Scrum work processes.',
                techStack: 'Technologies: React, JavaScript, HTML5, SCSS',
                methodologies: 'Methodologies: free',
            },
            img: {
                src: lxp,
                alt: 'image',
            }
        }
    ],
    visible: 2,
    articles: [
        {
            id: 'volvo-lxp',
            header:
                {
                    title: 'MyVolvo and CBV project',
                    body: 'article subtitle',
                    image: {
                        src: lxp,
                    }
                },
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        {
            id: 'react-project',
            header:
                {
                    title: 'First react project',
                    body: 'article subtitle',
                    image: {
                        src: react,
                    }
                },
            body: 'First react project'
        }
    ]
};