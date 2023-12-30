import { motion } from 'framer-motion';

export const fadeInUpVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0 },
};

export const randomIntFromRange = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export const pageTransition = OgComponent => {
	return () => (
		<>
			<OgComponent />

			<motion.div
				className="slide-in"
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 1 }}
				transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
			/>

			<motion.div
				className="slide-out"
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
			/>
		</>
	);
};
