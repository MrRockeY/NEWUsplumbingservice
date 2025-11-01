"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from
    "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle2 } from "lucide-react";

import { usePathname } from "next/navigation";

const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required." }),
    phone: z.string()
        .min(1, { message: "Phone is required." })
        .regex(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, { message: "Please enter a valid phone number." }),
    email: z.string().email({ message: "Invalid email address." }),
    service: z.string().min(1, { message: "Please select a service." }),
    contactMethod: z.enum(["phone", "email", "text"]).optional(),
    preferredDate: z.string().optional(),
    comments: z.string().min(1, { message: "Comments are required." }),
    attachmentName: z.string().optional(),
    attachmentBase64: z.string().optional()
});

export default function ContactFormSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [attachmentFile, setAttachmentFile] = useState<File | null>(null);
    const [attachmentPreview, setAttachmentPreview] = useState<string | null>(null);

    const pathname = usePathname();

    const serviceMap: Record<string, string> = {
        "bathtubs-showers": "Bathtubs & Showers",
        "water-heater-service-repairs": "Water Heater Service & Repairs",
        "slab-leak-detection": "Slab Leak Detection",
        "pipe-repair": "Pipe Repair",
        "sinks-faucets": "Sinks & Faucets",
        "drain-cleaning": "Drain Cleaning",
        "garbage-disposal-service-installations": "Garbage Disposal",
        "backflow-prevention": "Backflow Prevention",
        "leaky-toilets": "Leaky Toilets"
    };

    // Infer a friendly service name from the pathname when available
    function inferServiceFromPath(p?: string) {
        if (!p) return "General Inquiry";
        for (const key of Object.keys(serviceMap)) {
            if (p.includes(key)) return serviceMap[key];
        }
        return "General Inquiry";
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onBlur",
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            service: inferServiceFromPath(),
            contactMethod: "phone",
            preferredDate: "",
            comments: "",
            attachmentName: undefined,
            attachmentBase64: undefined
        }
    });

    // When pathname changes, update default service if user hasn't chosen one explicitly
    useEffect(() => {
        const inferred = inferServiceFromPath(pathname || undefined);
        const current = form.getValues("service");
        if (!current || current === "General Inquiry") {
            form.setValue("service", inferred);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            // If there is an attached file, convert to base64 and include it
            let payload: Record<string, any> = { ...values };

            if (attachmentFile) {
                const maxBytes = 2 * 1024 * 1024; // 2MB
                if (attachmentFile.size > maxBytes) {
                    throw new Error("Attachment exceeds 2MB size limit.");
                }

                const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(String(reader.result));
                    reader.onerror = (err) => reject(err);
                    reader.readAsDataURL(file);
                });

                const base64 = await toBase64(attachmentFile);
                payload.attachmentName = attachmentFile.name;
                payload.attachmentBase64 = base64;
            }

            payload._subject = `New Inquiry: ${payload.service || "General"}`;

            const response = await fetch("https://formsubmit.co/ajax/contact@usaplumbingservice.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                const text = await response.text().catch(() => null);
                throw new Error(text || "Form submission failed.");
            }
        } catch (error) {
            setSubmitError(String((error as Error).message) || "Sorry, something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSuccess) {
        return (
            <div className="flex h-full min-h-[550px] flex-col items-center justify-center rounded-2xl border-2 border-[#c9a05f] bg-white p-6 text-center shadow-[0_8px_24px_rgba(201,160,95,0.2)] md:p-8 lg:p-10">
                <CheckCircle2 className="h-16 w-16 text-green-500" />
                <h3 className="mt-6 font-['Montserrat'] text-2xl font-bold text-[#1a2332]">Request Sent!</h3>
                <p className="mt-2 font-['Open_Sans'] text-[#4a5568]">Thanks — your request is on its way. We'll contact you to confirm scheduling and next steps.</p>
            </div>);

    }

    const inputStyles = "w-full font-['Open_Sans'] bg-[#faf8f5] border-[#d4cfc3] rounded-lg px-4 h-12 text-base focus-visible:ring-[#c9a05f]/20 focus-visible:border-[#c9a05f] focus:border-[#c9a05f] focus-visible:ring-2";

    return (
        <div className="rounded-2xl border-2 border-[#c9a05f] bg-white p-6 sm:p-6 md:p-8 lg:p-10 text-left shadow-[0_8px_24px_rgba(201,160,95,0.2)] w-full">
            <h2 className="mb-6 text-center font-['Montserrat'] text-[1.75rem] font-bold leading-tight text-[#1a2332]">
                Get in Touch
            </h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-[1.25rem]">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) =>
                            <FormItem>
                                <FormLabel className="font-['Open_Sans'] mb-2 block font-normal text-[#2d3748]">Name <span className="text-[#c9a05f]">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Your full name" {...field} className={inputStyles} aria-required="true" />
                                </FormControl>
                                <FormMessage className="font-['Open_Sans'] text-sm font-normal text-[#c9a05f]" />
                            </FormItem>
                        } />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) =>
                            <FormItem>
                                <FormLabel className="font-['Open_Sans'] mb-2 block font-normal text-[#2d3748]">Phone <span className="text-[#c9a05f]">*</span></FormLabel>
                                <FormControl>
                                    <Input type="tel" placeholder="909-123-4567" {...field} className={inputStyles} aria-required="true" />
                                </FormControl>
                                <FormMessage className="font-['Open_Sans'] text-sm font-normal text-[#c9a05f]" />
                            </FormItem>
                        } />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) =>
                            <FormItem>
                                <FormLabel className="font-['Open_Sans'] mb-2 block font-normal text-[#2d3748]">Email <span className="text-[#c9a05f]">*</span></FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="your@email.com" {...field} className={inputStyles} aria-required="true" />
                                </FormControl>
                                <FormMessage className="font-['Open_Sans'] text-sm font-normal text-[#c9a05f]" />
                            </FormItem>
                        } />

                    <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) =>
                            <FormItem>
                                <FormLabel className="font-['Open_Sans'] mb-2 block font-normal text-[#2d3748]">Service <span className="text-[#c9a05f]">*</span></FormLabel>
                                <FormControl>
                                    <select {...field} className={`${inputStyles} h-12`} aria-required="true">
                                        <option value="General Inquiry">General Inquiry</option>
                                        {Object.values(serviceMap).map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </FormControl>
                                <FormMessage className="font-['Open_Sans'] text-sm font-normal text-[#c9a05f]" />
                            </FormItem>
                        } />

                    <FormField
                        control={form.control}
                        name="contactMethod"
                        render={({ field }) =>
                            <FormItem>
                                <FormLabel className="font-['Open_Sans'] mb-2 block font-normal text-[#2d3748]">Preferred contact method</FormLabel>
                                <FormControl>
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <label className="flex items-center gap-2">
                                            <input type="radio" {...field} value="phone" checked={field.value === "phone"} onChange={() => field.onChange("phone")} />
                                            <span className="text-sm">Phone</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="radio" {...field} value="email" checked={field.value === "email"} onChange={() => field.onChange("email")} />
                                            <span className="text-sm">Email</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="radio" {...field} value="text" checked={field.value === "text"} onChange={() => field.onChange("text")} />
                                            <span className="text-sm">Text</span>
                                        </label>
                                    </div>
                                </FormControl>
                                <FormMessage className="font-['Open_Sans'] text-sm font-normal text-[#c9a05f]" />
                            </FormItem>
                        } />

                    <FormField
                        control={form.control}
                        name="preferredDate"
                        render={({ field }) =>
                            <FormItem>
                                <FormLabel className="font-['Open_Sans'] mb-2 block font-normal text-[#2d3748]">Preferred date & time</FormLabel>
                                <FormControl>
                                    <Input type="datetime-local" {...field} className={inputStyles} />
                                </FormControl>
                                <FormMessage className="font-['Open_Sans'] text-sm font-normal text-[#c9a05f]" />
                            </FormItem>
                        } />

                    <FormField
                        control={form.control}
                        name="comments"
                        render={({ field }) =>
                            <FormItem>
                                <FormLabel className="font-['Open_Sans'] mb-2 block font-normal text-[#2d3748]">Comments <span className="text-[#c9a05f]">*</span></FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us about your plumbing needs..."
                                        rows={4}
                                        {...field}
                                        className={`${inputStyles} h-auto min-h-[120px] resize-y py-3`}
                                        aria-required="true" />

                                </FormControl>
                                <FormMessage className="font-['Open_Sans'] text-sm font-normal text-[#c9a05f]" />
                            </FormItem>
                        } />

                    <FormItem>
                        <FormLabel className="font-['Open_Sans'] mb-2 block font-normal text-[#2d3748]">Attach a photo (optional, max 2MB)</FormLabel>
                        <FormControl>
                            <div>
                                <input type="file" accept="image/*" className="text-sm" onChange={(e) => {
                                    const f = e.target.files?.[0] ?? null;
                                    if (f) {
                                        setAttachmentFile(f);
                                        const url = URL.createObjectURL(f);
                                        setAttachmentPreview(url);
                                    } else {
                                        setAttachmentFile(null);
                                        setAttachmentPreview(null);
                                    }
                                }} />
                                {attachmentPreview && <img src={attachmentPreview} alt="preview" className="mt-2 max-h-28 object-contain" />}
                            </div>
                        </FormControl>
                    </FormItem>


                    {submitError && <p className="text-center text-sm text-[#c9a05f]">{submitError}</p>}

                    <div className="pt-2">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="h-auto w-full rounded-lg bg-[#c9a05f] px-4 py-4 font-['Montserrat'] text-lg font-bold text-[#1a2332] transition-all hover:scale-[1.02] hover:bg-[#b8860b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a05f]/30 focus-visible:ring-offset-2">

                            {isSubmitting ?
                                <Loader2 className="h-6 w-6 animate-spin" /> :

                                `Request ${form.getValues("service") || "Service"}`
                            }
                        </Button>
                    </div>

                    <p className="pt-2 text-center font-['Open_Sans'] text-[13px] font-normal text-[#6b7280]">
                        Your information is secure and will never be shared.
                    </p>
                </form>
            </Form>
        </div>);
}
