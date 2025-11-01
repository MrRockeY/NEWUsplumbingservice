import HeaderNavigation from "@/components/sections/header-navigation";
import FooterSection from "@/components/sections/footer-section";
import ContactFormSection from "@/components/sections/contact-form-section";
import { BackToTopButton } from "@/components/ui/back-to-top-button";
import { Star, Quote } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Rancho Cucamonga, CA",
      rating: 5,
      text: "USA Plumbing Service came out the same day I called for an emergency. The technician was professional, explained everything clearly, and fixed our burst pipe quickly. Highly recommend!",
      service: "Emergency Pipe Repair"
    },
    {
      name: "Michael Chen",
      location: "Ontario, CA",
      rating: 5,
      text: "I've used USA Plumbing for several projects over the years. They installed a new water heater and repaired our kitchen sink. Always professional, fair pricing, and excellent work.",
      service: "Water Heater Installation"
    },
    {
      name: "Jennifer Martinez",
      location: "Upland, CA",
      rating: 5,
      text: "Best plumbing company I've worked with! They diagnosed and fixed a slab leak that other companies couldn't find. Saved us thousands in potential damage. Thank you!",
      service: "Slab Leak Detection"
    },
    {
      name: "David Thompson",
      location: "Fontana, CA",
      rating: 5,
      text: "Called USA Plumbing at 2 AM for a flooded bathroom. They arrived within an hour and resolved the issue. Professional, courteous, and reasonably priced for emergency service.",
      service: "Emergency Service"
    },
    {
      name: "Lisa Anderson",
      location: "Chino, CA",
      rating: 5,
      text: "We had a persistent drain clog that kept coming back. USA Plumbing used a camera to find the root cause and fixed it permanently. Haven't had any issues since!",
      service: "Drain Cleaning"
    },
    {
      name: "Robert Williams",
      location: "Rancho Cucamonga, CA",
      rating: 5,
      text: "Family-owned business that truly cares about their customers. Fair pricing, no hidden fees, and they stand behind their work. Will definitely use them again.",
      service: "General Plumbing"
    },
    {
      name: "Amanda Garcia",
      location: "Pomona, CA",
      rating: 5,
      text: "Needed a complete bathroom remodel. USA Plumbing handled all the plumbing work flawlessly. On time, on budget, and beautiful results. Couldn't be happier!",
      service: "Bathroom Remodel"
    },
    {
      name: "James Miller",
      location: "Claremont, CA",
      rating: 5,
      text: "Our water heater stopped working on a weekend. USA Plumbing came out promptly, diagnosed the issue, and had us back up and running the same day. Excellent service!",
      service: "Water Heater Repair"
    },
    {
      name: "Patricia Brown",
      location: "San Bernardino, CA",
      rating: 5,
      text: "Very impressed with the professionalism and quality of work. They replaced our garbage disposal and fixed a leaky faucet. Clean, efficient, and reasonably priced.",
      service: "Fixture Installation"
    }
  ];

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
              Customer <span className="text-[#c9a05f]">Testimonials</span>
            </h1>
            <p className="font-['Open_Sans'] text-[#e8e4dc] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Read what our satisfied customers have to say about our plumbing services.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-[#c9a05f] mb-2">25+</div>
                <div className="text-[#4a5568] font-['Open_Sans']">Years in Business</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#c9a05f] mb-2">5000+</div>
                <div className="text-[#4a5568] font-['Open_Sans']">Happy Customers</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#c9a05f] mb-2">98%</div>
                <div className="text-[#4a5568] font-['Open_Sans']">Satisfaction Rate</div>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-[#c9a05f] text-[#c9a05f]" />
                  ))}
                </div>
                <div className="text-[#4a5568] font-['Open_Sans']">5-Star Reviews</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 md:py-24 bg-[#f5f1e8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#c9a05f] text-[#c9a05f]" />
                      ))}
                    </div>
                    <Quote className="w-10 h-10 text-[#c9a05f] opacity-20" />
                  </div>
                  <p className="font-['Open_Sans'] text-[#4a5568] mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-[#e8e4dc] pt-4">
                    <p className="font-['Montserrat'] font-bold text-[#1a2332] mb-1">
                      {testimonial.name}
                    </p>
                    <p className="font-['Open_Sans'] text-sm text-[#6b7280] mb-2">
                      {testimonial.location}
                    </p>
                    <p className="font-['Open_Sans'] text-xs text-[#c9a05f] font-semibold">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-3xl md:text-4xl mb-4">
                Ready to Join Our Satisfied Customers?
              </h2>
              <p className="font-['Open_Sans'] text-[#4a5568] text-lg max-w-2xl mx-auto">
                Contact us today and experience the same excellent service our customers rave about.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <ContactFormSection />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#1a2332] to-[#2c3e50]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-['Montserrat'] font-bold text-white text-3xl md:text-4xl mb-6">
              Experience the Difference
            </h2>
            <p className="font-['Open_Sans'] text-[#e8e4dc] text-lg mb-8 leading-relaxed">
              Join thousands of satisfied customers who trust USA Plumbing Service for all their plumbing needs.
            </p>
            <a
              href="tel:909-623-0033"
              className="inline-flex items-center justify-center gap-3 bg-[#c9a05f] text-[#1a2332] font-['Montserrat'] font-bold text-lg px-10 py-5 rounded-lg hover:bg-[#b8860b] transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Call: 909-623-0033
            </a>
          </div>
        </section>
      </main>
      
      <FooterSection />
      <BackToTopButton />
    </div>
  );
}