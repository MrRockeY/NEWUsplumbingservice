import HeaderNavigation from "@/components/sections/header-navigation";
import FooterSection from "@/components/sections/footer-section";
import ContactFormSection from "@/components/sections/contact-form-section";
import { BackToTopButton } from "@/components/ui/back-to-top-button";
import Image from "next/image";
import { Shield, Award, Users, Clock, CheckCircle } from "lucide-react";

export default function AboutPage() {
  const values = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "CA License #961844 - Fully bonded and insured for your protection and peace of mind."
  },
  {
    icon: Award,
    title: "25+ Years Experience",
    description: "Over two decades of expert plumbing service in the Rancho Cucamonga area."
  },
  {
    icon: Users,
    title: "Family Owned",
    description: "A trusted family business treating every customer like part of our family since 1998."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Emergency services available around the clock when you need us most."
  }];


  const reasons = [
  "Honest, upfront pricing with no hidden fees",
  "Experienced, professional technicians",
  "Latest tools and technology",
  "Satisfaction guaranteed on all work",
  "Same-day service available",
  "Residential and commercial services",
  "Emergency services 24/7",
  "Family owned and operated"];


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
              About <span className="text-[#c9a05f]">USA Plumbing Service</span>
            </h1>
            <p className="font-['Open_Sans'] text-[#e8e4dc] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Your trusted family-owned plumbing service for over 25 years, delivering excellence and reliability to Rancho Cucamonga and surrounding areas.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-3xl md:text-4xl mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-[#4a5568] font-['Open_Sans'] leading-relaxed">
                  <p>
                    USA Plumbing Service has been serving the Rancho Cucamonga community since 1998. What started as a small family operation has grown into one of the most trusted plumbing companies in Southern California.
                  </p>
                  <p>
                    With over 25 years of experience, our team has handled everything from simple faucet repairs to complex commercial plumbing installations. We pride ourselves on delivering high-quality workmanship, honest pricing, and exceptional customer service on every job.
                  </p>
                  <p>
                    As a family-owned and operated business, we understand the importance of trust and reliability. That's why we treat every customer's home or business as if it were our own, ensuring the highest standards of professionalism and care.
                  </p>
                  <p>
                    Our commitment to excellence has earned us a reputation as the go-to plumbing service in the area, with countless satisfied customers who continue to trust us for all their plumbing needs.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/usa-plumbing-truck-3.jpg"
                  alt="USA Plumbing Service Truck"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl w-full h-auto" />

                <div className="absolute -bottom-6 -right-6 bg-[#c9a05f] text-[#1a2332] p-8 rounded-xl shadow-xl hidden md:block">
                  <p className="font-['Montserrat'] font-bold text-4xl mb-2">25+</p>
                  <p className="font-['Open_Sans'] text-sm">Years of Service</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-[#f5f1e8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-3xl md:text-4xl mb-4">
                Why Choose Us
              </h2>
              <p className="font-['Open_Sans'] text-[#4a5568] text-lg max-w-2xl mx-auto">
                We're committed to providing the highest quality plumbing services with integrity and professionalism.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) =>
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-[#c9a05f]/20 rounded-full flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-[#c9a05f]" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-[#1a2332] text-xl mb-3">
                    {value.title}
                  </h3>
                  <p className="font-['Open_Sans'] text-[#4a5568] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Why Choose Us List */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-3xl md:text-4xl mb-6">
                  What Sets Us Apart
                </h2>
                <p className="font-['Open_Sans'] text-[#4a5568] text-lg leading-relaxed mb-8">
                  At USA Plumbing Service, we're dedicated to providing the best plumbing services in Southern California. Here's what makes us different:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {reasons.map((reason, index) =>
                  <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#c9a05f] flex-shrink-0 mt-0.5" />
                      <p className="font-['Open_Sans'] text-[#2d3748]">{reason}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#1a2332] to-[#2c3e50] rounded-2xl p-8 md:p-12 text-white">
                <h3 className="font-['Montserrat'] font-bold text-2xl md:text-3xl mb-6 md:!text-white">
                  Ready to Experience the Difference?
                </h3>
                <p className="font-['Open_Sans'] text-[#e8e4dc] mb-8 leading-relaxed">
                  Contact us today for reliable, professional plumbing services. Available 24/7 for emergencies.
                </p>
                <a
                  href="tel:909-623-0033"
                  className="inline-flex items-center justify-center gap-3 bg-[#c9a05f] text-[#1a2332] font-['Montserrat'] font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#b8860b] transition-all duration-300 hover:scale-105 shadow-xl">

                  Call: 909-623-0033
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#f5f1e8] to-[#faf8f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-3xl md:text-4xl mb-4">
                Get in Touch With Us
              </h2>
              <p className="font-['Open_Sans'] text-[#4a5568] text-lg max-w-2xl mx-auto">
                Ready to experience our exceptional service? Contact us today!
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <ContactFormSection />
            </div>
          </div>
        </section>
      </main>
      
      <FooterSection />
      <BackToTopButton />
    </div>
  );
}