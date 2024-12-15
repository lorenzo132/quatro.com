import { useEffect } from "react";
import { motion } from "framer-motion";
import { Cannabis, Leaf, Mail, Youtube, Instagram, Twitter, MessageSquare, ShoppingBag } from "lucide-react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/80 via-orange-50/60 to-orange-100/50 backdrop-blur-sm" />
        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Cannabis className="w-6 h-6 text-purple-600" />
              <span className="inline-block px-4 py-1 text-sm text-purple-700 bg-purple-100/80 backdrop-blur-sm rounded-full">
                Wellness & Lifestyle Creator
              </span>
              <Cannabis className="w-6 h-6 text-purple-600" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-purple-800 drop-shadow-lg">StephanieQuatro</h1>
            <p className="text-xl text-purple-700 mb-12">Elevating consciousness through natural wellness and mindful living.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative w-64 h-64 mx-auto mt-8"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-200 to-orange-200 animate-pulse" />
            <img
              src="/lovable-uploads/e5a126df-0867-4774-92b4-c1a9f4926664.png"
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50/80 via-yellow-50/80 to-yellow-50/80 backdrop-blur-sm">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Leaf className="w-5 h-5 text-orange-600" />
              <span className="inline-block px-4 py-1 text-sm text-orange-700 bg-orange-100/80 backdrop-blur-sm rounded-full">
                My Journey
              </span>
              <Leaf className="w-5 h-5 text-orange-600" />
            </div>
            <h2 className="text-4xl font-bold mb-8 text-orange-800">Growing Together</h2>
            <p className="text-lg text-orange-700 leading-relaxed mb-8">
              Hey there! I'm Stephanie, your guide to elevated living and natural wellness. Through my content, I explore the intersection of mindfulness, holistic health, and conscious living. My journey began in 2019, and since then, I've built a community of like-minded individuals seeking authenticity and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Highlights */}
      <section className="py-20 bg-gradient-to-b from-yellow-50/90 via-purple-50/90 to-purple-50/90">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 mb-6 text-sm text-yellow-700 bg-yellow-100/80 backdrop-blur-sm rounded-full">
              Content
            </span>
            <h2 className="text-4xl font-bold text-yellow-800">What I Create</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-purple-200/50"
              >
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-purple-800">{card.title}</h3>
                <p className="text-purple-700">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50/90 via-yellow-50/90 to-yellow-50/90">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <span className="inline-block px-4 py-1 mb-6 text-sm text-purple-700 bg-purple-100/80 backdrop-blur-sm rounded-full">
              Connect & Follow
            </span>
            <h2 className="text-4xl font-bold mb-8 text-purple-800">Join the Community</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
              <a
                href="https://www.youtube.com/@StephanieQuatro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-purple-100/80 hover:bg-purple-200/80 text-purple-700 rounded-xl backdrop-blur-sm transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube</span>
              </a>
              <a
                href="https://www.instagram.com/stephaniequatro/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-purple-100/80 hover:bg-purple-200/80 text-purple-700 rounded-xl backdrop-blur-sm transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://twitter.com/QuatroStephanie?s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-purple-100/80 hover:bg-purple-200/80 text-purple-700 rounded-xl backdrop-blur-sm transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span>Twitter</span>
              </a>
              <a
                href="https://discord.gg/24TBFBfH3X"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-purple-100/80 hover:bg-purple-200/80 text-purple-700 rounded-xl backdrop-blur-sm transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Discord</span>
              </a>
              <a
                href="https://www.tiktok.com/@stephaniequatro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-purple-100/80 hover:bg-purple-200/80 text-purple-700 rounded-xl backdrop-blur-sm transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
                <span>TikTok</span>
              </a>
              <a
                href="https://streamlabs.com/stephaniewerneriquadros/merch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-purple-100/80 hover:bg-purple-200/80 text-purple-700 rounded-xl backdrop-blur-sm transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Merch</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-yellow-50/80 via-purple-50/80 to-orange-100/80">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <span className="inline-block px-4 py-1 mb-6 text-sm text-purple-700 bg-purple-100/80 backdrop-blur-sm rounded-full">
              Connect
            </span>
            <h2 className="text-4xl font-bold mb-8 text-purple-800">Let's Collaborate</h2>
            <p className="text-lg text-purple-700 mb-12">
              Ready to elevate together? Let's create something amazing.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href="mailto:stephaniequatro4@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-purple-100/80 hover:bg-purple-200/80 text-purple-700 rounded-full transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Business Inquiries</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const contentCards = [
  {
    icon: "🌿",
    title: "Mindful Sessions",
    description: "Weekly live streams exploring wellness, meditation, and conscious living.",
  },
  {
    icon: "✨",
    title: "Lifestyle Content",
    description: "Daily insights and inspiration for natural living and personal growth.",
  },
  {
    icon: "🎙️",
    title: "Elevated Talks",
    description: "Deep conversations about wellness, featuring inspiring guests and thoughtful discussions.",
  },
];

export default Index;
