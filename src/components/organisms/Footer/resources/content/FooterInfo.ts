import ROUTES from "@/core/constants/routes/routes.constant"

const FooterInfo = [
    {
        title: 'Company',
        baseHref: '/company',
        items: [
            { id: 1, label: 'About', href: ROUTES.Landing },
            { id: 2, label: 'Features', href: ROUTES.Landing},
            { id: 3, label: 'Workers', href: ROUTES.Landing },
            { id: 4, label: 'Career', href: ROUTES.Landing }
        ]
    },
    {
        title: 'Help',
        baseHref: '/help',
        items: [
            { id: 1, label: 'Customer Support', href: ROUTES.Landing },
            { id: 2, label: 'Delivery Details', href: ROUTES.Landing },
            { id: 3, label: 'Terms & Conditions', href:ROUTES.Landing },
            { id: 4, label: 'Privacy Policy', href: ROUTES.Landing }
        ]
    },
    {
        title: 'FAQ',
        baseHref: '/faq',
        items: [
            { id: 1, label: 'Account', href: ROUTES.Landing },
            { id: 2, label: 'Manage Deliveries', href: ROUTES.Landing },
            { id: 3, label: 'Orders', href: ROUTES.Landing },
            { id: 4, label: 'Payments', href: ROUTES.Landing }
        ]
    },
    {
        title: 'Resources',
        baseHref: '/resource',
        items: [
            { id: 1, label: 'Free eBooks', href: ROUTES.Landing },
            { id: 2, label: 'Development Tutorial', href: ROUTES.Landing },
            { id: 3, label: 'How to - Blog', href: ROUTES.Landing },
            { id: 4, label: 'Youtube Playlist', href: ROUTES.Landing }
        ]
    }
]

export default FooterInfo
