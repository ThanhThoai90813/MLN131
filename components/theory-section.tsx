import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Cog, TrendingUp, Brain, Scale, Factory, Globe, Star } from "lucide-react"

const theories = [
  {
    title: "Lý thuyết về giai cấp và đấu tranh giai cấp",
    description:
      "Marx và Engels chỉ ra rằng lịch sử xã hội loài người là lịch sử đấu tranh giai cấp. Mâu thuẫn giữa các giai cấp là động lực phát triển xã hội. Ở Việt Nam, cuộc đấu tranh giữa giai cấp công nhân, nông dân với giai cấp địa chủ phong kiến và tư sản mại bản.",
    icon: Users,
    keyPoints: [
      "Giai cấp công nhân là lực lượng lãnh đạo cách mạng",
      "Liên minh công - nông là nền tảng của cách mạng",
      "Đấu tranh chống chủ nghĩa đế quốc và phong kiến",
      "Vai trò của trí thức cách mạng trong phong trào",
    ],
    application:
      "Đảng Cộng sản Việt Nam lãnh đạo các giai cấp lao động đấu tranh giành độc lập dân tộc và xây dựng CNXH. Thực hiện liên minh công - nông - trí thức dưới sự lãnh đạo của giai cấp công nhân.",
    image: "/vietnamese-workers-and-farmers-united--hammer-and-.jpg",
  },
  {
    title: "Lý thuyết về nhà nước và cách mạng",
    description:
      "Lenin phát triển lý thuyết Marx về nhà nước, chỉ ra bản chất giai cấp của nhà nước và con đường cách mạng bạo lực để lật đổ nhà nước cũ, xây dựng nhà nước vô sản. Nhà nước xã hội chủ nghĩa là công cụ để xây dựng xã hội mới.",
    icon: Scale,
    keyPoints: [
      "Nhà nước là công cụ của giai cấp thống trị",
      "Cách mạng bạo lực là tất yếu lịch sử",
      "Chuyên chính vô sản trong thời kỳ quá độ",
      "Dân chủ xã hội chủ nghĩa cho nhân dân lao động",
    ],
    application:
      "Việt Nam thành lập nhà nước dân chủ nhân dân, thực hiện chuyên chính vô sản dưới sự lãnh đạo của Đảng. Xây dựng nhà nước pháp quyền xã hội chủ nghĩa của dân, do dân, vì dân.",
    image: "/vietnamese-state-building--government-institutions.jpg",
  },
  {
    title: "Lý thuyết về kinh tế chính trị Marx",
    description:
      "Marx phân tích bản chất của chế độ tư bản chủ nghĩa thông qua lý thuyết giá trị thặng dư, chỉ ra tính tất yếu của việc chuyển đổi sang chủ nghĩa xã hội thông qua việc xóa bỏ chế độ tư hữu về tư liệu sản xuất.",
    icon: TrendingUp,
    keyPoints: [
      "Lý thuyết giá trị thặng dư và bóc lột",
      "Mâu thuẫn cơ bản của chủ nghĩa tư bản",
      "Công hữu hóa tư liệu sản xuất",
      "Quy luật phát triển kinh tế xã hội",
    ],
    application:
      "Việt Nam thực hiện cải cách ruộng đất, quốc hữu hóa các ngành kinh tế quan trọng. Xây dựng kinh tế thị trường định hướng xã hội chủ nghĩa với vai trò chủ đạo của kinh tế nhà nước.",
    image: "/vietnamese-economic-development--factories--agricu.jpg",
  },
  {
    title: "Lý thuyết về đảng cách mạng của Lenin",
    description:
      "Lenin đề ra lý thuyết về đảng kiểu mới - đảng của giai cấp vô sản, có tổ chức chặt chẽ, kỷ luật nghiêm minh, được trang bị lý luận cách mạng khoa học để lãnh đạo cách mạng giành thắng lợi.",
    icon: BookOpen,
    keyPoints: [
      "Đảng tiên phong của giai cấp công nhân",
      "Nguyên tắc tập trung dân chủ",
      "Lý luận cách mạng khoa học",
      "Kỷ luật sắt và đoàn kết thống nhất",
    ],
    application:
      "Đảng Cộng sản Việt Nam được xây dựng theo mô hình đảng Lênin, lãnh đạo toàn bộ quá trình cách mạng. Thực hiện nguyên tắc tập trung dân chủ, duy trì tính tiên phong và trong sạch.",
    image: "/vietnamese-communist-party-organization--party-con.jpg",
  },
  {
    title: "Lý thuyết về cách mạng dân tộc dân chủ",
    description:
      "Lenin và Stalin phát triển lý thuyết về cách mạng dân tộc dân chủ ở các nước thuộc địa, bán thuộc địa. Cách mạng dân tộc dân chủ là bước chuẩn bị cần thiết cho cách mạng xã hội chủ nghĩa.",
    icon: Globe,
    keyPoints: [
      "Kết hợp giải phóng dân tộc và giải phóng giai cấp",
      "Vai trò lãnh đạo của đảng cộng sản",
      "Liên minh các tầng lớp nhân dân",
      "Chống đế quốc và phong kiến",
    ],
    application:
      "Việt Nam thực hiện cách mạng dân tộc dân chủ nhân dân, kết hợp đấu tranh giành độc lập dân tộc với cách mạng xã hội. Xây dựng khối đại đoàn kết toàn dân tộc.",
    image: "/vietnamese-national-liberation--people-s-unity--an.jpg",
  },
  {
    title: "Lý thuyết về thời kỳ quá độ lên CNXH",
    description:
      "Marx và Lenin chỉ ra rằng giữa xã hội tư bản chủ nghĩa và xã hội cộng sản có một thời kỳ quá độ, trong đó nhà nước thực hiện chuyên chính vô sản để cải tạo xã hội cũ và xây dựng xã hội mới.",
    icon: Factory,
    keyPoints: [
      "Chuyên chính vô sản là cần thiết",
      "Cải tạo quan hệ sản xuất",
      "Xây dựng cơ sở vật chất kỹ thuật",
      "Giáo dục con người mới",
    ],
    application:
      "Việt Nam xác định thời kỳ quá độ lên CNXH, thực hiện công nghiệp hóa, hiện đại hóa. Cải tạo xã hội từ kinh tế đến chính trị, văn hóa, xã hội.",
    image: "/vietnamese-socialist-construction--industrial-deve.jpg",
  },
  {
    title: "Lý thuyết về chủ nghĩa quốc tế vô sản",
    description:
      "Marx và Engels khẳng định 'Vô sản các nước đoàn kết lại!'. Lenin phát triển thành lý thuyết về chủ nghĩa quốc tế vô sản, sự đoàn kết giữa các dân tộc bị áp bức và giai cấp công nhân thế giới trong đấu tranh chống đế quốc.",
    icon: Globe,
    keyPoints: [
      "Đoàn kết quốc tế của giai cấp công nhân",
      "Hỗ trợ lẫn nhau giữa các phong trào cách mạng",
      "Chống chủ nghĩa dân tộc hẹp hòi",
      "Xây dựng mặt trận thống nhất chống đế quốc",
    ],
    application:
      "Việt Nam nhận được sự hỗ trợ quốc tế trong cuộc kháng chiến. Thực hiện chính sách đối ngoại đa phương hóa, đa dạng hóa, kết hợp sức mạnh dân tộc với sức mạnh thời đại.",
    image: "/international-solidarity--vietnamese-and-world-f.jpg",
  },
  {
    title: "Lý thuyết về văn hóa và ý thức hệ",
    description:
      "Marx chỉ ra mối quan hệ giữa tồn tại xã hội và ý thức xã hội. Gramsci phát triển về vai trò của văn hóa, ý thức hệ trong việc duy trì và thay đổi trật tự xã hội. Văn hóa xã hội chủ nghĩa là nền tảng tinh thần.",
    icon: Brain,
    keyPoints: [
      "Tồn tại xã hội quyết định ý thức xã hội",
      "Vai trò năng động của ý thức đối với tồn tại",
      "Đấu tranh trên mặt trận tư tưởng văn hóa",
      "Xây dựng con người mới xã hội chủ nghĩa",
    ],
    application:
      "Việt Nam xây dựng nền văn hóa dân tộc, khoa học, đại chúng. Đấu tranh chống tư tưởng lạc hậu, bảo thủ và chống văn hóa phẩm độc hại. Giáo dục lý tưởng cách mạng cho thế hệ trẻ.",
    image: "/vietnamese-cultural-development--traditional-and-.jpg",
  },
  {
    title: "Lý thuyết về dân chủ xã hội chủ nghĩa",
    description:
      "Lenin phát triển quan niệm về dân chủ xã hội chủ nghĩa - dân chủ thực sự cho đa số nhân dân lao động, khác với dân chủ tư sản chỉ là dân chủ cho thiểu số. Nhân dân là chủ thể của quyền lực nhà nước.",
    icon: Users,
    keyPoints: [
      "Dân chủ thực chất cho nhân dân lao động",
      "Nhân dân làm chủ đất nước",
      "Kết hợp dân chủ với tập trung",
      "Mở rộng dân chủ cơ sở",
    ],
    application:
      "Việt Nam thực hiện dân chủ xã hội chủ nghĩa với nguyên tắc 'dân biết, dân bàn, dân làm, dân kiểm tra'. Phát huy quyền làm chủ của nhân dân trong các lĩnh vực chính trị, kinh tế, xã hội.",
    image: "/vietnamese-democracy--people-s-participation-in-.jpg",
  },
  {
    title: "Lý thuyết về con đường cách mạng ở các nước Đông Phương",
    description:
      "Lenin và Stalin nghiên cứu đặc điểm cách mạng ở các nước Đông Phương - nước thuộc địa, bán thuộc địa với nền kinh tế nông nghiệp lạc hậu. Cách mạng có thể bỏ qua giai đoạn tư bản chủ nghĩa phát triển.",
    icon: Star,
    keyPoints: [
      "Đặc điểm nước thuộc địa, bán thuộc địa",
      "Kết hợp cách mạng dân tộc và xã hội",
      "Vai trò của nông dân trong cách mạng",
      "Bỏ qua giai đoạn tư bản chủ nghĩa",
    ],
    application:
      "Việt Nam áp dụng sáng tạo lý thuyết này, kết hợp giải phóng dân tộc với giải phóng xã hội. Từ nước nông nghiệp lạc hậu chuyển thẳng lên xây dựng chủ nghĩa xã hội.",
    image: "/vietnamese-revolutionary-path--from-feudalism-to-.jpg",
  },
]

export function TheorySection() {
  return (
    <section
      id="theory"
      className="py-20 bg-gradient-to-br from-yellow-50 via-red-50 to-yellow-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-36 h-36 bg-yellow-500 rounded-full animate-float"></div>
        <div
          className="absolute top-80 left-20 w-28 h-28 bg-red-500 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/4 w-32 h-32 bg-yellow-600 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Brain className="w-8 h-8 text-yellow-600 animate-pulse" />
              <h2 className="text-5xl md:text-6xl font-black text-yellow-800 hero-text-shadow">
                Cơ sở lý thuyết Marx-Lenin
              </h2>
              <Brain className="w-8 h-8 text-red-600 animate-pulse" />
            </div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Nền tảng khoa học vững chắc cho con đường cách mạng và xây dựng chủ nghĩa xã hội ở Việt Nam
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            {theories.map((theory, index) => {
              const Icon = theory.icon
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-yellow-200 group bg-white/90 backdrop-blur-sm animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6 relative overflow-hidden rounded-xl">
                    <img
                      src={theory.image || "/placeholder.svg"}
                      alt={theory.title}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-yellow-500 to-red-500 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-yellow-100 text-yellow-800 px-3 py-1 font-semibold border border-yellow-300"
                    >
                      Lý thuyết cơ bản
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-balance leading-tight group-hover:text-yellow-700 transition-colors">
                    {theory.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{theory.description}</p>

                  <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-bold mb-3 text-yellow-800 flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      Điểm chính:
                    </h4>
                    <ul className="space-y-2">
                      {theory.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <span className="text-yellow-600 mr-3 mt-1 font-bold text-base">•</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t-2 border-yellow-200 pt-6">
                    <h4 className="font-bold mb-3 text-red-700 flex items-center gap-2">
                      <Cog className="w-5 h-5" />
                      Ứng dụng tại Việt Nam:
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed bg-red-50 p-3 rounded-lg border border-red-200">
                      {theory.application}
                    </p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
