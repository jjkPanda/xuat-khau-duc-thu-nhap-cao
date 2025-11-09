import { TrendingUp, Heart, Home, Shield } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Thu nhập cao & ổn định",
    description: "Mức lương từ €2,500 - €4,000/tháng (50-80 triệu VNĐ). Tăng lương định kỳ, thưởng theo năng suất.",
    highlight: "€2,500+/tháng",
  },
  {
    icon: Heart,
    title: "Phúc lợi châu Âu đầy đủ",
    description: "Bảo hiểm y tế, thất nghiệp, hưu trí. Nghỉ phép có lương 24-30 ngày/năm. Môi trường làm việc an toàn.",
    highlight: "30 ngày nghỉ phép",
  },
  {
    icon: Home,
    title: "Cơ hội định cư vĩnh viễn",
    description: "Sau 5 năm làm việc và đạt yêu cầu tiếng Đức B1, bạn có thể xin thường trú và quốc tịch Đức.",
    highlight: "Định cư sau 5 năm",
  },
  {
    icon: Shield,
    title: "Hỗ trợ toàn diện & minh bạch",
    description: "Đào tạo tiếng Đức miễn phí, hỗ trợ làm visa, đón tiếp tại Đức. Chi phí rõ ràng, không phát sinh.",
    highlight: "100% hỗ trợ",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tại sao chọn xuất khẩu lao động Đức?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Đức là nền kinh tế lớn nhất châu Âu với nhu cầu lao động kỹ năng cao và chính sách nhập cư thân thiện
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="text-2xl font-bold text-accent mb-1">{benefit.highlight}</div>
                  <h3 className="text-xl font-bold text-card-foreground">{benefit.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Trust Section */}
        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Cam kết của chúng tôi
          </h3>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-6">
            Chúng tôi làm việc với các đối tác uy tín tại Đức, đảm bảo quy trình minh bạch, 
            hợp pháp 100% và hỗ trợ tận tâm từ khâu đào tạo đến khi bạn ổn định cuộc sống tại Đức.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-primary-foreground">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-1">10+</div>
              <div className="text-sm opacity-90">Năm kinh nghiệm</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-1">500+</div>
              <div className="text-sm opacity-90">Lao động thành công</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-1">95%</div>
              <div className="text-sm opacity-90">Tỷ lệ đậu visa</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm opacity-90">Hỗ trợ tư vấn</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
