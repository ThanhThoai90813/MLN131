"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Factory, TrendingUp, Palette, Shield, Globe, Users, Building, Star, ArrowLeft } from "lucide-react"

const methods = [
  {
    id: 1,
    title: "Đẩy  mạnh công nghiệp hóa, hiện đại hoá đất nước gắn với phát triển kinh tế tri thức, bảo vệ tài nguyên, môi trường",
    description:
      "Đây là nhiệm vụ trung tâm để phát triển nhanh và bền vững đất nước. Cần ứng dụng mạnh mẽ các thành tựu của khoa học, công nghệ vào mọi lĩnh vực, đặc biệt trong các ngành then chốt.",
    examples: [
      "Chuyển đổi số – Cách mạng công nghiệp 4.0\nViệt Nam thúc đẩy Chương trình Chuyển đổi số quốc gia.\nCác tập đoàn lớn như Viettel, FPT, VNPT đầu tư mạnh vào AI, điện toán đám mây, trung tâm dữ liệu (data center).",
      "Phát triển hạ tầng hiện đại\nKhởi công và thi công cao tốc Bắc – Nam giai đoạn 2 (2021–2025), tổng chiều dài hơn 700 km.\nDự án Sân bay Long Thành.",
      "Ứng dụng khoa học – công nghệ trong sản xuất\nDoanh nghiệp Việt như VinFast, Thaco đẩy mạnh sản xuất ô tô điện, xe bus điện."
    ],
    icon: Factory,
    color: "from-red-500 to-red-600",
    image: "/cong-nghiep-hoa-hien-dai-hoa-la-qua-trinh-chuyen-doi-tu-su-dung-lao-dong-thu-cong-sang-lao-dong-ung-dung-thiet-bi-cong-nghe_1003141006.webp",
  },
  {
    id: 2,
    title: "Phát triển nền kinh tế thị trường, định hướng xã hội chủ nghĩa",
    description:
      "Xây dựng nền kinh tế nhiều thành phần, vận hành theo cơ chế thị trường dưới sự quản lý của Nhà nước, hướng tới mục tiêu xã hội chủ nghĩa. Tập trung ổn định kinh tế vĩ mô, đổi mới mô hình tăng trưởng, tái cơ cấu kinh tế, phát triển kinh tế số, công nghiệp hóa gắn với cả thị trường trong nước và quốc tế, bảo đảm công bằng xã hội.",
    examples: [
      "Hoàn thiện thể chế kinh tế thị trường\nViệt Nam tiếp tục sửa đổi, bổ sung Luật Đất đai 2024, Luật Các tổ chức tín dụng, Luật Giá để minh bạch hơn",
      "Gắn kết tăng trưởng kinh tế với tiến bộ xã hội\nChính phủ triển khai Chương trình mục tiêu quốc gia giảm nghèo bền vững 2021–2025.\nĐầu tư y tế, giáo dục, an sinh xã hội được ưu tiên",
      "Kinh tế số và đổi mới sáng tạo\nThương mại điện tử tăng trưởng mạnh (Shopee, Lazada, Tiki, TikTok Shop)"
    ],
    icon: TrendingUp,
    color: "from-yellow-500 to-yellow-600",
    image: "/vietnamese-socialist-market-economy-developmen.jpg",
  },
  {
    id: 3,
    title: "Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc",
    description:
      "Văn hóa là nền tảng tinh thần của xã hội, là sức mạnh nội sinh quan trọng để phát triển bền vững và bảo vệ Tổ quốc. Cần kế thừa truyền thống tốt đẹp của dân tộc, tiếp thu tinh hoa văn hóa nhân loại. Đi đôi với đó là nâng cao đời sống vật chất, tinh thần, thực hiện tiến bộ và công bằng xã hội.",
    examples: [
      "Bảo tồn và phát huy di sản văn hóa\n2023: UNESCO ghi danh Nghệ thuật làm gốm của người Chăm và Nghệ thuật kéo co Việt Nam",
      "Xây dựng đời sống văn hóa mới\nCác phong trào: “Toàn dân đoàn kết xây dựng đời sống văn hóa”, “Gia đình văn hóa”, “Khu phố văn hóa” tiếp tục được triển khai rộng rãi",
      "Lan tỏa giá trị văn hóa Việt ra thế giới\nVăn hóa ẩm thực Việt Nam (phở, bánh mì, cà phê trứng) liên tục được truyền thông quốc tế ca ngợi",
    ],
    icon: Palette,
    color: "from-red-600 to-yellow-500",
    image: "/hanoimoicomvnuploadsimagestuandiep_muarong.jpg",
  },
  {
    id: 4,
    title: "Bảo đảm vững chắc quốc phòng và an ninh quốc gia, trật tự, an toàn xã hội, xây dựng con người, nâng cao đời sống nhân dân, thực hiện tiến bộ và công bằng xã hội",
    description:
      "Đây là nhiệm vụ chiến lược hàng đầu. Phải nâng cao cảnh giác, xây dựng lực lượng vũ trang nhân dân vững mạnh, kiên quyết bảo vệ độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ. Đồng thời giữ vững an ninh chính trị, trật tự, an toàn xã hội, ổn định để phát triển đất nước.",
    examples: [
      "Bảo vệ chủ quyền, an ninh biên giới, biển đảo\nViệt Nam kiên quyết bảo vệ chủ quyền biển đảo ở Biển Đông bằng biện pháp hòa bình, đồng thời hiện đại hóa Cảnh sát biển và Bộ đội Biên phòng.\nTăng cường hợp tác quốc tế về tuần tra chung, chống buôn lậu, chống tội phạm xuyên biên giới.",
      "Giữ vững an ninh chính trị, trật tự an toàn xã hội\nTriển khai nhiều đợt cao điểm phòng chống tội phạm, ma túy, tội phạm công nghệ cao.\nĐẩy mạnh an ninh mạng: ngăn chặn tin giả, lừa đảo trực tuyến, bảo vệ dữ liệu cá nhân.",
    ],
    icon: Shield,
    color: "from-yellow-500 to-red-500",
    image: "/www.baobacninh.com.vn-documents-20182-1206962-4.jpg-_68fa7cfe-32d3-46e0-ae62-9ad85e8950b0-t-1640143195842.jpg",
  },
  {
    id: 5,
    title: "Thực hiện đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển, chủ động và tích cực hội nhập quốc tế.",
    description:
      "Chủ động và tích cực hội nhập quốc tế, đa dạng hóa và đa phương hóa quan hệ đối ngoại. Mục tiêu là tranh thủ sự đồng tình, ủng hộ và giúp đỡ của nhân dân thế giới, khai thác mọi khả năng hợp tác để phát triển đất nước theo định hướng xã hội chủ nghĩa, đồng thời góp phần vào hòa bình và tiến bộ chung giữa các nước.",
    examples: [
      "Khẳng định đường lối đối ngoại độc lập, tự chủ\nViệt Nam chủ trương không liên minh quân sự, không dựa vào nước này để chống nước kia, giữ quan hệ cân bằng với các cường quốc.",
      "Đóng góp vào hòa bình, hữu nghị khu vực và thế giới\nViệt Nam cử lực lượng công binh, bác sĩ quân y tham gia gìn giữ hòa bình LHQ",
    ],
    icon: Globe,
    color: "from-red-500 to-yellow-600",
    image: "/vietnam-international-relations-and-diplomacy.jpg",
  },
  {
    id: 6,
    title: "Xây dựng nền dân chủ xã hội chủ nghĩa và đại đoàn kết toàn dân tộc",
    description:
      "Phát huy đầy đủ quyền làm chủ của nhân dân, lấy dân làm gốc trong mọi hoạt động. Tăng cường, mở rộng Mặt trận Tổ quốc và các đoàn thể chính trị - xã hội, đoàn kết mọi giai cấp cũng như cộng đồng người Việt Nam ở nước ngoài. Đây là phương hướng cốt lõi tạo sự thống nhất và đồng thuận xã hội.",
    examples: [
      "Bảo đảm quyền làm chủ của Nhân dân\nLuật Thực hiện dân chủ ở cơ sở (có hiệu lực từ 2023) tạo hành lang pháp lý để người dân tham gia bàn bạc, giám sát và quyết định trực tiếp một số vấn đề tại cộng đồng",
      "Phát triển dân chủ cơ sở, dân chủ trực tiếp",
      "Xây dựng và củng cố khối đại đoàn kết toàn dân tộc\nMặt trận Tổ quốc Việt Nam phát động nhiều phong trào: “Toàn dân đoàn kết xây dựng đời sống văn hóa”, “Ngày vì người nghèo”, “Người Việt Nam ưu tiên dùng hàng Việt Nam”\nỨng phó thiên tai, dịch bệnh, người dân, doanh nghiệp, Nhà nước cùng chung tay hỗ trợ nhau, thể hiện tinh thần đoàn kết cộng đồng.",
    ],
    icon: Users,
    color: "from-yellow-600 to-red-500",
    image: "/vietnamese-socialist-democracy-and-people-s-p.jpg",
  },
  {
    id: 7,
    title: "Xây dựng và hoàn thiện Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân",
    description:
      "Nhà nước pháp quyền XHCN là của nhân dân, do nhân dân, vì nhân dân, đặt dưới sự lãnh đạo của Đảng. Hoạt động dựa trên Hiến pháp và pháp luật, quản lý xã hội bằng pháp luật. Mọi cơ quan, tổ chức phải chấp hành nghiêm Hiến pháp và pháp luật. Nhà nước tôn trọng, bảo đảm và bảo vệ quyền con người, quyền công dân.",
    examples: [
      "Cải cách tư pháp và hành chính\nĐẩy mạnh dịch vụ công trực tuyến, định danh điện tử VNeID, Cơ sở dữ liệu quốc gia về dân cư.\nXây dựng nền hành chính công khai, minh bạch, phòng chống tham nhũng, tiêu cực (xử lý nhiều vụ án lớn như vụ Vạn Thịnh Phát,...)",
      "Xây dựng bộ máy nhà nước tinh gọn, hiệu lực, hiệu quả\nSắp xếp lại tổ chức, giảm đầu mối trung gian, tinh giản biên chế gắn với nâng cao chất lượng cán bộ, công chức.\nThực hiện chủ trương “Chính phủ số, kinh tế số, xã hội số” để nâng cao hiệu quả quản lý.",
    ],
    icon: Building,
    color: "from-red-600 to-yellow-500",
    image: "/vietnamese-socialist-rule-of-law-state-buildi.jpg",
  },
  {
    id: 8,
    title: "Xây dựng Đảng trong sạch, vững mạnh",
    description:
      "Đảng là nhân tố quyết định thắng lợi của cách mạng. Phải thường xuyên tự đổi mới, tự chỉnh đốn, nâng cao bản chất giai cấp công nhân, phát huy tính tiên phong gương mẫu, nâng cao năng lực lãnh đạo và sức chiến đấu. Xây dựng đội ngũ cán bộ, đảng viên trong sạch, có phẩm chất, năng lực, uy tín, đáp ứng yêu cầu của sự nghiệp đổi mới và phát triển.",
    examples: [
      "Đẩy mạnh phòng, chống tham nhũng, tiêu cực\nBan Chỉ đạo Trung ương về phòng, chống tham nhũng, tiêu cực mở rộng phạm vi sang cả cấp tỉnh.\nXử lý nhiều vụ án lớn gây bức xúc xã hội: vụ Vạn Thịnh Phát, vụ Việt Á… thể hiện quyết tâm “không có vùng cấm, không có ngoại lệ”",
      "Đổi mới phương thức lãnh đạo của Đảng \n Tăng cường công khai, minh bạch trong công tác cán bộ, tài chính Đảng.",
      "Nâng cao chất lượng cán bộ, đảng viên\nThực hiện nghiêm quy định về nêu gương, kiểm soát quyền lực, phòng chống chạy chức, chạy quyền.",
    ],
    icon: Star,
    color: "from-yellow-500 to-red-600",
    image: "/202351621834_137363.jpg",
  },
]

export function MethodsSection() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  const toggleCard = (id: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

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
          <Badge className="mb-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-2 text-emphasis">
            Phương Hướng Xây Dựng
          </Badge>
          <h2 className="text-main-title text-secondary-foreground mb-6">8 Phương Hướng Cơ Bản</h2>
          <p className="text-body-large text-foreground/80 max-w-3xl mx-auto">
             THEO GIÁO Trình CHỦ NGHĨA XÃ HỘI KHOA HỌC (K-2021)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {methods.map((method, index) => {
            const IconComponent = method.icon
            const isFlipped = flippedCards.has(method.id)

            return (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <div
                  className="relative cursor-pointer"
                  style={{
                    perspective: '1000px',
                    minHeight: '600px',
                    height: 'auto'
                  }}
                  onClick={() => toggleCard(method.id)}
                >
                  {/* Card Container with Flip Animation */}
                  <div
                    className="relative w-full transition-transform duration-700 ease-in-out"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                      minHeight: '600px',
                    }}
                  >
                    {/* Front Side */}
                    <Card
                      className="absolute inset-0 w-full bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        minHeight: '600px',
                      }}
                    >
                      <div className={`h-2 bg-gradient-to-r ${method.color}`} />

                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-3 rounded-xl bg-gradient-to-r ${method.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20 text-caption text-emphasis">
                              Phương hướng {method.id}
                            </Badge>
                            <CardTitle className="text-subheading text-foreground leading-tight">{method.title}</CardTitle>
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
                        <p className="text-body text-muted-foreground">{method.description}</p>
                        <div className="mt-4 text-center">
                          <Badge className="bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 text-caption">
                            Nhấn để xem ví dụ →
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Back Side */}
                    <Card
                      className="absolute inset-0 w-full bg-gradient-to-br from-slate-800 to-slate-900 text-white border-0 shadow-lg overflow-hidden"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        minHeight: '600px',
                      }}
                    >
                    <div className={`h-2 bg-gradient-to-r ${method.color}`} />

                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${method.color} text-white shadow-lg`}
                        >
                          <ArrowLeft className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <Badge className="mb-2 bg-white/20 text-white hover:bg-white/30 text-caption text-emphasis">
                            Ví dụ minh họa
                          </Badge>
                          <CardTitle className="text-subheading text-white leading-tight">
                            {method.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        {method.examples.map((example, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-bold text-white">{idx + 1}</span>
                            </div>
                            <div className="text-body text-white/90">
                              {example.split('\n').map((line, lineIdx) => (
                                <p key={lineIdx} className={lineIdx > 0 ? "mt-2" : ""}>
                                  {line}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 text-center">
                        <Badge className="bg-white/20 text-white hover:bg-white/30 text-caption">
                          ← Nhấn để quay lại
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
