import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'rgba(205, 127, 50, 0.3)',
				input: 'rgba(255, 255, 255, 0.1)',
				ring: '#CD7F32',
				background: '#1A1A1A',
				foreground: '#FFFFFF',
				primary: {
					DEFAULT: '#CD7F32',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: 'rgba(205, 127, 50, 0.2)',
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: '#ef4444',
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: 'rgba(255, 255, 255, 0.1)',
					foreground: 'rgba(255, 255, 255, 0.7)'
				},
				accent: {
					DEFAULT: '#CD7F32',
					foreground: '#FFFFFF'
				},
				popover: {
					DEFAULT: 'rgba(30, 30, 30, 0.9)',
					foreground: '#FFFFFF'
				},
				card: {
					DEFAULT: 'rgba(255, 255, 255, 0.1)',
					foreground: '#FFFFFF'
				},
				sidebar: {
					DEFAULT: 'rgba(30, 30, 30, 0.9)',
					foreground: '#FFFFFF',
					primary: '#CD7F32',
					'primary-foreground': '#FFFFFF',
					accent: 'rgba(205, 127, 50, 0.2)',
					'accent-foreground': '#FFFFFF',
					border: 'rgba(205, 127, 50, 0.3)',
					ring: '#CD7F32'
				}
			},
			backdropBlur: {
				glass: '20px'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'glass-shine': {
					'0%, 100%': { transform: 'translateX(-100%)' },
					'50%': { transform: 'translateX(100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'glass-shine': 'glass-shine 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;