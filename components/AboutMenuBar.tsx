import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link"
 
export default function AboutMenubarComponent() {
  return (
    <Tabs defaultValue="blog">
      <TabsList className="container mx-auto flex justify-end">
        <TabsTrigger className="text-xl font-bold hover:underline" value="about">
          <Link href="/">Blog</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}