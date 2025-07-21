"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { changeSummaryToneAction } from "@/app/actions";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  summary: z.string().min(10, "Summary must be at least 10 characters long."),
  tone: z.string({ required_error: "Please select a tone." }),
});

type SummaryFormValues = z.infer<typeof formSchema>;

interface SummaryToneChangerProps {
  initialSummary: string;
}

export function SummaryToneChanger({ initialSummary }: SummaryToneChangerProps) {
  const [rewrittenSummary, setRewrittenSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<SummaryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      summary: initialSummary,
      tone: "professional",
    },
    mode: "onChange",
  });

  async function onSubmit(values: SummaryFormValues) {
    setIsLoading(true);
    setRewrittenSummary("");
    const result = await changeSummaryToneAction(values);
    setIsLoading(false);

    if (result.success && result.data) {
      setRewrittenSummary(result.data.rewrittenSummary);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      });
    }
  }

  const tones = ["Professional", "Casual", "Enthusiastic", "Witty", "Poetic"];

  return (
    <Card className="bg-card/50 border-border mt-8">
      <CardHeader>
        <CardTitle className="font-headline text-xl lg:text-2xl">AI-Powered Tone Changer</CardTitle>
        <CardDescription>
          See my summary in a different voice. Select a tone and let AI rewrite it.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="summary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Original Summary</FormLabel>
                  <FormControl>
                    <Textarea rows={6} {...field} className="bg-background/50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rewrite Tone</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a tone" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {tones.map((tone) => (
                        <SelectItem key={tone} value={tone.toLowerCase()}>
                          {tone}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Rewrite with AI
            </Button>
          </form>
        </Form>
        {isLoading && (
            <div className="mt-6 space-y-2">
                <div className="h-4 bg-muted rounded w-1/4 animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
            </div>
        )}
        {rewrittenSummary && !isLoading && (
          <div className="mt-6">
            <h4 className="font-bold font-headline">Rewritten Summary:</h4>
            <p className="mt-2 text-foreground/80 whitespace-pre-wrap">{rewrittenSummary}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
