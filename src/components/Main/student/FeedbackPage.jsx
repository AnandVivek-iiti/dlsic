'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { MessageSquarePlus, ShieldCheck, Loader2, Send, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  feedbackType: z.string({ required_error: "Please select a feedback type." }),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  description: z.string().min(20, "Description must be at least 20 characters."),
  isAnonymous: z.boolean().default(false).optional(),
  name: z.string().optional(),
  class: z.string().optional(),
}).refine(data => !data.isAnonymous ? !!data.name && !!data.class : true, {
  message: "Name and Class are required unless submitting anonymously.",
  path: ["name"],
});

const FeedbackPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isAnonymous: false,
      subject: "",
      description: "",
      name: "",
      class: "",
      feedbackType: "",
    },
  });

  const isAnonymous = watch("isAnonymous");

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmittedSuccessfully(true);
        reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("There was a problem sending your feedback.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-10 p-6 max-w-4xl mx-auto">
      <div className="text-center">
        <div className="inline-block bg-orange-100 p-4 rounded-full border border-orange-300">
          <MessageSquarePlus className="h-10 w-10 text-orange-600" />
        </div>
        <h1 className="text-3xl font-bold text-blue-700 mt-4">Feedback & Suggestions</h1>
        <p className="text-gray-600 mt-2">Share your thoughts or issues to help us improve.</p>
      </div>

      <div className="rounded-lg border bg-blue-50 p-4 text-sm text-blue-700">
        <div className="flex items-start gap-4">
          <ShieldCheck className="h-6 w-6 mt-1" />
          <div>
            <h4 className="font-bold">Your Feedback Matters</h4>
            <p>We appreciate honest and constructive feedback. Submissions are confidential.</p>
          </div>
        </div>
      </div>

      {isSubmittedSuccessfully ? (
        <div className="text-center py-12">
          <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
          <h3 className="mt-4 text-2xl font-bold text-green-700">Feedback Submitted</h3>
          <p className="mt-2 text-gray-500">Thank you! We value your input.</p>
          <button onClick={() => setIsSubmittedSuccessfully(false)} className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Submit Another Feedback
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Feedback Type</label>
              <select {...register("feedbackType")} className="w-full border rounded p-2">
                <option value="">Select a type</option>
                <option value="suggestion">Suggestion</option>
                <option value="complaint">Complaint</option>
                <option value="compliment">Compliment</option>
                <option value="other">Other</option>
              </select>
              {errors.feedbackType && <p className="text-red-500 text-sm mt-1">{errors.feedbackType.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input {...register("subject")} className="w-full border rounded p-2" placeholder="Subject" />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea {...register("description")} rows={6} className="w-full border rounded p-2" placeholder="Describe your feedback..." />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>

          <div className="flex items-start gap-3 border p-4 rounded bg-gray-50">
            <input type="checkbox" {...register("isAnonymous")} className="mt-1" />
            <div>
              <label className="font-medium">Submit Anonymously</label>
              <p className="text-sm text-gray-500">Your name and class will not be recorded.</p>
            </div>
          </div>

          {!isAnonymous && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Your Name</label>
                <input {...register("name")} className="w-full border rounded p-2" placeholder="Enter your name" />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Class</label>
                <input {...register("class")} className="w-full border rounded p-2" placeholder="e.g., Class 12th" />
                {errors.class && <p className="text-red-500 text-sm mt-1">{errors.class.message}</p>}
              </div>
            </div>
          )}

          <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-2 px-4 rounded flex items-center justify-center">
            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackPage;
