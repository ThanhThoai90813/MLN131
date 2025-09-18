import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Factory, Wheat, GraduationCap } from "lucide-react"

const applications = {
  politics: {
    title: "Chính trị",
    icon: Factory,
    content: [
      {
        period: "1945-1954",
        title: "Xây dựng chính quyền dân chủ nhân dân",
        achievements: [
          "Thành lập chính quyền cách mạng từ trung ương đến địa phương",
          "Ban hành Hiến pháp 1946 - hiến pháp đầu tiên của nước Việt Nam độc lập",
          "Xây dựng lực lượng vũ trang nhân dân",
        ],
      },
      {
        period: "1954-1975",
        title: "Xây dựng CNXH ở miền Bắc",
        achievements: [
          "Thực hiện cải cách ruộng đất, xóa bỏ chế độ phong kiến",
          "Xây dựng chế độ chính trị xã hội chủ nghĩa",
          "Lãnh đạo kháng chiến chống Mỹ cứu nước",
        ],
      },
      {
        period: "1975-nay",
        title: "Xây dựng CNXH trên toàn quốc",
        achievements: [
          "Thống nhất tổ chức bộ máy nhà nước",
          "Thực hiện đổi mới chính trị từ 1986",
          "Xây dựng nhà nước pháp quyền xã hội chủ nghĩa",
        ],
      },
    ],
  },
  economy: {
    title: "Kinh tế",
    icon: Wheat,
    content: [
      {
        period: "1945-1954",
        title: "Khôi phục và phát triển kinh tế",
        achievements: [
          "Thực hiện chính sách giảm tô, giảm tức",
          "Khôi phục sản xuất sau chiến tranh",
          "Xây dựng nền tảng công nghiệp đầu tiên",
        ],
      },
      {
        period: "1954-1975",
        title: "Xây dựng nền kinh tế CNXH",
        achievements: [
          "Cải tạo xã hội chủ nghĩa đối với công thương nghiệp tư bản",
          "Hợp tác hóa nông nghiệp",
          "Xây dựng công nghiệp nặng làm nền tảng",
        ],
      },
      {
        period: "1975-nay",
        title: "Đổi mới kinh tế",
        achievements: [
          "Chuyển từ kinh tế kế hoạch hóa tập trung sang kinh tế thị trường định hướng CNXH",
          "Mở cửa hội nhập quốc tế",
          "Phát triển kinh tế tri thức, công nghệ cao",
        ],
      },
    ],
  },
  culture: {
    title: "Văn hóa - Xã hội",
    icon: GraduationCap,
    content: [
      {
        period: "1945-1954",
        title: "Xóa nạn mù chữ",
        achievements: [
          'Phát động phong trào "Toàn dân học chữ"',
          "Xây dựng hệ thống giáo dục quốc dân",
          "Phát triển văn hóa dân tộc, dân chủ, khoa học",
        ],
      },
      {
        period: "1954-1975",
        title: "Xây dựng nền văn hóa CNXH",
        achievements: [
          "Phổ cập giáo dục tiểu học",
          "Xây dựng đội ngũ trí thức mới",
          "Phát triển y tế, thể thao quần chúng",
        ],
      },
      {
        period: "1975-nay",
        title: "Xây dựng con người mới",
        achievements: [
          "Phát triển giáo dục toàn diện",
          "Xây dựng hệ giá trị văn hóa Việt Nam",
          "Kết hợp truyền thống với hiện đại",
        ],
      },
    ],
  },
}

export function ApplicationSection() {
  return (
    <section id="application" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ứng dụng thực tiễn tại Việt Nam</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cách thức áp dụng lý thuyết Marx-Lenin vào điều kiện cụ thể của Việt Nam qua các giai đoạn lịch sử
            </p>
          </div>

          <Tabs defaultValue="politics" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="politics" className="flex items-center gap-2">
                <Factory className="h-4 w-4" />
                Chính trị
              </TabsTrigger>
              <TabsTrigger value="economy" className="flex items-center gap-2">
                <Wheat className="h-4 w-4" />
                Kinh tế
              </TabsTrigger>
              <TabsTrigger value="culture" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Văn hóa - XH
              </TabsTrigger>
            </TabsList>

            {Object.entries(applications).map(([key, section]) => (
              <TabsContent key={key} value={key}>
                <div className="space-y-6">
                  {section.content.map((period, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="outline">{period.period}</Badge>
                        <h3 className="text-xl font-semibold">{period.title}</h3>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        {period.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
