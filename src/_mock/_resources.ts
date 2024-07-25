interface Tag {
    name: string;
    icon?: string;
}

interface Resource {
    id: string;
    src: string; 
    title: string;
    tags: Tag[];
}

export const RESOURCES_DATA: Resource[] = [
    {
        id: '1',
        src: '/assets/images/resource-1.png',
        title: 'Case Study Template: FlipX, an Investment Attraction Startup',
        tags: [
            { name: 'Design file', icon: 'octicon:link-24' }
        ]
    },
    {
        id: '2',
        src: '/assets/images/resource-2.png',
        title: 'Designing Impression: The Power of First Impressions',
        tags: [
            { name: 'GitHub Resource', icon: 'ph:code-bold' }
        ]
    },
    {
        id: '3',
        src: '/assets/images/resource-5.png',
        title: 'Fluid Card Animation in After Effects',
        tags: [
            { name: 'Design' },
            { name: 'UI UX' },
            { name: 'Branding' }
        ]
    },
    {
        id: '4',
        src: '/assets/images/resource-2.png',
        title: 'Designing Impression: The Power of First Impressions',
        tags: [
            { name: 'UI UX' },
            { name: 'Branding' }
        ]
    },
    {
        id: '5',
        src: '/assets/images/resource-3.png',
        title: 'Designing Impression: The Power of First Impressions',
        tags: [
            { name: 'Design' }
        ]
    },
    {
        id: '6',
        src: '/assets/images/resource-4.png',
        title: 'OpenCore Customer Acquisition Strategy',
        tags: [
            { name: 'Marketing PDF', icon: 'ph:file' }
        ]
    }
];
