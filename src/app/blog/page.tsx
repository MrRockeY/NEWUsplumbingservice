import HeaderNavigation from "@/components/sections/header-navigation";
import FooterSection from "@/components/sections/footer-section";
import { BackToTopButton } from "@/components/ui/back-to-top-button";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
  {
    title: "10 Signs You Need Emergency Plumbing Service",
    excerpt: "Learn to recognize the warning signs that require immediate professional plumbing attention to prevent costly damage.",
    date: "January 15, 2024",
    author: "USA Plumbing Team",
    category: "Emergency Plumbing",
    image: "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=800&h=500&fit=crop"
  },
  {
    title: "How to Maintain Your Water Heater for Longevity",
    excerpt: "Regular maintenance tips to extend the life of your water heater and improve its efficiency.",
    date: "January 10, 2024",
    author: "USA Plumbing Team",
    category: "Maintenance Tips",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&h=500&fit=crop"
  },
  {
    title: "Understanding Slab Leaks: Causes and Solutions",
    excerpt: "Everything you need to know about detecting and repairing slab leaks before they damage your foundation.",
    date: "January 5, 2024",
    author: "USA Plumbing Team",
    category: "Leak Detection",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop"
  },
  {
    title: "The Benefits of Upgrading to a Tankless Water Heater",
    excerpt: "Discover why more homeowners are making the switch to tankless water heaters for energy savings.",
    date: "December 28, 2023",
    author: "USA Plumbing Team",
    category: "Water Heaters",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=500&fit=crop"
  },
  {
    title: "Preventing Frozen Pipes in Winter",
    excerpt: "Essential tips to protect your plumbing system during cold weather and avoid costly pipe bursts.",
    date: "December 20, 2023",
    author: "USA Plumbing Team",
    category: "Seasonal Tips",
    image: "https://images.unsplash.com/photo-1612838320302-4b3b3f6e5161?w=800&h=500&fit=crop"
  },
  {
    title: "When to Replace vs. Repair Your Plumbing Fixtures",
    excerpt: "A comprehensive guide to help you decide whether to repair or replace your plumbing fixtures.",
    date: "December 15, 2023",
    author: "USA Plumbing Team",
    category: "Homeowner Tips",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=500&fit=crop"
  }];


  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      <HeaderNavigation />
      
      <main className="flex-1 pt-[80px] lg:pt-[90px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#1a2332] to-[#2c3e50] py-20 md:py-28">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #c9a05f 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-['Montserrat'] font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-6">
              Plumbing <span className="text-[#c9a05f]">Blog</span>
            </h1>
            <p className="font-['Open_Sans'] text-[#e8e4dc] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Expert tips, advice, and insights from our professional plumbing team.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) =>
              <article key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#e8e4dc]">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a2332]/50 z-10"></div>
                    <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                    <div className="absolute top-4 right-4 z-20 bg-[#c9a05f] text-[#1a2332] px-3 py-1 rounded-full text-xs font-['Montserrat'] font-semibold">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-[#6b7280] mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-['Open_Sans']">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span className="font-['Open_Sans']">{post.author}</span>
                      </div>
                    </div>
                    <h3 className="font-['Montserrat'] font-bold text-[#1a2332] text-xl mb-3 group-hover:text-[#c9a05f] transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-['Open_Sans'] text-[#4a5568] mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <button className="inline-flex items-center gap-2 text-[#c9a05f] hover:text-[#b8860b] font-['Montserrat'] font-semibold text-sm transition-all group-hover:gap-4">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#1a2332] to-[#2c3e50]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-['Montserrat'] font-bold text-white text-3xl md:text-4xl mb-6">
              Stay Updated
            </h2>
            <p className="font-['Open_Sans'] text-[#e8e4dc] text-lg mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest plumbing tips, maintenance advice, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg border-2 border-transparent focus:border-[#c9a05f] focus:outline-none font-['Open_Sans'] !text-black !bg-white" />

              <button className="bg-[#c9a05f] text-[#1a2332] font-['Montserrat'] font-bold px-8 py-4 rounded-lg hover:bg-[#b8860b] transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <FooterSection />
      <BackToTopButton />
    </div>);

}