import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">
              Xuất khẩu lao động Đức 2025
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Đối tác tin cậy trong việc kết nối lao động Việt Nam với cơ hội nghề nghiệp tại Đức. 
              Chúng tôi cam kết mang đến dịch vụ chất lượng và hỗ trợ tận tâm.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Liên hệ</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Số 79 Hồ Tùng Mậu, phường Mai Dịch, quận Cầu Giấy, Hà Nội
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+84123456789"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +84 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@xkldduc.vn"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  info@xkldduc.vn
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Giờ làm việc</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Thứ 2 - Thứ 6: 8:00 - 18:00</p>
              <p>Thứ 7: 8:00 - 12:00</p>
              <p>Chủ nhật: Nghỉ</p>
              <p className="mt-4 text-accent font-semibold">
                Hotline 24/7: 0123 456 789
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Xuất khẩu lao động Đức. Bản quyền thuộc về công ty.
          </p>
          <p className="text-primary-foreground/60 text-xs mt-2">
            Giấy phép hoạt động dịch vụ: ABC123 - Bộ Lao động, Thương binh và Xã hội
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
