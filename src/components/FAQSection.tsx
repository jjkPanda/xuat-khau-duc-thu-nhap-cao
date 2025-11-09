import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Tôi cần chuẩn bị gì để đi xuất khẩu lao động Đức?",
    answer: "Bạn cần: (1) Độ tuổi từ 18-45 (tùy ngành nghề), (2) Sức khỏe tốt, không có tiền án tiền sự, (3) Có kỹ năng nghề hoặc bằng cấp liên quan, (4) Sẵn sàng học tiếng Đức A2-B1 (chúng tôi hỗ trợ đào tạo). Không yêu cầu tiếng Đức trước khi đăng ký, bạn sẽ được đào tạo trong quá trình chuẩn bị."
  },
  {
    question: "Chi phí tham gia chương trình là bao nhiêu?",
    answer: "Chi phí bao gồm: học phí tiếng Đức, hồ sơ visa, vé máy bay và các dịch vụ hỗ trợ. Tổng chi phí dao động từ 100-200 triệu VNĐ tùy ngành nghề và chương trình. Chúng tôi có chính sách hỗ trợ trả góp và miễn giảm một phần chi phí cho ứng viên xuất sắc. Chi phí được niêm yết rõ ràng trong hợp đồng, không phát sinh."
  },
  {
    question: "Mất bao lâu để có thể sang Đức làm việc?",
    answer: "Thời gian trung bình từ 6-18 tháng, tùy thuộc vào: (1) Trình độ tiếng Đức hiện tại của bạn (nếu đã có A2-B1 sẽ nhanh hơn), (2) Ngành nghề đăng ký (điều dưỡng cần B2, các ngành kỹ thuật cần A2-B1), (3) Thời gian xử lý visa của đại sứ quán. Chúng tôi hỗ trợ đẩy nhanh tiến độ nếu bạn đã có chứng chỉ và kinh nghiệm."
  },
  {
    question: "Tôi có được hỗ trợ khi mới sang Đức không?",
    answer: "Có! Chúng tôi có đội ngũ hỗ trợ tại Đức sẽ: (1) Đón bạn tại sân bay và đưa đến chỗ ở, (2) Hướng dẫn làm thủ tục hành chính, mở tài khoản ngân hàng, đăng ký bảo hiểm, (3) Định hướng công việc và cuộc sống, (4) Hỗ trợ giải quyết các vấn đề phát sinh trong thời gian đầu. Bạn không bao giờ bị bỏ rơi một mình."
  },
  {
    question: "Sau bao lâu tôi có thể xin định cư tại Đức?",
    answer: "Sau 5 năm làm việc hợp pháp, đóng thuế và bảo hiểm đầy đủ, đạt chứng chỉ tiếng Đức B1 và không có vi phạm pháp luật, bạn có thể nộp hồ sơ xin thẻ thường trú (Niederlassungserlaubnis). Sau 8 năm, bạn có thể xin quốc tịch Đức. Đức có chính sách nhập cư rất thân thiện với lao động kỹ năng."
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Giải đáp những thắc mắc phổ biến về chương trình xuất khẩu lao động Đức
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-border hover:border-primary/30 rounded-lg px-6 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="text-lg font-semibold text-card-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 bg-gradient-hero rounded-xl p-8 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-primary-foreground mb-3">
              Vẫn còn thắc mắc?
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Đội ngũ tư vấn viên chuyên nghiệp của chúng tôi sẵn sàng giải đáp mọi câu hỏi của bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+84123456789"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Gọi ngay: 0123 456 789
              </a>
              <a
                href="#registration-form"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                Đăng ký tư vấn miễn phí
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
