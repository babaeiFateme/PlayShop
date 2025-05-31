import ICBadgeType from '@/core/types/custom-badge.type'
import { useTheme, Theme } from '@mui/material/styles'

const CBadge = ({ children, className = '', color = 'primary' }: ICBadgeType) => {
    const theme = useTheme<Theme>()

    const getColor = () => {
        /* generic type */
        const colorMap: Record<NonNullable<ICBadgeType['color']>, string> = {
            primary: theme.palette.primary.main,
            info: theme.palette.info.main,
            success: theme.palette.success.main,
            customBlack: theme.palette.custom.black.main
        }

        return colorMap[color ?? 'primary']
    }

    return (
        <span className={`rounded-sm absolute top-5 left-5 p-2  ${className}`} style={{ backgroundColor: getColor() }}>
            {children}
        </span>
    )
}

export default CBadge
