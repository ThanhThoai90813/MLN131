"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, GitBranch, Search, Shield, Award, Target } from "lucide-react"

export default function AcademicIntegritySection() {
  return (
    <section
      id="academic-integrity"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full animate-float"></div>
        <div
          className="absolute top-60 right-20 w-24 h-24 bg-indigo-500 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-slate-500 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-10 h-10 text-blue-600 animate-pulse" />
              <h2 className="text-main-title text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-700 bg-clip-text">
                Liêm Chính Học Thuật
              </h2>
              <Award className="w-10 h-10 text-indigo-600 animate-pulse" />
            </div>
            <p className="text-body-large text-slate-700 max-w-4xl mx-auto">
              Cam kết minh bạch trong việc sử dụng công nghệ AI và đảm bảo tính chính xác của thông tin
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-red-50 to-pink-50 group">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-subheading text-red-700">Cam Kết Bằng Văn Bản</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-body text-slate-700">
                  AI chỉ được sử dụng như một công cụ hỗ trợ, không thay thế hoàn toàn quá trình nghiên cứu và sáng tạo
                  của bản thân.
                </p>
                <div className="bg-gradient-to-r from-red-100 to-pink-100 p-5 rounded-xl border-l-4 border-red-500">
                  <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Tuyên bố chính thức:
                  </h4>
                  <p className="text-caption text-red-700 italic">
                    "Tất cả nội dung trong website này được nghiên cứu, biên soạn và chỉnh sửa bởi các thành viên trong nhóm. AI chỉ được
                    sử dụng để hỗ trợ tìm kiếm thông tin và cải thiện cách trình bày."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-amber-50 to-yellow-50 group">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <GitBranch className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-subheading text-amber-700">Phân Định Rõ Ràng</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-body text-slate-700">
                  Mọi nội dung được phân loại rõ ràng giữa thông tin gốc từ AI và phần được các thành viên chỉnh sửa, bổ
                  sung.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-300 font-semibold">
                      Nội dung gốc
                    </Badge>
                    <span className="text-sm text-slate-600">Từ nguồn tài liệu chính thống</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300 font-semibold">
                      Chỉnh sửa
                    </Badge>
                    <span className="text-sm text-slate-600">Phần được sinh viên biên soạn</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-300 font-semibold">
                      AI hỗ trợ
                    </Badge>
                    <span className="text-sm text-slate-600">Được AI hỗ trợ tìm kiếm/trình bày</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-emerald-50 to-green-50 group">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Search className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-subheading text-emerald-700">Đối Chiếu Nguồn</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-body text-slate-700">
                  Mọi thông tin do AI cung cấp đều được đối chiếu với các nguồn chính thống và tài liệu học thuật đáng
                  tin cậy.
                </p>
                <div className="bg-gradient-to-r from-emerald-100 to-green-100 p-5 rounded-xl border-l-4 border-emerald-500">
                  <h4 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Nguồn tham khảo chính:
                  </h4>
                  <ul className="text-sm text-emerald-700 space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1"></div>
                      <a
                        href="https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-xi/cuong-linh-xay-dung-dat-nuoc-trong-thoi-ky-qua-do-len-chu-nghia-xa-hoi-bo-sung-phat-trien-nam-2011-1528"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-emerald-800 font-medium"
                      >
                        Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (2011)
                      </a>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1"></div>
                      <a
                        href="https://fr.slideshare.net/slideshow/gio-trnh-ch-ngha-x-hi-khoa-hc-k2021pdf/259237498"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-emerald-800 font-medium"
                      >
                        Giáo trình chủ nghĩa xã hội khoa học(K-2021)
                      </a>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1"></div>
                      <a
                        href="https://mst.gov.vn/cuong-linh-2011-ngon-co-tu-tuong-ly-luan-kim-chi-nam-cua-dang-197146024.htm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-emerald-800 font-medium"
                      >
                        MST.gov.vn — Phân tích Cương lĩnh 2011
                      </a>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1"></div>
                      <a
                        href="https://docs.google.com/presentation/d/1kQdd9qrMSjm4x3j1IV_HJG2H6S6UgIYA/edit?slide=id.p1#slide=id.p1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-emerald-800 font-medium"
                      >
                        MLN131 — Scientific socialism_Chủ nghĩa xã hội khoa học
                      </a>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1"></div>
                      <a
                        href="https://nxbctqg.org.vn/giao-trinh-chu-nghia-xa-hoi-khoa-hoc-danh-cho-bac-dai-hoc-he-khong-chuyen-ly-luan-chinh-tri-.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-emerald-800 font-medium"
                      >
                        Giáo trình CNXH khoa học — NXB Chính trị quốc gia
                      </a>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1"></div>
                      <a
                        href="https://www.tapchicongsan.org.vn/hoat-ong-cua-lanh-ao-ang-nha-nuoc/-/2018/1690/mo-hinh%2C-muc-tieu-va-cac-phuong-huong-co-ban-duoc-xac-dinh-trong-cuong-linh-xay-dung-dat-nuoc-trong-thoi-ky-qua-do-len-chu-nghia-xa-hoi-%28bo-sung%2C-phat-trien-nam-2011%29.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-emerald-800 font-medium"
                      >
                        Tạp chí Cộng sản — Mục tiêu & phương hướng trong Cương lĩnh
                      </a>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1"></div>
                      <a
                        href="https://www.studocu.vn/vn/document/truong-dai-hoc-ngoai-thuong/chu-nghia-xa-hoi-khoa-hoc/chuong-3-chu-nghia-xa-hoi-va-thoi-ky-qua-do-len-chu-nghia-xa-hoi/23003973"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-emerald-800 font-medium"
                      >
                        Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội
                      </a>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Declaration Table */}
          <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-0 shadow-2xl overflow-hidden mb-16">
            <CardContent className="p-8">
              <h3 className="text-section-heading text-center mb-8 text-white">
                Bảng kê khai
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-white">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-4 px-3 text-body text-emphasis">Công cụ</th>
                      <th className="text-left py-4 px-3 text-body text-emphasis">Mục đích</th>
                      <th className="text-left py-4 px-3 text-body text-emphasis">Prompt chính (tóm tắt)</th>
                      <th className="text-left py-4 px-3 text-body text-emphasis">Kết quả AI (tóm tắt)</th>
                      <th className="text-left py-4 px-3 text-body text-emphasis">Chỉnh sửa của SV</th>
                      <th className="text-left py-4 px-3 text-body text-emphasis">Kiểm chứng nguồn</th>
                      <th className="text-left py-4 px-3 text-body text-emphasis">Vai trò</th>
                    </tr>
                  </thead>
                  <tbody className="text-body">
                    <tr className="border-b border-slate-700 hover:bg-slate-800/50 transition-colors">
                      <td className="py-4 px-3 text-emphasis">NotebookLM</td>
                      <td className="py-4 px-3">Tóm tắt nội dung từ sách/giáo trình</td>
                      <td className="py-4 px-3">"Tóm tắt nội dung X, nhấn mạnh khái niệm Y, giữ thuật ngữ gốc VN"</td>
                      <td className="py-4 px-3">5-7 ý chính, sơ đồ khái niệm</td>
                      <td className="py-4 px-3">Chuẩn hóa thuật ngữ, bổ sung ví dụ VN, chỉnh logic</td>
                      <td className="py-4 px-3">Đối chiếu giáo trình Chủ Nghĩa Xã Hội Khoa Học 2021</td>
                      <td className="py-4 px-3">Hỗ trợ</td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-slate-800/50 transition-colors">
                      <td className="py-4 px-3 text-emphasis">GPT</td>
                      <td className="py-4 px-3">Làm rõ khái niệm chưa hiểu</td>
                      <td className="py-4 px-3">"Giải thích rõ ràng các khái niệm A, ví dụ ngắn, gợi ý nguồn?"</td>
                      <td className="py-4 px-3">Giải thích khái niệm, ví dụ minh họa</td>
                      <td className="py-4 px-3">Chuẩn hóa thuật ngữ, sửa ví dụ theo bối cảnh VN</td>
                      <td className="py-4 px-3">Đối chiếu văn bản gốc, tích dẫn trang/điều</td>
                      <td className="py-4 px-3">Hỗ trợ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-slate-50 to-blue-50 border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-10">
              <h3 className="text-section-heading text-center mb-8 text-transparent bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text">
                Quy Trình Đảm Bảo Chất Lượng
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-black text-xl">1</span>
                  </div>
                  <h4 className="text-subheading text-slate-800 mb-3">Nghiên Cứu Sơ Bộ</h4>
                  <p className="text-body text-slate-600">
                    Tìm hiểu chủ đề từ các nguồn chính thống và đáng tin cậy
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-black text-xl">2</span>
                  </div>
                  <h4 className="text-subheading text-slate-800 mb-3">Hỗ Trợ AI</h4>
                  <p className="text-body text-slate-600">
                    Sử dụng AI để tìm kiếm và tổ chức thông tin một cách hiệu quả
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-black text-xl">3</span>
                  </div>
                  <h4 className="text-subheading text-slate-800 mb-3">Kiểm Chứng & Hoàn Thiện</h4>
                  <p className="text-body text-slate-600">
                    Đối chiếu với nguồn gốc và biên soạn theo phong cách riêng
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
