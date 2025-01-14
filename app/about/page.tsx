import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className='overflow-hidden h-screen'>
      <nav className="sticky top-8 pr-8">
                <Link
                  href={`/`}
                  className="text-sm hover:underline"
                >
                  {'<- Read stories'}
                </Link>
        </nav>
    <div className="flex justify-center items-center min-h-screen">
      <Card className="max-w-2xl w-full mx-4 shadow-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">About Me</CardTitle>
        <CardDescription>Web Developer & Tech Enthusiast</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <section>
        <p className="text-gray-700">
          Hello! I&apos;m a passionate web developer with a keen interest in creating 
          user-friendly and efficient web applications. With expertise in React, 
          Next.js, and modern web technologies, I strive to build seamless digital 
          experiences that make a difference.
        </p>
        </section>
        
        <section>
        <h2 className="text-2xl font-semibold mb-2">Connect with Me</h2>
        <div className="flex space-x-4">
          <Button asChild variant="outline">
          <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Link>
          </Button>
          <Button asChild variant="outline">
          <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Link>
          </Button>
        </div>
        </section>
      </CardContent>
      </Card>
    </div>
    </div>
  )
}
