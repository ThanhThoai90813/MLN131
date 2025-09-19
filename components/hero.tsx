"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Target, BookOpen, Users, Sparkles, ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToTimeline = () => {
    document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-16 vietnamese-gradient cultural-pattern relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full animate-float shadow-lg"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-secondary rounded-full animate-float shadow-lg"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary/80 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-40 right-1/3 w-28 h-28 bg-secondary/80 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-8 text-lg font-emphasis px-8 py-3 animate-glow shadow-lg">
            <Sparkles className="w-5 h-5 mr-2" />
            Chủ nghĩa Mác-Lenin - MLN131 - Nhóm 7
          </Badge>

          <h1 className="text-main-title text-balance mb-8 hero-text-shadow animate-fade-in-up">
            Quá độ lên{" "}
            <span className="text-highlight-socialism animate-pulse-glow">
              Chủ Nghĩa Xã Hội
            </span>{" "}
            tại Việt Nam
          </h1>

          <p className="text-body-large text-foreground/80 text-balance mb-12 max-w-4xl mx-auto animate-slide-in-left">
            Hành trình lịch sử vĩ đại từ xã hội phong kiến thực dân đến xã hội xã hội chủ nghĩa dưới sự lãnh đạo của
            Đảng Cộng sản Việt Nam
          </p>

          <div className="mb-12 animate-slide-in-right">
            <div className="relative inline-block group">
              <img
                src="/chu-nghia-xa-hoi-mang-den-nhung-gia-tri-tot-dep-cho-con-nguoi_2206171404.webp"
                alt="Chủ tịch Hồ Chí Minh và Tuyên ngôn Độc lập"
                className="mx-auto rounded-2xl shadow-2xl max-w-lg w-full transform group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-30 blur-xl animate-pulse group-hover:opacity-50 transition-opacity"></div>
            </div>
          </div>

          <Card
            className="p-8 text-left max-w-5xl mx-auto glass-effect border-2 border-primary/20 animate-fade-in-up shadow-xl"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Target className="w-8 h-8 text-primary" />
              <h3 className="text-section-heading text-primary">Mục tiêu nghiên cứu</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors border border-primary/10">
                  <BookOpen className="w-7 h-7 text-primary mt-1 flex-shrink-0" />
                  <span className="text-body text-emphasis">
                    Làm rõ lý do và cơ sở Việt Nam chọn con đường quá độ bỏ qua TBCN.
                  </span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-secondary/5 rounded-lg hover:bg-secondary/10 transition-colors border border-secondary/20">
                  <Users className="w-7 h-7 text-secondary-foreground mt-1 flex-shrink-0" />
                  <span className="text-body text-emphasis">
                    Phân tích điều kiện chủ quan và khách quan tác động đến quá trình quá độ.
                  </span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors border border-primary/10">
                  <Star className="w-7 h-7 text-primary mt-1 flex-shrink-0" />
                  <span className="text-body text-emphasis">Hiểu rõ nội dung “bỏ qua TBCN” và cách Việt Nam vận dụng.</span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-secondary/5 rounded-lg hover:bg-secondary/10 transition-colors border border-secondary/20">
                  <Target className="w-7 h-7 text-secondary-foreground mt-1 flex-shrink-0" />
                  <span className="text-body text-emphasis">
                    Trình bày 8 đặc trưng và 8 phương hướng xây dựng <span className="text-highlight-socialism">CNXH</span> theo Cương lĩnh 2011.
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
