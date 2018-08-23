import uuid from "uuid";

export default {
    header:
        {
            title: 'Developer',
            body: 'developer portfolio',
        },
    projects: [
        {
            id: uuid.v4(),
            title: 'Volvo Cars Loged in experience',
            body: 'Building with backbone',
            link : {
                label: 'read more',
                url: '/article/volvo-lxp',
            }
        },
        {
            id: uuid.v4(),
            title: 'First React and UI/UX project',
            body: 'My experimental project',
            link : {
                label: 'read more',
                url: '/article/react-project',
            }
        },
        {
            id: uuid.v4(),
            title: 'Rewe photo',
            body: 'Building Reve photo site with picanova',
        },
        {
            id: uuid.v4(),
            title: 'VISMA SMB marketing',
            body: 'Building landing pages',
        },
        {
            id: uuid.v4(),
            title: 'Rewe photo',
            body: 'Building Reve photo site with picanova',
            cta: 'more',
        },
        {
            id: uuid.v4(),
            title: 'VISMA SMB marketing',
            body: 'Building landing pages',
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