import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { RssIcon } from "./RssIcon"
import Link from "next/link"
 
export default function BlogMenubarComponent() {
    return (
        <Tabs defaultValue="blog">
            <TabsList className="container mx-auto flex justify-end items-center">
                 <Link href="/about">
                    <TabsTrigger className="text-md hover:underline shadow-sm" value="about">
                        Me?
                    </TabsTrigger>
                </Link>
                <TabsTrigger className="flex items-center shadow-sm" value="rss">
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="/rss"
                    >
                        <RssIcon />
                    </a>
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}