"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, Palette, Heart, Globe, Scale, Building, Handshake } from "lucide-react"

const characteristics = [
  {
    id: 1,
    title: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
    description:
      "Mục tiêu tổng quát của CNXH là xóa bỏ áp bức bóc lột, xây dựng xã hội công bằng, bình đẳng, bác ái. Khi nhân dân giàu lên thì đất nước mạnh hơn, đủ sức chống lại mọi thách thức.",
    icon: TrendingUp,
    color: "from-primary to-primary/80",
    image: "/vietnamese-prosperity-and-development--modern-citi.jpg",
  },
  {
    id: 2,
    title: "Do nhân dân lao động làm chủ",
    description:
      "Xã hội XHCN là xã hội của nhân dân lao động – lực lượng đã làm nên cách mạng và xây dựng chế độ mới. Nhân dân giữ vai trò trung tâm, là chủ thể quản lý và quyết định sự phát triển đất nước.",
    icon: Users,
    color: "from-secondary to-secondary/80",
    image: "/vietnamese-workers-and-farmers-participating-in-.jpg",
  },
  {
    id: 3,
    title: "Kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại",
    description:
      "Kinh tế XHCN phải dựa trên lực lượng sản xuất hiện đại và quan hệ sản xuất tiến bộ, phù hợp. Quan hệ sản xuất bảo đảm công bằng, hài hòa giữa cống hiến và hưởng thụ, xóa bỏ chế độ tư hữu – nguồn gốc của bóc lột.",
    icon: Building,
    color: "from-primary to-secondary",
    image: "/modern-vietnamese-industrial-complex-with-advanc.jpg",
  },
  {
    id: 4,
    title: "Nền văn hóa tiên tiến, đậm đà bản sắc dân tộc",
    description:
      "Văn hóa XHCN kế thừa giá trị truyền thống tốt đẹp của dân tộc, đồng thời tiếp thu tinh hoa văn hóa nhân loại. Văn hóa vừa là nền tảng tinh thần, vừa là động lực phát triển xã hội.",
    icon: Palette,
    color: "from-secondary to-primary",
    image: "/vietnamese-traditional-culture-meets-modern-dev.jpg",
  },
  {
    id: 5,
    title: "Con người có cuộc sống ấm no, tự do, hạnh phúc",
    description:
      "Con người là trung tâm của sự phát triển, được giải phóng khỏi áp bức, bóc lột. Mục tiêu cao nhất của CNXH là mang lại cho mọi người cuộc sống ấm no, tự do, hạnh phúc và phát triển toàn diện.",
    icon: Heart,
    color: "from-primary to-secondary/80",
    image: "/happy-vietnamese-families-enjoying-prosperous-.jpg",
  },
  {
    id: 6,
    title: "Các dân tộc bình đẳng, đoàn kết, tôn trọng và giúp nhau phát triển",
    description:
      "Trong cộng đồng các dân tộc Việt Nam, mọi dân tộc đều bình đẳng, đoàn kết, cùng nhau phát triển. Đây là vấn đề chiến lược, bảo đảm sự gắn kết quốc gia và củng cố sức mạnh đại đoàn kết dân tộc.",
    icon: Globe,
    color: "from-secondary/80 to-primary",
    image: "/vietnamese-ethnic-minorities-celebrating-togeth.jpg",
  },
  {
    id: 7,
    title: "Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân",
    description:
      "Nhà nước XHCN là kiểu nhà nước mới, mang bản chất giai cấp công nhân và nhân dân lao động, khác hẳn nhà nước bóc lột. Nhà nước này bảo đảm quyền và lợi ích của nhân dân, đặt dưới sự lãnh đạo của Đảng Cộng sản.",
    icon: Scale,
    color: "from-primary/80 to-secondary",
    image: "/vietnamese-national-assembly-and-legal-system-.jpg",
  },
  {
    id: 8,
    title: "Quan hệ hữu nghị, hợp tác với nhân dân thế giới",
    description:
      "Việt Nam thực hiện đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác bình đẳng và cùng phát triển. CNXH Việt Nam gắn bó với phong trào hòa bình, độc lập dân tộc và tiến bộ xã hội trên thế giới.",
    icon: Handshake,
    color: "from-secondary to-primary/80",
    image: "/vietnam-international-cooperation-and-diplomac.jpg",
  },
]

export function CharacteristicsSection() {
  return (
    <section className="py-20 vietnamese-gradient cultural-pattern relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23C8102E' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-6 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-bold shadow-lg">
            Đặc Trưng Chủ Nghĩa Xã Hội
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 hero-text-shadow">8 Đặc Trưng Cơ Bản</h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed font-medium">
            Theo Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (bổ sung, phát triển năm 2011 – Đại hội XI)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {characteristics.map((characteristic, index) => {
            const IconComponent = characteristic.icon
            return (
              <div
                key={characteristic.id}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full bg-card/95 backdrop-blur-sm border-2 border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 hover:border-primary/30">
                  <div className={`h-3 bg-gradient-to-r ${characteristic.color}`} />

                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${characteristic.color} text-primary-foreground shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <Badge className="mb-3 bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 font-semibold">
                          Đặc trưng {characteristic.id}
                        </Badge>
                        <CardTitle className="text-xl font-bold text-foreground leading-tight">
                          {characteristic.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                      <img
                        src={characteristic.image || "/placeholder.svg"}
                        alt={characteristic.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{characteristic.description}</p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
