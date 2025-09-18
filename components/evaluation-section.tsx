import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Presentation, Lightbulb } from "lucide-react"

const evaluationCriteria = [
  {
    title: "Phần I - Sản phẩm sáng tạo (20%)",
    icon: Lightbulb,
    color: "bg-blue-500/10 text-blue-600",
    sections: [
      {
        method: "Chiêu sâu học thuật & Liên kết lý thuyết",
        criteria: [
          { code: "1.1", content: "Xác định đúng lý thuyết", points: "1 điểm" },
          { code: "1.2", content: "Vận dụng đúng lý thuyết", points: "1 điểm" },
          { code: "1.3", content: "Tính logic giữa các phần, gắn kết với các LO", points: "1 điểm" },
        ],
      },
      {
        method: "Sáng tạo, Hình thức & Trình trình bày",
        criteria: [
          {
            code: "2.1",
            content: "Đảm bảo thời gian",
            points: "0.5 điểm",
            note: "Thời gian trải nghiệm sản phẩm không quá 15 phút",
          },
          {
            code: "2.2",
            content: "Sản phẩm trình bày sinh động (video, web, poster, kịch...)",
            points: "1 điểm",
            note: "Sản phẩm phải được thiết kế với ý tưởng rõ ràng về cách nó sẽ được trình bày/tương tác trong buổi thuyết trình. Nó phải là trung tâm của phần trình bày, không phải là một file đính kèm.",
          },
          {
            code: "2.3",
            content: "Thể hiện tư duy sáng tạo",
            points: "0.5 điểm",
            note: "Không sử dụng sản phẩm dạng slide thuyết trình",
          },
        ],
      },
      {
        method: "Tính tương tác",
        criteria: [
          { code: "3.1", content: "Có hoạt động mở", points: "1 điểm" },
          { code: "3.2", content: "Hoạt động kết", points: "1 điểm" },
        ],
      },
      {
        method: "Ứng dụng AI có trách nhiệm - minh bạch - sáng tạo - liêm chính học thuật",
        criteria: [
          {
            code: "4.1",
            content: 'Có slide/phụ lục "AI Usage" liệt kê công cụ, mục đích, prompt chính, kết quả và phần chỉnh sửa',
            points: "0.5 điểm",
          },
          {
            code: "4.2",
            content:
              "Có kiểm chứng thông tin AI bằng giáo trình LLCT, nghị quyết, văn bản chính thống; chịu trách nhiệm về nội dung cuối cùng",
            points: "0.5 điểm",
          },
          {
            code: "4.3",
            content:
              "Có ứng dụng sáng tạo rõ ràng: AI chỉ đóng vai trò hỗ trợ (tạo số đỏ, quiz, video, chatbot...), không thay thế toàn bộ",
            points: "0.5 điểm",
          },
          {
            code: "4.4",
            content:
              "Liêm chính học thuật (qua 3 dấu hiệu): - Có cam kết bằng văn bản (slide/phụ lục) khẳng định không để AI làm thay hoàn toàn. - Có phân định rõ AI output và phần sinh viên chỉnh sửa/biên soạn. - Có đối chiếu nguồn chính thống cho thông tin do AI sinh ra",
            points: "0.5 điểm",
          },
        ],
      },
      {
        method: "Tính cập nhật & Gắn kết thực tiễn",
        criteria: [
          {
            code: "5",
            content: "Bổ sung dẫn chứng từ bối cảnh xã hội, kinh tế - chính trị hiện nay",
            points: "1 điểm",
          },
        ],
      },
    ],
  },
  {
    title: "Phần 2 - Thuyết trình và phản biện (20%)",
    icon: Presentation,
    color: "bg-green-500/10 text-green-600",
    sections: [
      {
        method: "Kỹ năng trình bày & Tổ chức logic",
        criteria: [
          {
            code: "1.1",
            content: "Tuân thủ thời lượng (10-20 phút thuyết trình, 15-20 phút phản biện)",
            points: "1 điểm",
            note: "Tổng thời gian thuyết trình tối đa không quá 50ph. Yêu cầu nhóm sinh viên tự kiểm soát thời gian thuyết trình của mình, không cắt ngắn thời gian thuyết trình và trả lời phản biện để tổ chức hoạt động mở, kết. Nếu nhóm thuyết trình vượt quá thời gian sẽ bị trừ điểm tương ứng. Tuân thủ thời lượng (10-20 phút thuyết trình, 15-20 phút phản biện, thời gian trải nghiệm sản phẩm không quá 15 phút).",
          },
          {
            code: "1.2",
            content: "Trình bày rõ ràng, hấp dẫn, tự tin, ngôn ngữ phù hợp",
            points: "1 điểm",
            note: "Hình thức thuyết trình phải liên kết chặt chẽ và làm nổi bật được giá trị của sản phẩm sáng tạo, thay vì chỉ mô tả lại nó. Ví dụ: Nếu sản phẩm là video, phần trình bày không chỉ là 'chiếu video' mà phải có phần dẫn dắt, phần tích, hoặc tương tác dựa trên video đó.",
          },
          {
            code: "1.3",
            content: "Bố cục mạch lạc, logic, có dẫn dắt và kết nối giữa các phần",
            points: "1 điểm",
          },
        ],
      },
      {
        method: "Phản biện & trả lời phản biện",
        criteria: [
          {
            code: "2.1",
            content: "Tham gia trả lời phản biện câu hỏi của các nhóm",
            points: "1 điểm",
          },
          {
            code: "2.2",
            content: "Tham gia đặt câu hỏi cho ít nhất 3 nhóm được phân công (ít nhất 2 câu/nhóm)",
            points: "3 điểm",
            note: "Yêu cầu: logic, dẫn chứng, tôn trọng đối thoại, khuyến khích tư duy phản biện. Điểm được tính là trung bình cộng các lượt phản biện (câu hỏi cho nhóm khác + trả lời phản biện)",
          },
        ],
      },
      {
        method: "Đánh giá nội bộ",
        criteria: [
          {
            code: "3",
            content: "Các thành viên chấm điểm cá nhân cho các thành viên nhóm của mình theo các tiêu chí của edunext",
            points: "3 điểm",
            note: "Các thành viên trong nhóm có sự phân công nhiệm vụ rõ ràng, đảm bảo tất cả các thành viên đều phải tham gia vào bài thuyết trình",
          },
        ],
      },
    ],
  },
]

export function EvaluationSection() {
  return (
    <section id="evaluation" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tiêu chí đánh giá</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hệ thống tiêu chí đánh giá chi tiết cho bài thuyết trình về quá trình xây dựng chủ nghĩa xã hội tại Việt
              Nam
            </p>
          </div>

          <div className="space-y-8">
            {evaluationCriteria.map((part, partIndex) => {
              const Icon = part.icon
              return (
                <Card key={partIndex} className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg ${part.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{part.title}</h3>
                  </div>

                  <div className="space-y-6">
                    {part.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="border-l-4 border-primary/30 pl-6">
                        <h4 className="font-semibold text-lg mb-4 text-primary">{section.method}</h4>

                        <div className="space-y-3">
                          {section.criteria.map((criterion, criterionIndex) => (
                            <div key={criterionIndex} className="bg-muted/30 rounded-lg p-4">
                              <div className="flex items-start justify-between gap-4 mb-2">
                                <div className="flex items-center gap-3">
                                  <Badge variant="outline" className="font-mono text-xs">
                                    {criterion.code}
                                  </Badge>
                                  <span className="font-medium">{criterion.content}</span>
                                </div>
                                <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">
                                  {criterion.points}
                                </Badge>
                              </div>

                              {criterion.note && (
                                <div className="mt-3 p-3 bg-amber-50 border-l-4 border-amber-400 rounded-r">
                                  <p className="text-sm text-amber-800 leading-relaxed">
                                    <strong>Ghi chú:</strong> {criterion.note}
                                  </p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="mt-12">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Lưu ý quan trọng</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  • Tổng điểm tối đa:{" "}
                  <strong className="text-foreground">
                    40% (20% sản phẩm sáng tạo + 20% thuyết trình và phản biện)
                  </strong>
                </p>
                <p>
                  • Thời gian thuyết trình:{" "}
                  <strong className="text-foreground">10-20 phút thuyết trình + 15-20 phút phản biện</strong>
                </p>
                <p>• Sản phẩm sáng tạo phải là trung tâm của bài thuyết trình, không chỉ là tài liệu đính kèm</p>
                <p>• Bắt buộc sử dụng AI có trách nhiệm với đầy đủ tài liệu minh chứng</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
