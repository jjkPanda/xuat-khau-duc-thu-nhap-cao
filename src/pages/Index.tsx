import { Helmet } from "react-helmet";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import JobCategoriesSection from "@/components/JobCategoriesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Xuất khẩu lao động Đức 2025 - Lương 50-80 triệu/tháng | Định cư châu Âu</title>
        <meta 
          name="description" 
          content="Chương trình xuất khẩu lao động Đức 2025 uy tín. Thu nhập €2,500-4,000/tháng (50-80 triệu VNĐ). Phúc lợi châu Âu, cơ hội định cư sau 5 năm. Tuyển dụng điều dưỡng, cơ khí, xây dựng, nhà hàng. Tư vấn miễn phí 24/7." 
        />
        <meta name="keywords" content="xuất khẩu lao động Đức, đi Đức làm việc, tuyển dụng Đức 2025, lương cao Đức, định cư Đức, điều dưỡng Đức, cơ khí Đức, xây dựng Đức" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Xuất khẩu lao động Đức 2025 - Lương cao, định cư châu Âu" />
        <meta property="og:description" content="Thu nhập €2,500-4,000/tháng. Phúc lợi châu Âu đầy đủ. Cơ hội định cư vĩnh viễn sau 5 năm. Đăng ký tư vấn miễn phí ngay!" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://xkldduc2025.vn" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Xuất khẩu lao động Đức 2025 - Lương 50-80 triệu/tháng" />
        <meta name="twitter:description" content="Cơ hội việc làm lương cao tại Đức. Phúc lợi châu Âu, định cư sau 5 năm." />
        <meta name="twitter:image" content="/og-image.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://xkldduc2025.vn" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmploymentAgency",
            "name": "Xuất khẩu lao động Đức 2025",
            "description": "Dịch vụ tuyển dụng và hỗ trợ xuất khẩu lao động sang Đức",
            "url": "https://xkldduc2025.vn",
            "telephone": "+84123456789",
            "email": "info@xkldduc.vn",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Đường ABC",
              "addressLocality": "Quận 1",
              "addressRegion": "TP. Hồ Chí Minh",
              "addressCountry": "VN"
            },
            "areaServed": "VN",
            "serviceType": "Xuất khẩu lao động",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "500"
            }
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Tôi cần chuẩn bị gì để đi xuất khẩu lao động Đức?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bạn cần: (1) Độ tuổi từ 18-45, (2) Sức khỏe tốt, (3) Có kỹ năng nghề hoặc bằng cấp liên quan, (4) Sẵn sàng học tiếng Đức A2-B1."
                }
              },
              {
                "@type": "Question",
                "name": "Chi phí tham gia chương trình là bao nhiêu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tổng chi phí dao động từ 100-200 triệu VNĐ tùy ngành nghề, bao gồm học phí tiếng Đức, hồ sơ visa, vé máy bay và dịch vụ hỗ trợ. Có chính sách trả góp."
                }
              },
              {
                "@type": "Question",
                "name": "Mất bao lâu để có thể sang Đức làm việc?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Thời gian trung bình từ 6-18 tháng tùy trình độ tiếng Đức và ngành nghề đăng ký."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        <HeroSection />
        <BenefitsSection />
        <JobCategoriesSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        
        {/* Registration Form Section */}
        <section id="registration-form" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <RegistrationForm />
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Index;
