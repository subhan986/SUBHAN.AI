"use client";

<<<<<<< HEAD
import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Star, User, Calendar, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShinyCard } from "./shiny-card";
import { useFirestore, useCollection } from "@/firebase";
import { collection, addDoc, query, orderBy } from "firebase/firestore";

const ReviewSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  role: z.string().optional(),
  content: z.string().min(5, "Review must be at least 5 characters."),
  rating: z.number().min(1).max(5),
});

type ReviewInput = z.infer<typeof ReviewSchema>;

export function ReviewsSection() {
  const db = useFirestore();

  const reviewsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, "reviews"), orderBy("date", "desc"));
  }, [db]);

  const { data: reviews, loading } = useCollection<{ 
    name: string; 
    role?: string; 
    content: string; 
    rating: number; 
    date: string 
  }>(reviewsQuery);

  const form = useForm<ReviewInput>({
    resolver: zodResolver(ReviewSchema),
    defaultValues: {
      name: "",
      role: "",
      content: "",
      rating: 5,
    },
  });

  async function onSubmit(values: ReviewInput) {
    if (!db) return;

    const newReview = {
      ...values,
      date: new Date().toISOString(),
    };

    // Mutation call (async background update)
    addDoc(collection(db, "reviews"), newReview);
    form.reset();
  }

  return (
    <section id="reviews" className="py-10 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold font-headline text-primary">Community Intel</h2>
          <p className="mt-2 text-lg text-foreground/80 font-body">What others have to say about the mission.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Review Form */}
          <div className="lg:col-span-1">
            <ShinyCard>
              <Card className="bg-card/40 border-white/10 p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl font-headline flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Leave a Review
                  </CardTitle>
                </CardHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase opacity-50">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} className="bg-white/5" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase opacity-50">Role / Company (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Developer, Designer, etc." {...field} className="bg-white/5" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase opacity-50">Your Thoughts</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Share your experience..." {...field} className="bg-white/5 min-h-[100px]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full mt-2 font-headline text-[10px]" size="lg" disabled={!db}>
                      Broadcast Review <Send className="ml-2 w-3 h-3" />
                    </Button>
                  </form>
                </Form>
              </Card>
            </ShinyCard>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="popLayout">
              {loading ? (
                <div className="text-center py-20 opacity-50 font-body">Loading transmissions...</div>
              ) : reviews?.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ShinyCard>
                    <div className="p-6 bg-card/20 border border-white/5 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/20">
                            <User className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg font-sans leading-none mb-1">{review.name}</h4>
                            {review.role && <p className="text-xs text-foreground/50">{review.role}</p>}
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="flex gap-1 mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-3 h-3 ${i < review.rating ? "text-primary fill-primary" : "text-white/10"}`} />
                            ))}
                          </div>
                          <div className="flex items-center gap-1 text-[10px] text-foreground/40 font-mono">
                            <Calendar className="w-2 h-2" />
                            {new Date(review.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <p className="text-foreground/80 italic font-body leading-relaxed">
                        "{review.content}"
                      </p>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors" />
                    </div>
                  </ShinyCard>
                </motion.div>
              ))}
            </AnimatePresence>
            {!loading && reviews?.length === 0 && (
              <div className="text-center py-20 opacity-20">
                <MessageSquare className="w-12 h-12 mx-auto mb-4" />
                <p className="font-headline text-xs">No transmissions received yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
=======
/**
 * This component has been deactivated to remove the Reviews feature.
 */
export function ReviewsSection() {
  return null;
>>>>>>> 56ba6da (remove firebase backend completely remove reviews)
}
