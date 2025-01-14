import { ModeToggle } from "./DarkMode"
import { RssIcon } from "./RssIcon"
import Link from "next/link"

 
export default function BlogMenubarComponent() {
    return (
            < div className="container mx-auto flex justify-end items-center">
                 <Link href="/about">
                    <div className="text-md hover:underline pr-8">
                        About?
                </div>
            </Link>
            <div className="flex items-center">
                
                    <a
                    className="pr-"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="/rss"
                >
                    <RssIcon />
                </a>
                <ModeToggle />
            </div>
            
        </div>
    )
}
