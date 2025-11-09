import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import testimonial1 from "@/assets/success-story-1.jpg";
import testimonial2 from "@/assets/success-story-2.jpg";
import testimonial3 from "@/assets/success-story-3.jpg";

const testimonials = [
  {
    name: "Nguyễn Thị Mai",
    age: 28,
    profession: "Điều dưỡng viên",
    location: "Berlin, Đức",
    image: testimonial1,
    quote: "Từ khi sang Đức làm điều dưỡng, cuộc sống gia đình tôi thay đổi hoàn toàn. Lương tháng €3,200, được hưởng đầy đủ bảo hiểm và 28 ngày nghỉ phép. Môi trường làm việc chuyên nghiệp, được đồng nghiệp tôn trọng. Tôi đã mua được căn hộ và đang chuẩn bị xin định cư vĩnh viễn.",
    rating: 5,
    duration: "3 năm tại Đức",
  },
  {
    name: "Trần Văn Hùng",
    age: 32,
    profession: "Thợ cơ khí",
    location: "Munich, Đức",
    image: testimonial2,
    quote: "Lúc đầu tôi lo lắng về việc học tiếng Đức và thích nghi với văn hóa mới. Nhưng công ty đã hỗ trợ tận tình từ khâu đào tạo đến khi sang Đức. Bây giờ tôi làm thợ cơ khí với thu nhập €2,900/tháng, gửi tiền về cho gia đình và vẫn tiết kiệm được. Công ty rất coi trọng kỹ năng và sự chuyên nghiệp.",
    rating: 5,
    duration: "2 năm tại Đức",
  },
  {
    name: "Phạm Thị Lan",
    age: 26,
    profession: "Nhân viên khách sạn",
    location: "Frankfurt, Đức",
    image: testimonial3,
    quote: "Chương trình xuất khẩu lao động Đức đã mở ra cánh cửa mới cho tôi. Từ nhân viên lễ tân khách sạn ở Việt Nam với lương 8 triệu, giờ tôi làm tại khách sạn 5 sao ở Frankfurt với thu nhập €2,600/tháng. Được học thêm nhiều kỹ năng mới và có cơ hội thăng tiến rõ ràng. Cảm ơn đội ngũ tư vấn đã giúp tôi thực hiện ước mơ!",
    rating: 5,
    duration: "1.5 năm tại Đức",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Câu chuyện thành công
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hàng trăm lao động Việt Nam đã thay đổi cuộc đời nhờ chương trình xuất khẩu lao động Đức
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 bg-gradient-card animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-10 w-10 text-primary/20 group-hover:text-primary/40 transition-colors" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-foreground">{testimonial.name}, {testimonial.age} tuổi</div>
                    <div className="text-sm text-primary font-semibold">{testimonial.profession}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                    <div className="text-xs text-accent mt-1">{testimonial.duration}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Hài lòng với chương trình</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-4xl font-bold text-secondary mb-2">4.8/5</div>
            <div className="text-sm text-muted-foreground">Đánh giá trung bình</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Lao động thành công</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Tỷ lệ đậu visa</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
