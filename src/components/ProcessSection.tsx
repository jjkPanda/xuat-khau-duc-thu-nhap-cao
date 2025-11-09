import { FileText, Users, GraduationCap, Video, Plane, ArrowDown } from "lucide-react";

const processSteps = [
  {
    icon: FileText,
    number: "01",
    title: "Đăng ký & Tư vấn",
    description: "Điền form đăng ký trên website. Chuyên viên tư vấn sẽ liên hệ trong vòng 24h để tư vấn chi tiết về chương trình, chi phí và lộ trình phù hợp với bạn.",
    duration: "1-2 ngày",
    highlights: ["Tư vấn miễn phí 100%", "Đánh giá hồ sơ ban đầu"],
  },
  {
    icon: Users,
    number: "02",
    title: "Chọn đơn hàng & Ký hợp đồng",
    description: "Dựa trên kỹ năng, kinh nghiệm và nguyện vọng của bạn, chúng tôi giới thiệu các đơn hàng phù hợp từ doanh nghiệp Đức. Ký hợp đồng với chi phí minh bạch.",
    duration: "1-2 tuần",
    highlights: ["Nhiều đơn hàng lựa chọn", "Hợp đồng rõ ràng"],
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Đào tạo & Chuẩn bị hồ sơ",
    description: "Học tiếng Đức A2-B1 với giáo trình chuẩn châu Âu. Đào tạo kỹ năng nghề nghiệp và văn hóa Đức. Chuẩn bị đầy đủ hồ sơ visa theo quy định.",
    duration: "4-12 tháng",
    highlights: ["Đào tạo tiếng Đức chất lượng", "Hỗ trợ làm hồ sơ"],
  },
  {
    icon: Video,
    number: "04",
    title: "Phỏng vấn & Nhận offer",
    description: "Phỏng vấn trực tuyến hoặc trực tiếp với nhà tuyển dụng Đức. Chúng tôi hỗ trợ chuẩn bị kỹ lưỡng và đồng hành trong buổi phỏng vấn.",
    duration: "1-4 tuần",
    highlights: ["Luyện phỏng vấn kỹ càng", "Tỷ lệ đậu cao"],
  },
  {
    icon: Plane,
    number: "05",
    title: "Xin visa & Bay sang Đức",
    description: "Hoàn tất thủ tục visa lao động tại Đại sứ quán. Booking vé máy bay, đón tiếp tại sân bay Đức và hỗ trợ định hướng ban đầu.",
    duration: "2-4 tháng",
    highlights: ["Hỗ trợ 100% thủ tục visa", "Đón tiếp tại Đức"],
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Quy trình tham gia
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            5 bước đơn giản, minh bạch để bắt đầu hành trình làm việc tại Đức
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="hidden md:block absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>

            {processSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div
                  key={index}
                  className="relative mb-16 last:mb-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-6 md:gap-8">
                    {/* Step Number & Icon */}
                    <div className="relative flex-shrink-0 z-10">
                      {/* Number Badge */}
                      <div className="w-24 h-24 rounded-2xl bg-gradient-hero flex flex-col items-center justify-center shadow-xl border-4 border-background">
                        <Icon className="h-8 w-8 text-primary-foreground mb-1" />
                        <span className="text-sm font-bold text-primary-foreground">
                          Bước {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-card rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-border hover:border-primary/30 group">
                      {/* Title & Duration */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full whitespace-nowrap border border-accent/20">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {step.duration}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-4 text-base">
                        {step.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {step.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary bg-secondary/10 px-3 py-1.5 rounded-full border border-secondary/20"
                          >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Arrow Connector (except last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:flex justify-center my-6 ml-12">
                      <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Summary Box */}
        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-10 shadow-2xl max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full mb-4">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold">Tổng thời gian dự kiến</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-3">
            6 - 18 tháng
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-6">
            Từ khi đăng ký đến khi xuất cảnh sang Đức
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-primary-foreground/80">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Có thể nhanh hơn nếu đã có tiếng Đức
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Quy trình minh bạch, dễ theo dõi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
