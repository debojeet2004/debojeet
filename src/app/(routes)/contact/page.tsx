"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Send, Copy } from "lucide-react"
import { motion } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(
    // values: z.infer<typeof formSchema>
  ) {
    toast.success("Thank you for reaching out. I'll get back to you soon.")
    form.reset()
  }
  const handleCopy = () => {
    navigator.clipboard.writeText("debojeetkarmakar2020@gmail.com")
      .then(() => {
        toast.success("Email copied!"); // Optional: you can remove this if you don't want the alert
      })
      .catch((err) => {
        toast.error("Failed to copy:", err);
      });
  };

  return (
    <div className=" mx-auto px-4 mt-[2rem] md:mt-[4rem] max-w-4xl">
      <div className="space-y-8">
      <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='space-y-4'
      >
          <h1 className="text-5xl font-thin tracking-tight">Let&apos;s Connect</h1>
          <p className="text-muted-foreground text-md">
            Let&apos;s create something remarkable together! Whether you need a sounding board for your ideas or a partner to bring your vision to life, I&apos;m here to lend a helping hand.
          </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <Card className="bg-stone-900">
          <CardHeader>
            <CardTitle>Subscribe</CardTitle>
            <CardDescription>
              Get notified about new articles and resources. Sent out every two weeks. No spam.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex gap-2">
              <Input 
                placeholder="your@email.com" 
                className = "bg-stone-800"
                />
              <Button>Subscribe</Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-stone-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email Me
            </CardTitle>
            <CardDescription className="text-stone-400">
              Send me an email directly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleCopy} variant="secondary" className="w-full bg-gradient-to-l from-stone-600 to-stone-800 mt-5">
              <Copy /> Get my Email
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Card className="bg-stone-900">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription className="text-stone-400">
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input 
                            className="bg-stone-800 border-stone-700"
                            placeholder="Your name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            className="bg-stone-800 border-stone-700"
                            placeholder="your@email.com" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          className="bg-stone-800 border-stone-700 min-h-[150px] max-h-[200px]"
                          placeholder="Tell me about your project..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-gradient-to-l from-stone-200 to-stone-300 font-semibold">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
                
      </div>
    </div>
  )
}