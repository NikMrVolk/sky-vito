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
            },
            spacing: {
                mainLayoutCalc: 'calc(50% - 35rem);',
            },
            borderRadius: {
                mobileSearchInput: '1.875rem', // 30px
            },
            boxShadow: {
                mobileFooter: '0 4px 25px 0px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [],
}
export default config
