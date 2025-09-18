import { Badge } from "@/components/ui/badge"

export function Footer() {
  return (
    <footer className="bg-muted/40 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">VN</span>
            </div>
            <h3 className="font-semibold">Quá độ lên Chủ nghĩa Xã hội ở Việt Nam</h3>
          </div>

          <p className="text-muted-foreground text-sm mb-4">
            Website học thuật phục vụ nghiên cứu và thuyết trình môn Chủ nghĩa Mác-Lenin : MLN131
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <Badge variant="outline">Học thuật</Badge>
            <Badge variant="outline">Mác-Lenin</Badge>
            <Badge variant="outline">MLN131</Badge>
            <Badge variant="outline">Chủ nghĩa xã hội</Badge>
          </div>

          <div className="text-xs text-muted-foreground">
            <p>© 2024 - Tài liệu học tập và nghiên cứu</p>
            <p className="mt-1">Được phát triển cho mục đích thuyết trình, tuân thủ các quy định về học thuật.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
