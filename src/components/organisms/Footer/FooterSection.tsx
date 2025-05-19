import Button from "@/components/atoms/Button/Button";
import NextLink from "next/link"

interface IFooterType {
    title: string;
    baseHref: string;
    items: { id: number; label: string; href: string }[];
}

const FooterSection = ({ title, baseHref, items }: IFooterType) => {
    return (
        <div>
            <div className='font-semibold text-lg mb-4 uppercase'>{title}</div>
            <ul className='*:mb-3'>
                {items.map((item) => (
                    <li key={item.id}>
                        <Button
                            className='!px-0'
                            variant='text'
                            component={NextLink}
                            href={`${baseHref}${item.href}`}
                            color='secondary'
                        >
                            {item.label}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterSection