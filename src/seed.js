import uuid from "uuid";
import avatar from './img/avatar.jpg'
import lxp from './img/lxp.jpg'

export default {
    header:
        {
            title: 'Developer',
            body: 'developer portfolio',
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
    projects: [
        {
            id: uuid.v4(),
            title: 'Accenture, Volvo LXP',
            subTitle: 'Software engineer (09/2017 – present)',
            body: 'Rebuilding old and adding new functionality to volvocars.com web page logged in experience. I am responsible for building user interface and making sure it works cross-browser, debugging and rewriting old code. Working in a team of 8 people internationally using Scrum work processes. Technologies: HTML5, CSS3, SCSS, JavaScript, jQuery, Backbone, Hogan, Gulp, Sitecore, .NET Methodologies: Scrum, BEM',
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
            body: 'My experimental project',
            link : {
                label: 'read more',
                url: '/article/react-project',
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
            body: 'Building Reve photo site with picanova',
            img: {
                src: lxp,
                alt: 'image',
            }
        },
        {
            id: uuid.v4(),
            title: 'VISMA SMB marketing',
            body: 'Building landing pages',
            img: {
                src: lxp,
                alt: 'image',
            }
        },
        {
            id: uuid.v4(),
            title: 'Rewe photo',
            subTitle: 'Software engineer (09/2017 – present)',
            body: 'Building Reve photo site with picanova',
            img: {
                src: lxp,
                alt: 'image',
            }
        },
        {
            id: uuid.v4(),
            title: 'VISMA SMB marketing',
            subTitle: 'Software engineer (09/2017 – present)',
            body: 'Building landing pages',
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
                },
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        {
            id: 'react-project',
            header:
                {
                    title: 'First react project',
                    body: 'article subtitle',
                },
            body: 'First react project'
        }
    ]
};