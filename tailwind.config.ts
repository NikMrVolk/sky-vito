import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                xs: '440px',
                lg: '900px',
                xl: '1160px',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                layoutBlue: '#009EE4',
                layoutBlueHover: '#0080C1',
                layoutGray: '#5F5F5F',
                layoutLightGray: '#C4C4C4',
                loginInput: '#D9D9D9',
            },
            spacing: {
                '2.75': '0.6875rem', // 11px
                '3.25': '0.8125rem', // 13px
                '4.25': '1.0625rem', // 17px
                '4.5': '1.125rem', // 18px
                '5.25': '1.3125rem', // 21px
                '7.5': '1.875rem', // 30px
                '9.25': '2.3125rem', // 37px
                '13': '3.25rem', // 52px
                '15': '3.75rem', // 60px
                '30': '7.5rem', // 120px
                '33': '8.25rem', // 132px
                '34.25': '8.5625rem', // 137px
                '35': '8.75rem', // 140px
                '42.5': '10.625rem', // 170px
                '67.5': '16.875rem', // 270px
                '75': '18.75rem', // 300px
                '107.5': '26.875rem', // 430px
                '153.5': '38.375rem', // 614px
                mainLayoutCalc: 'calc(50% - 35rem);',
            },
            borderRadius: {
                mobileInput: '1.875rem', // 30px
            },
            boxShadow: {
                mobileFooter: '0 4px 25px 0px rgba(0, 0, 0, 0.1)',
                itemCard: '0 4px 14px 0px rgba(0, 0, 0, 0.1)',
            },
            fontSize: {
                '1.5xl': ['22px', '26px'],
                '3.5xl': ['32px', '38px'],
                '4.5xl': ['40px', '46px'],
            },
            scale: {
                '5': '1.05',
            },
            gap: {
                '12.5': '3.125rem', // 50px
                '15': '3.75rem', // 60px
            },
            gridTemplateColumns: {
                mainPageSearch: '3.375rem 1fr',
            },
        },
    },
    plugins: [],
}
export default config
