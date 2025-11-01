import HeaderNavigation from "@/components/sections/header-navigation";
import FooterSection from "@/components/sections/footer-section";
import { BackToTopButton } from "@/components/ui/back-to-top-button";

export default function PrivacyPolicyPage() {
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
              Privacy <span className="text-[#c9a05f]">Policy</span>
            </h1>
            <p className="font-['Open_Sans'] text-[#e8e4dc] text-lg">
              Last updated: January 2024
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 font-['Open_Sans'] text-[#4a5568] leading-relaxed">
                <div>
                  <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-2xl mb-4">Introduction</h2>
                  <p>
                    USA Plumbing Service ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-2xl mb-4">Information We Collect</h2>
                  <p className="mb-4">We may collect information about you in a variety of ways, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Personal Data:</strong> Name, email address, phone number, and mailing address when you contact us or request services.</li>
                    <li><strong>Service Information:</strong> Details about the plumbing services you request or receive.</li>
                    <li><strong>Usage Data:</strong> Information about how you access and use our website.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-2xl mb-4">How We Use Your Information</h2>
                  <p className="mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, operate, and maintain our services</li>
                    <li>Process your service requests and communicate with you</li>
                    <li>Send you updates, newsletters, and promotional materials</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-2xl mb-4">Information Sharing</h2>
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
                  </p>
                </div>

                <div>
                  <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-2xl mb-4">Data Security</h2>
                  <p>
                    We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-2xl mb-4">Your Rights</h2>
                  <p className="mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of receiving promotional communications</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-2xl mb-4">Cookies</h2>
                  <p>
                    Our website may use "cookies" to enhance your experience. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent.
                  </p>
                </div>

                <div>
                  <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-2xl mb-4">Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-2xl mb-4">Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy, please contact us at:
                  </p>
                  <p className="mt-4">
                    <strong>USA Plumbing Service</strong><br />
                    Phone: <a href="tel:909-623-0033" className="text-[#c9a05f] hover:text-[#b8860b]">909-623-0033</a><br />
                    Email: <a href="mailto:contact@usaplumbingservice.com" className="text-[#c9a05f] hover:text-[#b8860b]">contact@usaplumbingservice.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterSection />
      <BackToTopButton />
    </div>
  );
}
