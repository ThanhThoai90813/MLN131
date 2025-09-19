"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Flag, Hammer, Star, Building, Sparkles, Globe, Factory, BookOpen } from "lucide-react"

const timelineEvents = [
  {
    id: "concept",
    year: "1. Khái niệm chung",
    title: "Quá độ lên CNXH bỏ qua chế độ tư bản chủ nghĩa",
    description: `
      Việt Nam lựa chọn đi thẳng lên chủ nghĩa xã hội, bỏ qua chế độ tư bản chủ nghĩa. 
      Đây là con đường Hồ Chí Minh xác định từ đầu: sau cách mạng dân tộc dân chủ, 
      đất nước trực tiếp quá độ lên CNXH, phù hợp với điều kiện và xu thế thời đại. 
      Mỗi quốc gia có con đường riêng, và đây là lựa chọn đặc thù của Việt Nam.
    `,
    icon: BookOpen,
    category: "Lý thuyết",
    image: "/download.jpg",
    significance: "Khẳng định con đường bỏ qua chế độ TBCN là tất yếu và phù hợp với điều kiện lịch sử cụ thể của Việt Nam."
  },
  {
    id: "subjective",
    year: "2. Điều kiện chủ quan",
    title: "Xuất phát điểm thấp và thách thức nội tại",
    description: `
      Việt Nam bước vào thời kỳ quá độ từ một nước nửa thuộc địa, nửa phong kiến, 
      kinh tế lạc hậu, hậu quả chiến tranh nặng nề. 
      Lực lượng sản xuất yếu, nhân lực hạn chế, trình độ quản lý thấp. 
      Đây là những khó khăn lớn, đòi hỏi sự kiên trì và sáng tạo trong xây dựng xã hội mới.
    `,
    icon: Hammer,
    category: "Thực tiễn",
    image: "/vietnamese-communist-party-founding-ceremony-1930-.jpg",
    significance: "Chỉ ra khó khăn, hạn chế nội tại là nguyên nhân khiến quá độ phải lâu dài, phức tạp."
  },
  {
    id: "objective",
    year: "3. Nguyên nhân khách quan",
    title: "Bối cảnh quốc tế và xu thế thời đại",
    description: `
      Sau Cách mạng Tháng Tám 1945, Việt Nam vừa kháng chiến chống Pháp, vừa xây dựng chế độ mới. 
      Sau chiến thắng Điện Biên Phủ, đất nước bước vào giai đoạn cải tạo xã hội chủ nghĩa ở miền Bắc. 
      Năm 1960, Việt Nam chính thức bước vào thời kỳ quá độ lên CNXH trong bối cảnh thế giới có nhiều biến động: 
      phong trào giải phóng dân tộc lan rộng, hệ thống xã hội chủ nghĩa được củng cố, cuộc đối đầu Đông – Tây gay gắt. 
      Đây là những yếu tố khách quan tác động mạnh mẽ, thúc đẩy Việt Nam lựa chọn con đường xã hội chủ nghĩa.
    `,
    icon: Globe,
    category: "Quốc tế",
    image: "/cmt8.webp",
    significance: "Làm rõ tác động khách quan từ phong trào thế giới và thời đại, củng cố lựa chọn đi lên CNXH."
  },
  {
    id: "science-tech",
    year: "4a. Tác động của khoa học",
    title: "Cách mạng khoa học – công nghiệp",
    description: `
      Cuộc cách mạng khoa học – công nghiệp thế kỷ 20 mang lại nhiều cơ hội cho các quốc gia đi sau như Việt Nam. 
      Nếu các nước phát triển phải mất hàng trăm năm để nghiên cứu, phát minh, thì Việt Nam có thể kế thừa và lựa chọn thành tựu phù hợp. 
      Tuy nhiên, điều kiện tiên quyết để tận dụng cơ hội đó là phải có nội lực mạnh: con người có tri thức, kinh tế vững, cơ sở vật chất hiện đại, 
      khoa học – công nghệ phát triển. Nếu không có nội lực, sẽ khó biến cơ hội thành hiện thực.
    `,
    icon: Factory,
    category: "Công nghệ",
    image: "/vietnam-economic-reform-1986--modern-factories-and.jpg",
    significance: "Chứng minh cơ hội đi tắt đón đầu, nhưng nhấn mạnh yêu cầu phải phát triển nội lực."
  },
  {
    id: "globalization",
    year: "4b. Tác động của toàn cầu hóa",
    title: "Hội nhập quốc tế – Cơ hội và thách thức",
    description: `
      Toàn cầu hóa mở ra cơ hội hội nhập về kinh tế, chính trị, văn hóa – xã hội, giúp Việt Nam có điều kiện phát triển nhanh hơn. 
      Tuy nhiên, nó cũng mang đến thách thức: nguy cơ tụt hậu, lệ thuộc, và gia tăng khoảng cách với các quốc gia khác. 
      Xu thế thế giới chuyển từ đối đầu sang đối thoại, từ sức mạnh quân sự sang sức mạnh kinh tế. 
      Việt Nam muốn phát triển phải mở cửa, hợp tác quốc tế, ứng dụng và chuyển giao khoa học – công nghệ.
    `,
    icon: Globe,
    category: "Hội nhập",
    image: "/modern-vietnam-2021--skyscrapers--technology--deve.jpg",
    significance: "Khẳng định hội nhập quốc tế vừa là cơ hội, vừa là thách thức tất yếu của thời kỳ quá độ."
  },
  {
    id: "embargo",
    year: "4c. Tác động của cấm vận Mỹ",
    title: "Rào cản và nỗ lực vượt qua",
    description: `
      Sau năm 1957, Việt Nam rơi vào thời kỳ cấm vận khắc nghiệt của Mỹ. 
      Đây là hàng rào vô hình khiến Việt Nam bị cô lập, khó hội nhập với cộng đồng quốc tế. 
      Không quốc gia nào dám bắt tay hợp tác với Việt Nam khi Mỹ còn duy trì cấm vận. 
      Điều này đã kìm hãm sự phát triển trong nhiều thập kỷ. 
      Trước tình hình đó, Việt Nam buộc phải kiên trì đấu tranh ngoại giao, thúc đẩy bình thường hóa quan hệ, 
      để từng bước hội nhập và phát triển đất nước.
    `,
    icon: Flag,
    category: "Thách thức",
    image: "/download (1).jpg",
    significance: "Cấm vận gây khó khăn kéo dài, cho thấy ý chí tự lực tự cường là điều kiện sống còn."
  },
  {
    id: "content",
    year: "5. Nội dung quá độ",
    title: "Bỏ qua chế độ tư bản chủ nghĩa",
    description: `
      Quá độ bỏ qua chế độ tư bản chủ nghĩa không đồng nghĩa với phủ định sạch trơn. 
      Việt Nam không xây dựng thể chế chính trị tư bản, không để phương thức sản xuất tư bản giữ vị trí thống trị, 
      cũng không để sở hữu tư bản chi phối quản lý kinh tế – xã hội. 
      Tuy nhiên, Việt Nam vẫn kế thừa, tiếp thu các thành tựu khoa học, kỹ thuật, công nghệ, văn hóa, tri thức nhân loại. 
      Đây là sự vận dụng linh hoạt, kết hợp giữa bỏ qua và kế thừa, giữa cái mới và những giá trị tích cực của cái cũ.
    `,
    icon: Building,
    category: "Thực hiện",
    image: "/vietnam-reunification-1975--tanks-entering-saigon-.jpg",
    significance: "Xác định rõ nội dung quá độ: vừa bỏ qua cái lỗi thời, vừa kế thừa thành tựu nhân loại."
  },
  {
    id: "conclusion",
    year: "6. Kết luận – Ý nghĩa",
    title: "Tính tất yếu và ý nghĩa lịch sử",
    description: `
      Quá độ lên CNXH bỏ qua chế độ tư bản chủ nghĩa là con đường cách mạng tất yếu, khách quan và phù hợp với hoàn cảnh Việt Nam. 
      Con đường này giúp đất nước ta tiết kiệm thời gian, tiếp thu trực tiếp thành tựu của nhân loại, 
      đồng thời tạo ra sự biến đổi về chất trên mọi lĩnh vực: chính trị, kinh tế, văn hóa, xã hội. 
      Đây là sự lựa chọn sáng tạo, mang ý nghĩa lịch sử to lớn đối với sự phát triển lâu dài của dân tộc.
    `,
    icon: Star,
    category: "Kết luận",
    image: "/download (2).jpg",
    significance: "Khẳng định quá độ bỏ qua TBCN là tất yếu, rút ngắn con đường phát triển và mang ý nghĩa lịch sử to lớn."
  }
]



export function Timeline() {
  return (
    <section id="timeline" className="py-20 vietnamese-gradient cultural-pattern relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary rounded-full animate-float shadow-lg"></div>
        <div
          className="absolute top-60 right-20 w-32 h-32 bg-secondary rounded-full animate-float shadow-lg"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-28 h-28 bg-primary/80 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <h2 className="text-4xl md:text-6xl font-black text-primary hero-text-shadow">
                Việt Nam trên con đường quá độ lên XHCN
              </h2>
              <Sparkles className="w-8 h-8 text-secondary animate-pulse" />
            </div>
            <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed font-medium">
              Hành trình lý thuyết và thực tiễn của Việt Nam trong quá trình chuyển đổi lên chủ nghĩa xã hội, bỏ qua
              giai đoạn tư bản chủ nghĩa
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-1 rounded-full animate-glow shadow-lg"></div>

            <div className="space-y-16">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon
                const isEven = index % 2 === 0

                return (
                  <div
                    key={event.year}
                    className={`relative flex items-center animate-fade-in-up ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full transform -translate-x-3 md:-translate-x-3 z-10 shadow-2xl border-4 border-background animate-pulse-glow"></div>

                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                      <Card className="p-8 ml-12 md:ml-0 border-2 border-primary/20 group bg-card/95 backdrop-blur-sm hover:border-primary/40">
                        <div className="mb-6 relative overflow-hidden rounded-xl">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-56 object-cover"
                          />
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg">
                            <Icon className="h-7 w-7 text-primary-foreground" />
                          </div>
                          <Badge
                            variant="outline"
                            className="border-primary/30 text-primary px-3 py-1 text-sm font-semibold bg-primary/5"
                          >
                            {event.category}
                          </Badge>
                        </div>

                        <div className="mb-4">
                          <span className="text-5xl font-black text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                            {event.year}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-balance leading-tight">{event.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6 text-base">{event.description}</p>

                        <div className="border-t-2 border-primary/10 pt-4">
                          <p className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
                            <Star className="w-4 h-4" />Ý nghĩa:
                          </p>
                          <p className="text-sm text-muted-foreground italic leading-relaxed">{event.significance}</p>
                        </div>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
