import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Send } from "lucide-react";

const formSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Họ tên phải có ít nhất 2 ký tự" })
    .max(100, { message: "Họ tên không được quá 100 ký tự" }),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9]{10,11}$/, { message: "Số điện thoại không hợp lệ (10-11 số)" }),
  birthYear: z
    .string()
    .regex(/^(19|20)\d{2}$/, { message: "Năm sinh không hợp lệ" })
    .refine((year) => {
      const currentYear = new Date().getFullYear();
      const age = currentYear - parseInt(year);
      return age >= 18 && age <= 50;
    }, { message: "Tuổi phải từ 18-50" }),
  profession: z.string().min(1, { message: "Vui lòng chọn ngành nghề" }),
});

type FormData = z.infer<typeof formSchema>;

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      birthYear: "",
      profession: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", data);
      
      setIsSuccess(true);
      form.reset();
      
      toast({
        title: "Đăng ký thành công!",
        description: "Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.",
      });
    } catch (error) {
      toast({
        title: "Có lỗi xảy ra",
        description: "Vui lòng thử lại sau.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-card rounded-xl p-8 shadow-xl border-2 border-secondary animate-scale-in text-center">
        <div className="mb-6">
          <CheckCircle2 className="h-20 w-20 text-secondary mx-auto" />
        </div>
        <h3 className="text-3xl font-bold text-foreground mb-4">
          Cảm ơn bạn đã đăng ký!
        </h3>
        <p className="text-lg text-muted-foreground mb-6">
          Chúng tôi đã nhận được thông tin của bạn. Đội ngũ tư vấn sẽ liên hệ trong vòng 24 giờ để tư vấn chi tiết về chương trình phù hợp nhất.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
        >
          Đăng ký thêm người khác
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-8 shadow-xl border-2 border-border hover:border-primary/30 transition-all duration-300">
      <div className="mb-6 text-center">
        <h3 className="text-3xl font-bold text-foreground mb-2">
          Đăng ký tư vấn miễn phí
        </h3>
        <p className="text-muted-foreground">
          Điền thông tin bên dưới để được tư vấn chi tiết về chương trình
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-semibold">
                  Họ và tên <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nguyễn Văn A"
                    {...field}
                    className="h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-semibold">
                  Số điện thoại <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="0912345678"
                    {...field}
                    className="h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="birthYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-semibold">
                  Năm sinh <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="1995"
                    {...field}
                    className="h-12"
                    maxLength={4}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="profession"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-semibold">
                  Ngành nghề mong muốn <span className="text-destructive">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Chọn ngành nghề" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="nursing">Điều dưỡng & Chăm sóc sức khỏe</SelectItem>
                    <SelectItem value="mechanical">Cơ khí & Kỹ thuật</SelectItem>
                    <SelectItem value="construction">Xây dựng & Kiến trúc</SelectItem>
                    <SelectItem value="hospitality">Nhà hàng & Khách sạn</SelectItem>
                    <SelectItem value="other">Ngành nghề khác</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            variant="hero"
            className="w-full h-14 text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Đang gửi...
              </>
            ) : (
              <>
                Đăng ký ngay
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Bằng việc đăng ký, bạn đồng ý với điều khoản sử dụng và chính sách bảo mật của chúng tôi.
            Thông tin của bạn được bảo mật tuyệt đối.
          </p>
        </form>
      </Form>
    </div>
  );
};

export default RegistrationForm;
