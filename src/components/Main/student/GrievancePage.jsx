'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FileWarning, ShieldCheck, Loader2, Send, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  grievanceType: z.string({ required_error: "Please select a grievance type." }),
  description: z.string().min(20, "Description must be at least 20 characters."),
  name: z.string().optional(),
  class: z.string().optional(),
  isAnonymous: z.boolean().default(false).optional(),
}).refine(data => !data.isAnonymous ? !!data.name && !!data.class : true, {
  message: "Name and Class are required unless submitting anonymously.",
  path: ["name"],
});

export default function GrievancePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { isAnonymous: false },
  });

  const isAnonymous = watch("isAnonymous");

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:5000/api/grievances", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission failed");

      reset({ isAnonymous: false, description: "", grievanceType: "", name: "", class: "" });
      setIsSubmittedSuccessfully(true);
    } catch (error) {
      console.error("Error submitting grievance:", error);
      alert("There was a problem sending your grievance.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto py-6">
      <div className="text-center">
        <div className="inline-block bg-red-100 p-4 rounded-full border border-red-300">
          <FileWarning className="h-10 w-10 text-red-500" />
        </div>
        <h2 className="pt-4 text-3xl font-bold text-red-600">Grievance Submission</h2>
        <p className="text-lg text-gray-600">Report issues or concerns confidentially.</p>
      </div>

      <div className="bg-blue-100 p-4 rounded-md flex items-start gap-4 border text-blue-800">
        <ShieldCheck className="h-6 w-6 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-semibold">Your voice matters</h4>
          <p>We ensure that every submission is treated fairly and confidentially.</p>
        </div>
      </div>

      {isSubmittedSuccessfully ? (
        <div className="text-center py-12">
          <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
          <h3 className="mt-4 text-2xl font-bold text-green-700">Submitted Successfully</h3>
          <p className="mt-2 text-gray-500">Thank you! Your concern has been recorded.</p>
          <button
            onClick={() => setIsSubmittedSuccessfully(false)}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700"
          >
            Submit Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Grievance Type */}
          <div>
            <label className="font-medium block mb-1">Grievance Type</label>
            <select {...register("grievanceType")} className="w-full border rounded px-3 py-2">
              <option value="">Select a type</option>
              <option value="academic">Academic</option>
              <option value="administrative">Administrative</option>
              <option value="harassment">Harassment</option>
              <option value="other">Other</option>
            </select>
            {errors.grievanceType && <p className="text-sm text-red-500">{errors.grievanceType.message}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="font-medium block mb-1">Description</label>
            <textarea
              {...register("description")}
              className="w-full border rounded px-3 py-2"
              rows={5}
              placeholder="Please describe your grievance..."
            />
            {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
          </div>

          {/* Anonymous Option */}
          <div className="flex items-center space-x-3 border p-3 rounded-md bg-gray-50">
            <input type="checkbox" {...register("isAnonymous")} id="isAnonymous" />
            <label htmlFor="isAnonymous">
              <span className="font-medium">Submit Anonymously</span><br />
              <span className="text-sm text-gray-500">Your name and class will not be stored.</span>
            </label>
          </div>

          {/* Name & Class if not anonymous */}
          {!isAnonymous && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-medium block mb-1">Your Name</label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Enter your name"
                  className="w-full border rounded px-3 py-2"
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
              </div>
              <div>
                <label className="font-medium block mb-1">Class</label>
                <input
                  type="text"
                  {...register("class")}
                  placeholder="e.g., Class 12th"
                  className="w-full border rounded px-3 py-2"
                />
                {errors.class && <p className="text-sm text-red-500">{errors.class.message}</p>}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Submit Grievance
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
