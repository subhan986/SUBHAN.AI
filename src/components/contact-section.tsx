
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const SendMessageFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(1, { message: "Message is required." }),
});

type SendMessageInput = z.infer<typeof SendMessageFormSchema>;

export function ContactSection() {
    const { toast } = useToast();

    const form = useForm<SendMessageInput>({
        resolver: zodResolver(SendMessageFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: SendMessageInput) {
        toast({
            title: "Demo Form",
            description: "This is a placeholder form and does not send messages.",
        });
        // The form is for display only, no message is sent.
        // We can reset the form if desired after submission.
        // form.reset();
    }

  return (
    <section id="contact" className="py-10 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12"
        >
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold font-headline text-primary">Connect With Me</h2>
            <p className="text-lg text-foreground/80 font-body">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
            </p>
            <div className="flex flex-wrap gap-4 font-body">
                <Button variant="outline" size="lg" asChild>
                <a href="mailto:subyounas@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email
                </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/cosmicdrug/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/subhan986" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                </a>
                </Button>
            </div>
          </div>

          <div className="font-body">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Name" {...field} />
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
                                    <Input placeholder="your.email@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Your message..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                         {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className="ml-2 h-5 w-5" />
                    </Button>
                </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
