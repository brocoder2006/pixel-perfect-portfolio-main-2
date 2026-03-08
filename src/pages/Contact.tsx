import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div
            className="min-h-screen bg-background text-foreground overflow-hidden"
            style={{
                "--background": "0 0% 100%",
                "--foreground": "0 0% 4%",
                "--card": "0 0% 100%",
                "--card-foreground": "0 0% 4%",
                "--border": "0 0% 90%",
                "--muted": "0 0% 96%",
                "--muted-foreground": "0 0% 45%"
            } as React.CSSProperties}
        >
            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/80 backdrop-blur-md border-b border-border">
                <span className="text-xl font-bold font-display tracking-tight">●C</span>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
                    <a href="#" className="hover:text-accent transition-colors">Work</a>
                    <a href="#" className="hover:text-accent transition-colors">About</a>
                    <a href="#" className="text-accent">Contact</a>
                </div>
                <Button variant="outline" size="sm" className="text-xs px-5">
                    Let's Talk <ArrowRight className="ml-1 w-3 h-3" />
                </Button>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
                <div className="absolute inset-0 bg-primary" />
                <div className="relative z-10 text-center max-w-5xl mx-auto">
                    <ScrollReveal delay={0.1}>
                        <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary-foreground/60 mb-6 border border-primary-foreground/20 px-4 py-2">
                            ( Say Hi )
                        </span>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <h1 className="text-5xl sm:text-7xl md:text-[8rem] leading-[0.85] font-display text-primary-foreground mb-8">
                            <span className="flex items-center justify-center gap-2 md:gap-4">
                                <motion.span
                                    initial={{ x: -200, opacity: 0, scale: 0.3 }}
                                    animate={{ x: 0, opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <ArrowRight className="w-8 h-8 md:w-16 md:h-16" />
                                </motion.span>
                                NO NEED
                                <MessageCircle className="w-8 h-8 md:w-16 md:h-16" />
                            </span>
                            <span className="flex items-center justify-center gap-2 md:gap-4">
                                TO BE
                                <motion.span
                                    className="inline-block w-14 h-14 md:w-24 md:h-24 rounded-sm bg-white"
                                    initial={{ scale: 0, rotate: -90, opacity: 0 }}
                                    animate={{ scale: 1, rotate: [0, 5, -5, 0], opacity: 1 }}
                                    transition={{ scale: { duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }, rotate: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.4 }, opacity: { duration: 0.4, delay: 0.8 } }}
                                />
                                SHY.
                            </span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <a
                            href="#contact-form"
                            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-primary-foreground/80 hover:text-highlight transition-colors border-b border-primary-foreground/30 pb-1"
                        >
                            <ArrowRight className="w-4 h-4" />
                            Talk to your Partner
                        </a>
                    </ScrollReveal>
                </div>

                {/* Footer bar in hero */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-primary-foreground/10">
                    <div className="grid grid-cols-2 md:grid-cols-4 text-xs text-primary-foreground/50 uppercase tracking-wider">
                        <div className="p-4 md:p-6 border-r border-primary-foreground/10">
                            <span className="block text-primary-foreground/30 mb-1">Eyes But</span>
                            <span>Forward & Ready For You</span>
                        </div>
                        <div className="p-4 md:p-6 border-r border-primary-foreground/10">
                            <span className="block text-primary-foreground/30 mb-1">Social</span>
                            <span className="flex gap-3">IG · TW · LI</span>
                        </div>
                        <div className="p-4 md:p-6 border-r border-primary-foreground/10 hidden md:block">
                            <span className="block text-primary-foreground/30 mb-1">Contacts</span>
                            <span>sssdhamaka@gmail.com</span>
                        </div>
                        <div className="p-4 md:p-6 hidden md:block">
                            <span className="block text-primary-foreground/30 mb-1">Location</span>
                            <span>West Bengal, India</span>
                        </div>
                    </div>
                    <div className="h-1 bg-primary-foreground/10">
                        <motion.div
                            className="h-full bg-highlight"
                            initial={{ width: "0%" }}
                            animate={{ width: "35%" }}
                            transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                        />
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact-form" className="py-24 md:py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                        {/* Left */}
                        <div>
                            <ScrollReveal>
                                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
                                    Get in touch
                                </span>
                                <h2 className="text-4xl md:text-6xl font-display leading-[0.9] mb-8">
                                    LET'S START
                                    <br />
                                    A PROJECT
                                    <br />
                                    <span className="text-accent">TOGETHER.</span>
                                </h2>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
                                    We're always looking for new challenges and exciting projects.
                                    Drop us a line and let's create something extraordinary.
                                </p>
                            </ScrollReveal>

                            <div className="space-y-6">
                                <ScrollReveal delay={0.3}>
                                    <a href="mailto:hello@studio.com" className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                                            <Mail className="w-5 h-5 group-hover:text-accent-foreground transition-colors" />
                                        </div>
                                        <div>
                                            <span className="text-xs uppercase tracking-widest text-muted-foreground block">Email</span>
                                            <span className="font-medium">hello@studio.com</span>
                                        </div>
                                    </a>
                                </ScrollReveal>

                                <ScrollReveal delay={0.4}>
                                    <a href="tel:+12072073072" className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                                            <Phone className="w-5 h-5 group-hover:text-accent-foreground transition-colors" />
                                        </div>
                                        <div>
                                            <span className="text-xs uppercase tracking-widest text-muted-foreground block">Phone</span>
                                            <span className="font-medium">6290359386</span>
                                        </div>
                                    </a>
                                </ScrollReveal>

                                <ScrollReveal delay={0.5}>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="text-xs uppercase tracking-widest text-muted-foreground block">Location</span>
                                            <span className="font-medium">West Bengal, India</span>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>

                        {/* Right - Form */}
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <ScrollReveal delay={0.1} direction="right">
                                    <label className="block">
                                        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                                            Your Name *
                                        </span>
                                        <Input
                                            className="bg-transparent border-0 border-b-2 border-foreground/20 rounded-none px-0 py-3 text-lg focus:border-accent placeholder:text-muted-foreground/40 transition-colors"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </label>
                                </ScrollReveal>

                                <ScrollReveal delay={0.2} direction="right">
                                    <label className="block">
                                        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                                            Email Address *
                                        </span>
                                        <Input
                                            type="email"
                                            className="bg-transparent border-0 border-b-2 border-foreground/20 rounded-none px-0 py-3 text-lg focus:border-accent placeholder:text-muted-foreground/40 transition-colors"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </label>
                                </ScrollReveal>

                                <ScrollReveal delay={0.3} direction="right">
                                    <label className="block">
                                        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                                            Subject
                                        </span>
                                        <Input
                                            className="bg-transparent border-0 border-b-2 border-foreground/20 rounded-none px-0 py-3 text-lg focus:border-accent placeholder:text-muted-foreground/40 transition-colors"
                                            placeholder="Project Inquiry"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        />
                                    </label>
                                </ScrollReveal>

                                <ScrollReveal delay={0.4} direction="right">
                                    <label className="block">
                                        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                                            Message *
                                        </span>
                                        <Textarea
                                            className="bg-transparent border-0 border-b-2 border-foreground/20 rounded-none px-0 py-3 text-lg focus:border-accent placeholder:text-muted-foreground/40 transition-colors min-h-[120px] resize-none"
                                            placeholder="Tell us about your project..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                        />
                                    </label>
                                </ScrollReveal>

                                <ScrollReveal delay={0.5} direction="right">
                                    <Button variant="default" size="lg" type="submit" className="w-full mt-8 h-14 text-base">
                                        Send Message <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </ScrollReveal>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="border-t border-border">
                <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-7xl font-display leading-[0.85] mb-6">
                            READY TO
                            <br />
                            <span className="text-accent">CREATE?</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-muted-foreground max-w-md mx-auto mb-10">
                            Every great project starts with a conversation. We'd love to hear yours.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={0.3}>
                        <Button variant="default" size="lg" className="h-14 px-10 text-base">
                            Start a Conversation <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </ScrollReveal>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border px-6 py-8">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-widest text-muted-foreground">
                    <span>© 2026 Studio. All Rights Reserved.</span>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
                        <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
                        <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-foreground transition-colors">Vimeo</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
