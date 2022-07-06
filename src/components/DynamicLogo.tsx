import React from "react";
import { NextComponentType } from "next";
import { motion } from "framer-motion";

interface Props extends React.ParamHTMLAttributes<HTMLOrSVGElement> {
	primary?: string;
	secondary?: string;
	responsive?: boolean;
}

const DynamicLogo: NextComponentType<{}, {}, Props> = ({ primary, secondary, responsive, ...rest }) => {
	const transition = { duration: 0.2, ease: "easeInOut" };

	const animationPrimary = {
		transition,
		initial: { fill: primary || "var(--primary)" },
		animate: { fill: primary || "var(--primary)" }
	}

	const animationSecondary = {
		transition,
		initial: { fill: secondary || "var(--text)" },
		animate: { fill: secondary || "var(--text)" }
	}

	return (
		<svg width={responsive ? "71" : "291"} height="71" viewBox={responsive ? "0 0 71 71" : "0 0 291 71"} fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
			<motion.path {...animationPrimary} d="M54.5 8.5H23.5C23.5 8.5 28 13.7813 28 18.5C28 27.5 21.5 33.5 16 41C9.48828 49.8796 1.5 62.5 1.5 62.5H33.5C33.5 62.5 29.0938 58 29.5 51.5C30 43.5 33.727 39.8165 37.5 34.5C48.5 19 54.5 8.5 54.5 8.5Z" />
			<motion.circle {...animationPrimary} cx="12.5" cy="19.5" r="12.5" />
			<motion.circle {...animationPrimary} cx="44.5" cy="51.5" r="12.5" />

			{(!responsive) && (
				<g>
					<motion.path {...animationSecondary} d="M82.3118 54.784L77.9598 50.944L99.7198 22.208L104.008 26.048L82.3118 54.784ZM80.3918 56C78.3864 56 77.3838 54.9973 77.3838 52.992C77.3838 50.9867 78.3864 49.984 80.3918 49.984H102.216C104.221 49.984 105.224 50.9867 105.224 52.992C105.224 54.9973 104.221 56 102.216 56H80.3918ZM79.7518 27.008C77.7464 27.008 76.7438 26.0053 76.7438 24C76.7438 21.9947 77.7464 20.992 79.7518 20.992H101.576C103.581 20.992 104.584 21.9947 104.584 24C104.584 26.0053 103.581 27.008 101.576 27.008H79.7518Z" />
					<motion.path {...animationSecondary} d="M124.968 56.256C121.854 56.256 119.059 55.488 116.584 53.952C114.11 52.3733 112.147 50.2613 110.696 47.616C109.288 44.928 108.584 41.8987 108.584 38.528C108.584 35.1573 109.352 32.128 110.888 29.44C112.467 26.752 114.579 24.64 117.224 23.104C119.912 21.5253 122.92 20.736 126.248 20.736C129.576 20.736 132.563 21.5253 135.208 23.104C137.854 24.64 139.944 26.752 141.48 29.44C143.059 32.128 143.848 35.1573 143.848 38.528H141.352C141.352 41.8987 140.627 44.928 139.176 47.616C137.768 50.2613 135.827 52.3733 133.352 53.952C130.878 55.488 128.083 56.256 124.968 56.256ZM126.248 50.496C128.424 50.496 130.366 49.984 132.072 48.96C133.779 47.8933 135.123 46.464 136.104 44.672C137.086 42.8373 137.576 40.7893 137.576 38.528C137.576 36.224 137.086 34.176 136.104 32.384C135.123 30.5493 133.779 29.12 132.072 28.096C130.366 27.0293 128.424 26.496 126.248 26.496C124.115 26.496 122.174 27.0293 120.424 28.096C118.718 29.12 117.352 30.5493 116.328 32.384C115.347 34.176 114.856 36.224 114.856 38.528C114.856 40.7893 115.347 42.8373 116.328 44.672C117.352 46.464 118.718 47.8933 120.424 48.96C122.174 49.984 124.115 50.496 126.248 50.496ZM140.584 56.064C139.646 56.064 138.856 55.7653 138.216 55.168C137.619 54.528 137.32 53.7387 137.32 52.8V43.008L138.536 36.224L143.848 38.528V52.8C143.848 53.7387 143.528 54.528 142.888 55.168C142.291 55.7653 141.523 56.064 140.584 56.064Z" />
					<motion.path {...animationSecondary} d="M181.212 56.064C180.273 56.064 179.484 55.7653 178.844 55.168C178.246 54.528 177.948 53.7387 177.948 52.8V37.056C177.948 34.624 177.5 32.64 176.604 31.104C175.708 29.568 174.492 28.4373 172.956 27.712C171.462 26.944 169.734 26.56 167.772 26.56C165.98 26.56 164.358 26.9227 162.908 27.648C161.457 28.3733 160.305 29.3547 159.452 30.592C158.598 31.7867 158.172 33.1733 158.172 34.752H154.14C154.14 32.064 154.78 29.6747 156.06 27.584C157.382 25.4507 159.174 23.7653 161.436 22.528C163.697 21.2907 166.236 20.672 169.052 20.672C171.996 20.672 174.62 21.312 176.924 22.592C179.27 23.8293 181.105 25.664 182.428 28.096C183.793 30.528 184.476 33.5147 184.476 37.056V52.8C184.476 53.7387 184.156 54.528 183.516 55.168C182.918 55.7653 182.15 56.064 181.212 56.064ZM154.908 56.064C153.969 56.064 153.18 55.7653 152.54 55.168C151.942 54.528 151.644 53.7387 151.644 52.8V24.256C151.644 23.2747 151.942 22.4853 152.54 21.888C153.18 21.2907 153.969 20.992 154.908 20.992C155.889 20.992 156.678 21.2907 157.276 21.888C157.873 22.4853 158.172 23.2747 158.172 24.256V52.8C158.172 53.7387 157.873 54.528 157.276 55.168C156.678 55.7653 155.889 56.064 154.908 56.064Z" />
					<motion.path {...animationSecondary} d="M209.221 56.256C205.765 56.256 202.714 55.5093 200.069 54.016C197.423 52.48 195.333 50.3893 193.797 47.744C192.303 45.056 191.557 41.984 191.557 38.528C191.557 35.0293 192.303 31.9573 193.797 29.312C195.333 26.624 197.423 24.5333 200.069 23.04C202.714 21.504 205.765 20.736 209.221 20.736C212.634 20.736 215.663 21.504 218.309 23.04C220.954 24.5333 223.023 26.624 224.517 29.312C226.053 31.9573 226.821 35.0293 226.821 38.528C226.821 41.984 226.074 45.056 224.581 47.744C223.087 50.3893 221.018 52.48 218.373 54.016C215.727 55.5093 212.677 56.256 209.221 56.256ZM209.221 50.496C211.439 50.496 213.402 49.984 215.109 48.96C216.815 47.936 218.138 46.528 219.077 44.736C220.058 42.944 220.549 40.8747 220.549 38.528C220.549 36.1813 220.058 34.112 219.077 32.32C218.138 30.4853 216.815 29.056 215.109 28.032C213.402 27.008 211.439 26.496 209.221 26.496C207.002 26.496 205.039 27.008 203.333 28.032C201.626 29.056 200.282 30.4853 199.301 32.32C198.319 34.112 197.829 36.1813 197.829 38.528C197.829 40.8747 198.319 42.944 199.301 44.736C200.282 46.528 201.626 47.936 203.333 48.96C205.039 49.984 207.002 50.496 209.221 50.496Z" />
					<motion.path {...animationPrimary} d="M238.991 57.0241C237.796 57.0241 236.751 56.5974 235.855 55.7441C235.002 54.8481 234.575 53.8027 234.575 52.6081C234.575 51.3707 235.002 50.3254 235.855 49.4721C236.751 48.5761 237.796 48.1281 238.991 48.1281C240.228 48.1281 241.274 48.5761 242.127 49.4721C242.98 50.3254 243.407 51.3707 243.407 52.6081C243.407 53.8027 242.98 54.8481 242.127 55.7441C241.274 56.5974 240.228 57.0241 238.991 57.0241Z" />
					<motion.path {...animationSecondary} d="M265.956 56C263.823 56 261.903 55.4667 260.196 54.4C258.489 53.2907 257.145 51.7974 256.164 49.92C255.183 48.0427 254.692 45.9307 254.692 43.584V13.056C254.692 12.1174 254.991 11.3494 255.588 10.752C256.185 10.1547 256.953 9.85602 257.892 9.85602C258.831 9.85602 259.599 10.1547 260.196 10.752C260.793 11.3494 261.092 12.1174 261.092 13.056V43.584C261.092 45.2907 261.561 46.72 262.5 47.872C263.439 49.024 264.591 49.6 265.956 49.6H268.132C268.9 49.6 269.54 49.8987 270.052 50.496C270.607 51.0934 270.884 51.8614 270.884 52.8C270.884 53.7387 270.521 54.5067 269.796 55.104C269.113 55.7014 268.217 56 267.108 56H265.956ZM251.748 27.776C250.852 27.776 250.127 27.52 249.572 27.008C249.017 26.496 248.74 25.856 248.74 25.088C248.74 24.2347 249.017 23.552 249.572 23.04C250.127 22.528 250.852 22.272 251.748 22.272H266.532C267.428 22.272 268.153 22.528 268.708 23.04C269.263 23.552 269.54 24.2347 269.54 25.088C269.54 25.856 269.263 26.496 268.708 27.008C268.153 27.52 267.428 27.776 266.532 27.776H251.748Z" />
					<motion.path {...animationSecondary} d="M280.891 56C279.953 56 279.163 55.7014 278.523 55.104C277.926 54.464 277.627 53.6747 277.627 52.736V24.256C277.627 23.2747 277.926 22.4854 278.523 21.888C279.163 21.2907 279.953 20.992 280.891 20.992C281.873 20.992 282.662 21.2907 283.259 21.888C283.857 22.4854 284.155 23.2747 284.155 24.256V52.736C284.155 53.6747 283.857 54.464 283.259 55.104C282.662 55.7014 281.873 56 280.891 56ZM280.891 15.296C279.739 15.296 278.737 14.8907 277.883 14.08C277.073 13.2267 276.667 12.224 276.667 11.072C276.667 9.92002 277.073 8.93869 277.883 8.12802C278.737 7.27469 279.739 6.84802 280.891 6.84802C282.043 6.84802 283.025 7.27469 283.835 8.12802C284.689 8.93869 285.115 9.92002 285.115 11.072C285.115 12.224 284.689 13.2267 283.835 14.08C283.025 14.8907 282.043 15.296 280.891 15.296Z" />
				</g>
			)}
		</svg>
	);
}

export default DynamicLogo;