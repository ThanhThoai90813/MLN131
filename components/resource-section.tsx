import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, Video, ExternalLink } from "lucide-react"

const resources = [
  {
    category: "Tài liệu gốc",
    icon: BookOpen,
    items: [
      {
        title: "Tuyên ngôn của Đảng Cộng sản",
        author: "K. Marx & F. Engels",
        description: "Tác phẩm cơ bản về lý thuyết cách mạng vô sản",
        type: "PDF",
      },
      {
        title: "Nhà nước và Cách mạng",
        author: "V.I. Lenin",
        description: "Lý thuyết về nhà nước và chuyên chính vô sản",
        type: "PDF",
      },
      {
        title: "Đường Kách mệnh",
        author: "Nguyễn Ái Quốc",
        description: "Con đường cách mạng của Việt Nam",
        type: "PDF",
      },
    ],
  },
  {
    category: "Nghiên cứu hiện đại",
    icon: FileText,
    items: [
      {
        title: "Quá trình hình thành CNXH ở Việt Nam",
        author: "Viện Lịch sử Đảng",
        description: "Nghiên cứu toàn diện về quá trình chuyển đổi",
        type: "Sách",
      },
      {
        title: "Đổi mới và phát triển bền vững",
        author: "Học viện Chính trị Quốc gia",
        description: "Phân tích chính sách đổi mới từ 1986",
        type: "Luận văn",
      },
      {
        title: "Kinh tế thị trường định hướng CNXH",
        author: "Viện Kinh tế Việt Nam",
        description: "Mô hình kinh tế độc đáo của Việt Nam",
        type: "Báo cáo",
      },
    ],
  },
  {
    category: "Tài liệu đa phương tiện",
    icon: Video,
    items: [
      {
        title: "Lịch sử Đảng Cộng sản Việt Nam",
        author: "VTV",
        description: "Phim tài liệu về lịch sử 90 năm của Đảng",
        type: "Video",
      },
      {
        title: "Chủ tịch Hồ Chí Minh với CNXH",
        author: "Bảo tàng Hồ Chí Minh",
        description: "Tư tưởng Hồ Chí Minh về xây dựng CNXH",
        type: "Triển lãm",
      },
      {
        title: "Đổi mới 35 năm nhìn lại",
        author: "VOV",
        description: "Podcast về thành tựu đổi mới",
        type: "Audio",
      },
    ],
  },
]

export function ResourceSection() {
  return (
    <section id="resources" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tài liệu tham khảo</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Bộ sưu tập tài liệu phong phú để nghiên cứu sâu hơn về chủ đề quá độ lên chủ nghĩa xã hội ở Việt Nam
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {resources.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="border-l-2 border-primary/20 pl-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-medium text-sm">{item.title}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {item.type}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{item.author}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-2">{item.description}</p>
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Xem chi tiết
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-6 bg-primary/5">
              <h3 className="text-lg font-semibold mb-2">Ghi chú quan trọng</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tất cả tài liệu được liệt kê chỉ mang tính chất tham khảo học thuật. Sinh viên nên tham khảo thêm các
                nguồn tài liệu chính thức từ Học viện Chính trị Quốc gia Hồ Chí Minh và các cơ quan nghiên cứu uy tín.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
