"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText, Star, Clock } from "lucide-react"

interface EventDetailProps {
  event: {
    id: string
    year: string
    title: string
    description: string
    icon: any
    category: string
    image: string
    significance: string
    detailContent: {
      fullDescription: string
      keyPoints: string[]
      videoUrl: string
      documents: string[]
    }
  }
  onBack: () => void
  isTransitioning: boolean
}

export function EventDetail({ event, onBack, isTransitioning }: EventDetailProps) {
  const Icon = event.icon

  return (
    <div
      className={`min-h-screen vietnamese-gradient cultural-pattern transition-all duration-500 ${
        isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Button
              variant="ghost"
              size="lg"
              onClick={onBack}
              className="hover:bg-primary/10 text-primary font-semibold group transition-all duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Quay lại Timeline
            </Button>
          </div>

          <div className="mb-12">
            <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl bg-card/95 backdrop-blur-sm">
              <div className="relative h-72 md:h-96">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/20 rounded-xl backdrop-blur-sm border border-primary/30">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <Badge className="bg-secondary text-secondary-foreground border-0 px-3 py-1 font-semibold">
                        {event.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-background/20 text-primary-foreground border-primary-foreground/30"
                      >
                        {event.year}
                      </Badge>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-3 text-balance hero-text-shadow">
                      {event.title}
                    </h1>
                    <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl leading-relaxed">
                      {event.significance}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-6 border-2 border-secondary/20 shadow-lg bg-card/95 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-secondary-foreground flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <FileText className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  Mô tả chi tiết
                </h3>
                <p className="text-foreground/80 leading-relaxed text-lg">{event.detailContent.fullDescription}</p>
              </Card>

              <Card className="p-6 border-2 border-primary/20 shadow-lg bg-card/95 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Những điểm quan trọng</h3>
                </div>
                <div className="grid gap-4">
                  {event.detailContent.keyPoints.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10 hover:bg-primary/10 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-md">
                        {index + 1}
                      </div>
                      <p className="text-foreground/80 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Quick Info */}
              <Card className="p-6 border-2 border-secondary/20 bg-secondary/5 shadow-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-secondary-foreground flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Thông tin sự kiện
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                    <span className="text-muted-foreground font-medium">Năm:</span>
                    <Badge variant="secondary" className="font-bold">
                      {event.year}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                    <span className="text-muted-foreground font-medium">Phân loại:</span>
                    <Badge variant="secondary" className="font-bold">
                      {event.category}
                    </Badge>
                  </div>
                </div>
              </Card>

              {/* Navigation */}
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={onBack}
              >
                <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Quay lại Timeline
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
