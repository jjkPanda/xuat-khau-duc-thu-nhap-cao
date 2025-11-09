import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-germany.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cơ hội việc làm tại Đức"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full mb-6 border border-accent/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-semibold">Tuyển dụng 2025 - Số lượng có hạn</span>
          </div>

          {/* Main Headline - PAS Formula */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Làm việc tại Đức
            <span className="block text-accent mt-2">Thu nhập 50-80 triệu/tháng</span>
          </h1>

          {/* PAS Subheadline */}
          <div className="space-y-4 mb-8 text-lg md:text-xl text-primary-foreground/95">
            <p className="font-semibold">
              <span className="text-accent">❌ Vấn đề:</span> Mức lương thấp tại Việt Nam không đủ để xây dựng tương lai cho gia đình?
            </p>
            <p className="font-semibold">
              <span className="text-accent">⚡ Hậu quả:</span> Bỏ lỡ cơ hội định cư, chậm tiến trong cuộc sống, thiếu an ninh tài chính.
            </p>
            <p className="font-semibold text-secondary-light">
              <span className="text-accent">✅ Giải pháp:</span> Xuất khẩu lao động Đức 2025 - Lương cao, phúc lợi châu Âu, cơ hội định cư vĩnh viễn!
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-background/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">€2,500+</div>
              <div className="text-sm text-primary-foreground/90">Mức lương khởi điểm</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-primary-foreground/90">Hỗ trợ pháp lý & visa</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">5 năm</div>
              <div className="text-sm text-primary-foreground/90">Đủ điều kiện định cư</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="xl" 
              variant="hero"
              onClick={scrollToForm}
              className="group"
            >
              Đăng ký tư vấn miễn phí
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="xl" 
              variant="outline"
              className="bg-background/20 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:+84123456789">
                <Phone className="h-5 w-5" />
                Gọi ngay: 0123 456 789
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Đã hỗ trợ 500+ lao động</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Đối tác uy tín tại Đức</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Tư vấn miễn phí 100%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
