import { motion } from "framer-motion";

const links = ["Tutorials", "Hello", "Work"];

const BottomNav = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center gap-8"
        >
            {links.map((link, i) => (
                <button
                    key={link}
                    className={`font-body text-sm transition-colors duration-300 ${i === links.length - 1
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                >
                    {link}
                </button>
            ))}
        </motion.div>
    );
};

export default BottomNav;
