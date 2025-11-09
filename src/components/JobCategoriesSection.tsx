import { Stethoscope, Wrench, HardHat, UtensilsCrossed, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const jobCategories = [
  {
    icon: Stethoscope,
    title: "Điều dưỡng & Chăm sóc sức khỏe",
    description: "Nhu cầu cao nhất tại Đức. Làm việc tại bệnh viện, viện dưỡng lão.",
    salary: "€2,800 - €3,800/tháng",
    requirements: "Bằng điều dưỡng, sẵn sàng học tiếng Đức B2",
    color: "bg-secondary/10 hover:bg-secondary/20",
  },
  {
    icon: Wrench,
    title: "Cơ khí & Kỹ thuật",
    description: "Thợ cơ khí, hàn, điện công nghiệp, bảo trì máy móc.",
    salary: "€2,500 - €3,500/tháng",
    requirements: "Có kinh nghiệm nghề, chứng chỉ kỹ năng là lợi thế",
    color: "bg-primary/10 hover:bg-primary/20",
  },
  {
    icon: HardHat,
    title: "Xây dựng & Kiến trúc",
    description: "Thợ xây, thợ điện, thợ sơn, lắp đặt hệ thống.",
    salary: "€2,400 - €3,200/tháng",
    requirements: "Kinh nghiệm 2+ năm, sức khỏe tốt",
    color: "bg-accent/10 hover:bg-accent/20",
  },
  {
    icon: UtensilsCrossed,
    title: "Nhà hàng & Khách sạn",
    description: "Đầu bếp, phục vụ, quản lý nhà hàng, khách sạn.",
    salary: "€2,300 - €3,000/tháng",
    requirements: "Có kinh nghiệm dịch vụ, tiếng Đức A2-B1",
    color: "bg-secondary-light/10 hover:bg-secondary-light/20",
  },
  {
    icon: Briefcase,
    title: "Ngành nghề khác",
    description: "Nông nghiệp, logistics, IT, quản lý và nhiều ngành khác.",
    salary: "€2,500 - €4,000/tháng",
    requirements: "Tùy theo vị trí, liên hệ để được tư vấn chi tiết",
    color: "bg-muted hover:bg-muted/80",
  },
];

const JobCategoriesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ngành nghề đang tuyển dụng
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Đức có nhu cầu lớn về lao động trong nhiều lĩnh vực khác nhau
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {jobCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className={`group transition-all duration-300 hover:shadow-xl border-2 hover:border-primary/30 ${category.color} animate-scale-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-3">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-card rounded-lg p-3 border border-border">
                    <div className="text-xs text-muted-foreground mb-1">Mức lương</div>
                    <div className="text-lg font-bold text-accent">{category.salary}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Yêu cầu</div>
                    <div className="text-sm text-foreground">{category.requirements}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Không thấy ngành nghề phù hợp? Liên hệ với chúng tôi để được tư vấn chi tiết
          </p>
        </div>
      </div>
    </section>
  );
};

export default JobCategoriesSection;
