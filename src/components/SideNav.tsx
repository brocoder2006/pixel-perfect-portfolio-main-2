import { motion } from "framer-motion";

const navItems = ["Fun", "Auto", "Work", "Concept", "Process"];

const SideNav = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex flex-col items-start gap-4"
        >
            {navItems.map((item, i) => (
                <motion.button
                    key={item}
                    whileHover={{ x: 8 }}
                    className={`font-body text-sm tracking-wide transition-colors duration-300 ${i === 2 ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                        }`}
                >
                    {item}
                </motion.button>
            ))}
        </motion.nav>
    );
};

export default SideNav;
