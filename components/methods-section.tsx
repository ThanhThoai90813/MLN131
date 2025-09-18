"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Factory, TrendingUp, Palette, Shield, Globe, Users, Building, Star } from "lucide-react"

const methods = [
  {
    id: 1,
    title: "Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước",
    description:
      "Đây là nhiệm vụ trung tâm để phát triển nhanh và bền vững. Công nghiệp hóa, hiện đại hóa phải gắn với phát triển kinh tế tri thức, bảo vệ tài nguyên và môi trường. Cần ứng dụng mạnh mẽ các thành tựu của khoa học, công nghệ và cuộc Cách mạng công nghiệp 4.0 vào mọi lĩnh vực, đặc biệt trong các ngành then chốt.",
    icon: Factory,
    color: "from-red-500 to-red-600",
    image: "/vietnamese-industrialization-and-modernization.jpg",
  },
  {
    id: 2,
    title: "Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa",
    description:
      "Xây dựng nền kinh tế nhiều thành phần, vận hành theo cơ chế thị trường dưới sự quản lý của Nhà nước, hướng tới mục tiêu xã hội chủ nghĩa. Tập trung ổn định kinh tế vĩ mô, đổi mới mô hình tăng trưởng, tái cơ cấu kinh tế, phát triển kinh tế số, công nghiệp hóa gắn với cả thị trường trong nước và quốc tế, bảo đảm công bằng xã hội.",
    icon: TrendingUp,
    color: "from-yellow-500 to-yellow-600",
    image: "/vietnamese-socialist-market-economy-developmen.jpg",
  },
  {
    id: 3,
    title: "Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc",
    description:
      "Văn hóa là nền tảng tinh thần của xã hội, là sức mạnh nội sinh quan trọng để phát triển bền vững và bảo vệ Tổ quốc. Cần kế thừa truyền thống tốt đẹp của dân tộc, tiếp thu tinh hoa văn hóa nhân loại, đồng thời xây dựng con người Việt Nam toàn diện, có tinh thần dân tộc, dân chủ, khoa học và nhân văn. Đi đôi với đó là nâng cao đời sống vật chất, tinh thần, thực hiện tiến bộ và công bằng xã hội.",
    icon: Palette,
    color: "from-red-600 to-yellow-500",
    image: "/vietnamese-cultural-development-and-national-i.jpg",
  },
  {
    id: 4,
    title: "Bảo đảm vững chắc quốc phòng và an ninh quốc gia",
    description:
      "Đây là nhiệm vụ chiến lược hàng đầu. Phải nâng cao cảnh giác, xây dựng lực lượng vũ trang nhân dân vững mạnh, kiên quyết bảo vệ độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ. Đồng thời giữ vững an ninh chính trị, trật tự, an toàn xã hội, bảo đảm môi trường hòa bình, ổn định để phát triển đất nước.",
    icon: Shield,
    color: "from-yellow-500 to-red-500",
    image: "/vietnamese-national-defense-and-security-forc.jpg",
  },
  {
    id: 5,
    title: "Thực hiện đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển",
    description:
      "Chủ động và tích cực hội nhập quốc tế, đa dạng hóa và đa phương hóa quan hệ đối ngoại. Mục tiêu là tranh thủ sự đồng tình, ủng hộ và giúp đỡ của nhân dân thế giới, khai thác mọi khả năng hợp tác để phát triển đất nước theo định hướng xã hội chủ nghĩa, đồng thời góp phần vào hòa bình, tiến bộ chung của nhân loại.",
    icon: Globe,
    color: "from-red-500 to-yellow-600",
    image: "/vietnam-international-relations-and-diplomacy.jpg",
  },
  {
    id: 6,
    title: "Xây dựng nền dân chủ xã hội chủ nghĩa và đại đoàn kết toàn dân tộc",
    description:
      "Phát huy đầy đủ quyền làm chủ của nhân dân, lấy dân làm gốc trong mọi hoạt động. Tăng cường, mở rộng Mặt trận Tổ quốc và các đoàn thể chính trị - xã hội, đoàn kết mọi giai cấp, tầng lớp, dân tộc, tôn giáo, cũng như cộng đồng người Việt Nam ở nước ngoài. Đây là phương hướng cốt lõi tạo sự thống nhất và đồng thuận xã hội.",
    icon: Users,
    color: "from-yellow-600 to-red-500",
    image: "/vietnamese-socialist-democracy-and-people-s-p.jpg",
  },
  {
    id: 7,
    title: "Xây dựng và hoàn thiện Nhà nước pháp quyền xã hội chủ nghĩa",
    description:
      "Nhà nước pháp quyền XHCN là của nhân dân, do nhân dân, vì nhân dân, đặt dưới sự lãnh đạo của Đảng. Hoạt động dựa trên Hiến pháp và pháp luật, quản lý xã hội bằng pháp luật. Mọi cơ quan, tổ chức, cán bộ, công chức phải chấp hành nghiêm Hiến pháp và pháp luật. Nhà nước tôn trọng, bảo đảm và bảo vệ quyền con người, quyền công dân.",
    icon: Building,
    color: "from-red-600 to-yellow-500",
    image: "/vietnamese-socialist-rule-of-law-state-buildi.jpg",
  },
  {
    id: 8,
    title: "Xây dựng Đảng trong sạch, vững mạnh",
    description:
      "Đảng là nhân tố quyết định thắng lợi của cách mạng. Phải thường xuyên tự đổi mới, tự chỉnh đốn, nâng cao bản chất giai cấp công nhân, phát huy tính tiên phong gương mẫu, nâng cao năng lực lãnh đạo và sức chiến đấu. Xây dựng đội ngũ cán bộ, đảng viên trong sạch, có phẩm chất, năng lực, uy tín, đáp ứng yêu cầu của sự nghiệp đổi mới và phát triển.",
    icon: Star,
    color: "from-yellow-500 to-red-600",
    image: "/vietnamese-communist-party-building-and-leader.jpg",
  },
]

export function MethodsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23eab308' fillOpacity='0.4'%3E%3Cpath d='M40 40l20-20v40l-20-20zm0 0l-20-20v40l20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 text-lg">
            Phương Hướng Xây Dựng
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-800 mb-6">8 Phương Hướng Cơ Bản</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Theo Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (Đại hội XI – 2011)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {methods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${method.color}`} />

                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${method.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <Badge className="mb-2 bg-gray-100 text-gray-700 hover:bg-gray-200">
                          Phương hướng {method.id}
                        </Badge>
                        <CardTitle className="text-xl font-bold text-gray-800 leading-tight">{method.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img
                        src={method.image || "/placeholder.svg"}
                        alt={method.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">{method.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
