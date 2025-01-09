import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link"
 
export default function BlogMenubarComponent() {
  return (
    <Tabs defaultValue="blog">
      <TabsList className="container mx-auto flex justify-end">
        <Link href="/about">
          <TabsTrigger className="text-sm hover:underline" value="about">
            Me?
          </TabsTrigger>
        </Link>
      </TabsList>
    </Tabs>
  )
}